# Monte Sinai Engenharia e Construções — Website

**🔗 [montesinaiengenharia.com.br](https://montesinaiengenharia.com.br)** · 🇧🇷 [Leia em português](README.pt-BR.md)

Corporate website for **Monte Sinai Engenharia e Construções**, an electrical engineering company based in Itaberaí, Goiás (Brazil), since 2013.

<p align="center">
  <img src="docs/site-desktop.webp" alt="Home page on desktop" width="72%" />
  <img src="docs/site-mobile.webp" alt="Home page on mobile" width="22%" />
</p>

## Features

- Responsive single-page layout: hero, about, services, contact and map
- WhatsApp contacts with a pre-filled greeting message
- Contact form that sends e-mails through authenticated SMTP, with server-side validation, honeypot and rate limiting
- SEO: meta tags, Open Graph, schema.org structured data, `sitemap.xml` and `robots.txt`
- Accessibility: semantic HTML, labelled fields, skip link, visible focus and `prefers-reduced-motion` support
- Performance: WebP images with `srcset`, self-hosted fonts and a lean bundle

## Lighthouse

| Device  | Performance | Accessibility | Best Practices | SEO |
| ------- | :---------: | :-----------: | :------------: | :-: |
| Mobile  |     99      |      97       |      100       | 100 |
| Desktop |     100     |      97       |      100       | 100 |

## Tech stack

| Layer        | Technologies                                                    |
| ------------ | --------------------------------------------------------------- |
| Front-end    | React 18, TypeScript (strict), Vite, Tailwind CSS, lucide-react |
| Contact form | PHP 8 + PHPMailer                                               |
| Quality      | ESLint (with jsx-a11y), Prettier, Vitest, Testing Library       |
| CI/CD        | GitHub Actions                                                  |

## Getting started

Requirements: Node.js 20+ (see `.nvmrc`).

```sh
npm install
npm run dev   # http://localhost:8080
```

To test the contact form locally you also need PHP 8.1+ and Composer:

```sh
composer install
cp private/smtp-config.example.php private/smtp-config.php   # fill in the SMTP credentials
npm run dev:php   # PHP server on :8000; Vite proxies /api to it
```

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the development server    |
| `npm run build`   | Type check and build to `dist/` |
| `npm run preview` | Serve the production build      |
| `npm run lint`    | Run ESLint                      |
| `npm run format`  | Format the code with Prettier   |
| `npm test`        | Run the test suite              |

## Project structure

```
├─ public/          # static files copied to the build (icons, robots.txt, .htaccess)
│  └─ api/          # PHP endpoint for the contact form
├─ private/         # SMTP config template (the real file is never committed)
├─ src/
│  ├─ assets/       # optimized images
│  ├─ components/   # page sections
│  ├─ data/         # company info and services, edited in one place
│  └─ lib/          # contact form client
└─ .github/         # CI and deploy workflows
```

## Deployment

Every pull request runs CI (format check, lint, type check, tests and build). When a change is merged into `main` and CI passes, a GitHub Actions workflow builds the site and deploys it over FTPS. Credentials are stored as GitHub Actions secrets, and the SMTP password lives only on the server, outside the public web root.

## Workflow

`main` is the stable branch. Changes go through pull requests from `feat/…`, `fix/…`, `docs/…` or `chore/…` branches, and commit messages follow [Conventional Commits](https://www.conventionalcommits.org/).

## License

Code by [Igor Parreira](https://github.com/igorparreirap). The brand, logo, texts and photos belong to Monte Sinai Engenharia e Construções LTDA. All rights reserved.
