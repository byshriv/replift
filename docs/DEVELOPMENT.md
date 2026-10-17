# Development notes

- Node version: see `.nvmrc`. `nvm use` switches to it.
- Environment: copy `.env.example` to `.env.local` for personal overrides. `.env.development` and `.env.production` hold public defaults per mode.
- Links and keys are read only in `src/config.ts`. Import from there, never from `import.meta.env` directly.
- The app ID `io.github.byshriv.replift` must never change.
- The exercise list and image naming plan: `docs/exercise-list.csv`. Images go in `public/exercises/<serial>.webp`.
