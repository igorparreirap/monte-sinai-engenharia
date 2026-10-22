<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

const RATE_LIMIT_SECONDS = 60;

// Valores padrão (SMTP da Locaweb, onde fica o e-mail da empresa).
// Qualquer um pode ser sobrescrito em private/smtp-config.php.
// A Locaweb exige que o remetente ('from') seja a mesma conta autenticada ('username').
const SMTP_DEFAULTS = [
    'host' => 'email-ssl.com.br',
    'port' => 465,
    'username' => 'contato@montesinaieng.com.br',
    'password' => '',
    'from' => '',
    'from_name' => 'Monte Sinai Engenharia - Site',
    // Um endereço ou uma lista de endereços que recebem as mensagens.
    'to' => 'contato@montesinaieng.com.br',
];

function respond(int $status, string $message): never
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Método não permitido.');
}

// Campo-armadilha: robôs costumam preenchê-lo; pessoas não o veem.
if (!empty($_POST['website'])) {
    respond(200, 'Mensagem enviada com sucesso. Entraremos em contato em breve.');
}

// Limite simples de um envio por minuto por IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'desconhecido';
$rateFile = sys_get_temp_dir() . '/monte-sinai-contato-' . hash('sha256', $ip);
if (is_file($rateFile) && (time() - (int) filemtime($rateFile)) < RATE_LIMIT_SECONDS) {
    respond(429, 'Aguarde um minuto antes de enviar uma nova mensagem.');
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$subject = (string) ($_POST['subject'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));

$subjects = [
    'orcamento' => 'Orçamento',
    'duvida' => 'Dúvida',
    'reclamacao' => 'Reclamação',
    'elogio' => 'Elogio',
    'outro' => 'Outro',
];

if ($name === '' || mb_strlen($name) > 120 || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
    respond(422, 'Confira seu nome e endereço de e-mail.');
}
if (mb_strlen($phone) > 40 || !isset($subjects[$subject]) || $message === '' || mb_strlen($message) > 5000) {
    respond(422, 'Confira o assunto, telefone e mensagem.');
}

// Na hospedagem, vendor/ e private/ ficam ao lado de public_html/, fora do acesso público.
$projectRoot = dirname(__DIR__, 2);
$configPath = getenv('SMTP_CONFIG_PATH') ?: $projectRoot . '/private/smtp-config.php';
$autoloadPath = $projectRoot . '/vendor/autoload.php';
if (!is_file($configPath) || !is_file($autoloadPath)) {
    error_log('Formulário de contato: configuração SMTP ou PHPMailer ausente.');
    respond(500, 'O formulário ainda não está configurado. Entre em contato por telefone ou tente mais tarde.');
}

$smtp = array_merge(SMTP_DEFAULTS, (array) require $configPath);
require $autoloadPath;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) $smtp['host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $smtp['username'];
    $mail->Password = (string) $smtp['password'];
    $mail->Port = (int) $smtp['port'];
    $mail->SMTPSecure = $mail->Port === 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom((string) ($smtp['from'] ?: $smtp['username']), (string) $smtp['from_name']);
    foreach ((array) $smtp['to'] as $recipient) {
        $mail->addAddress((string) $recipient);
    }
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Contato pelo site: ' . $subjects[$subject];
    $mail->Body = "Nome: {$name}\nE-mail: {$email}\nTelefone: {$phone}\nAssunto: {$subjects[$subject]}\n\nMensagem:\n{$message}";
    $mail->send();

    touch($rateFile);
    respond(200, 'Mensagem enviada com sucesso. Entraremos em contato em breve.');
} catch (Throwable $error) {
    error_log('Falha no envio do formulário: ' . $error->getMessage());
    respond(500, 'Não foi possível enviar sua mensagem agora. Tente novamente mais tarde ou fale conosco por telefone.');
}
