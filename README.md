# Replift

A free, open-source, local-first workout logger. **Log after your sets, not between them.**

- No account, no ads, no tracking. Your data stays on your device or in your own Dropbox.
- Works offline. Install it from the browser, or use the Android APK.
- 420 exercises, programs and templates, personal records, streaks, muscle stats and more.

> **Status:** early development. This is the foundation build: tooling, checks and docs are in place, and the app is being ported from a working prototype. See the [roadmap](docs/ROADMAP.md).

## Try it

Web app: https://byshriv.github.io/replift/ (available after the first deploy)

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer (the `.nvmrc` file says 22) and Git.

```bash
git clone https://github.com/byshriv/replift.git
cd replift
npm ci          # install exact dependency versions
npm run dev     # start the dev server (http://localhost:5173)
```

## Scripts

| Command             | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start the development server                                        |
| `npm run build`     | Type-check and build the production app into `dist/`                |
| `npm run preview`   | Serve the production build locally                                  |
| `npm test`          | Run unit and component tests (Vitest)                               |
| `npm run test:e2e`  | Run browser tests (Playwright; first run: `npx playwright install`) |
| `npm run lint`      | Lint the code (ESLint)                                              |
| `npm run typecheck` | Check TypeScript types                                              |
| `npm run format`    | Format everything with Prettier                                     |
| `npm run check`     | Everything above (except e2e), the same as CI                       |

## Project layout

```text
src/            App source (React + TypeScript)
e2e/            Browser tests (Playwright)
docs/           Architecture, decisions, setup guides, roadmap
scripts/        Small project scripts
public/         Static files (logo, exercise images in public/exercises/)
.github/        CI, deploy, security scan, issue and PR templates
```

## Tech

TypeScript, React, Vite, Vitest, Playwright, ESLint, Prettier. No backend: data lives in the browser's IndexedDB and, optionally, in the user's own Dropbox app folder. Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Configuration

Outside links (community, donations, support) and the Dropbox app key are set with `VITE_*` variables. See [.env.example](.env.example). They are public values; **never put a secret in them.**

## Contributing

Bug reports and pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) first. Security issues: [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 Shriv
