# Monte Sinai Engenharia e Construções — Site institucional

**🔗 [montesinaiengenharia.com.br](https://montesinaiengenharia.com.br)** · 🇺🇸 [Read in English](README.md)

Site institucional da **Monte Sinai Engenharia e Construções**, empresa de engenharia elétrica sediada em Itaberaí – GO desde 2013.

<p align="center">
  <img src="docs/site-desktop.webp" alt="Página inicial no computador" width="72%" />
  <img src="docs/site-mobile.webp" alt="Página inicial no celular" width="22%" />
</p>

## Funcionalidades

- Página única e responsiva: apresentação, sobre, serviços, contato e mapa
- Contatos por WhatsApp com mensagem de saudação já preenchida
- Formulário de contato que envia e-mails por SMTP autenticado, com validação no servidor, campo-armadilha contra robôs e limite de envios
- SEO: meta tags, Open Graph, dados estruturados schema.org, `sitemap.xml` e `robots.txt`
- Acessibilidade: HTML semântico, campos com rótulo, link "pular para o conteúdo", foco visível e respeito a `prefers-reduced-motion`
- Performance: imagens em WebP com `srcset`, fontes auto-hospedadas e bundle enxuto

## Lighthouse

| Dispositivo | Performance | Acessibilidade | Boas práticas | SEO |
| ----------- | :---------: | :------------: | :-----------: | :-: |
| Celular     |     99      |       97       |      100      | 100 |
| Computador  |     100     |       97       |      100      | 100 |

## Tecnologias

| Camada     | Tecnologias                                                     |
| ---------- | --------------------------------------------------------------- |
| Front-end  | React 18, TypeScript (strict), Vite, Tailwind CSS, lucide-react |
| Formulário | PHP 8 + PHPMailer                                               |
| Qualidade  | ESLint (com jsx-a11y), Prettier, Vitest, Testing Library        |
| CI/CD      | GitHub Actions                                                  |

## Como rodar

Requisito: Node.js 20+ (veja `.nvmrc`).

```sh
npm install
npm run dev   # http://localhost:8080
```

Para testar o formulário localmente, também são necessários PHP 8.1+ e Composer:

```sh
composer install
cp private/smtp-config.example.php private/smtp-config.php   # preencha os dados do SMTP
npm run dev:php   # servidor PHP na porta 8000; o Vite redireciona /api para ele
```

## Scripts

| Comando           | Descrição                                |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento     |
| `npm run build`   | Checa os tipos e gera o build em `dist/` |
| `npm run preview` | Serve o build de produção                |
| `npm run lint`    | Roda o ESLint                            |
| `npm run format`  | Formata o código com Prettier            |
| `npm test`        | Roda os testes                           |

## Estrutura

```
├─ public/          # arquivos estáticos copiados para o build (ícones, robots.txt, .htaccess)
│  └─ api/          # endpoint PHP do formulário de contato
├─ private/         # modelo da configuração SMTP (o arquivo real nunca é versionado)
├─ src/
│  ├─ assets/       # imagens otimizadas
│  ├─ components/   # seções da página
│  ├─ data/         # dados da empresa e serviços, editados num só lugar
│  └─ lib/          # integração com o formulário
└─ .github/         # workflows de CI e deploy
```

## Publicação

Todo pull request roda o CI (formatação, lint, checagem de tipos, testes e build). Quando uma mudança entra na `main` e o CI passa, um workflow do GitHub Actions gera o build e publica o site via FTPS. As credenciais ficam nos secrets do GitHub Actions, e a senha do SMTP existe só no servidor, fora da pasta pública.

## Fluxo de trabalho

A `main` é a branch estável. As mudanças entram por pull requests a partir de branches `feat/…`, `fix/…`, `docs/…` ou `chore/…`, e as mensagens de commit seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/).

## Direitos

Código desenvolvido por [Igor Parreira](https://github.com/igorparreirap). Marca, logotipo, textos e fotografias pertencem à Monte Sinai Engenharia e Construções LTDA. Todos os direitos reservados.
