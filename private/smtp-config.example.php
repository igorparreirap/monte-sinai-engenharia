<?php
// Copie este arquivo para smtp-config.php NO SERVIDOR (fora de public_html) e preencha.
// smtp-config.php está no .gitignore e nunca deve ser versionado.
//
// Só 'password' é obrigatório. Os demais campos têm valores padrão no endpoint
// (SMTP da HostGator com a conta montesinai@montesinaieng.com.br).
//
// Exemplo usando o SMTP da Locaweb, onde fica o e-mail da empresa:
//   'host' => 'email-ssl.com.br', 'port' => 465,
//   'username' => 'contato@montesinaieng.com.br', 'from' => 'contato@montesinaieng.com.br'
return [
    'password' => 'SENHA_DA_CAIXA_DE_EMAIL',
    // 'host' => 'br184.hostgator.com.br',
    // 'port' => 465,
    // 'username' => 'montesinai@montesinaieng.com.br',
    // 'from' => 'montesinai@montesinaieng.com.br',
    // 'from_name' => 'Monte Sinai Engenharia - Site',
    // 'to' => 'montesinai@montesinaieng.com.br',
];
