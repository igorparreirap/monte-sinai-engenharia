<?php
// Copie este arquivo para smtp-config.php NO SERVIDOR (fora de public_html) e preencha.
// smtp-config.php está no .gitignore e nunca deve ser versionado.
//
// Servidor padrão: SMTP da Locaweb (email-ssl.com.br, porta 465, SSL).
// A Locaweb exige que o remetente seja a mesma conta usada no login.
return [
    // Conta que envia as mensagens do formulário (recomendado: uma caixa só para o site).
    'username' => 'site@exemplo.com.br',
    'password' => 'SENHA_DESSA_CAIXA',

    // Quem recebe as mensagens: um endereço ou uma lista.
    'to' => [
        'contato@exemplo.com.br',
        'outra-pessoa@exemplo.com.br',
    ],

    // Opcionais:
    // 'host' => 'email-ssl.com.br',
    // 'port' => 465,
    // 'from' => 'site@exemplo.com.br',   // padrão: igual a 'username'
    // 'from_name' => 'Monte Sinai Engenharia - Site',
];
