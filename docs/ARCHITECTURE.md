# Architecture

Replift is a **local-first** app. Everything runs in the browser (or the Android wrapper). There is no Replift server and no database to host.

```text
┌─────────────────────────────┐
│  React UI (src/ui)          │  screens, components, gestures
├─────────────────────────────┤
│  Domain logic (src/domain)  │  volume, 1RM, records, streaks, calories,
│  pure TypeScript, tested    │  recovery, templates, set reconstruction
├─────────────────────────────┤
│  Data layer (src/data)      │  typed schema, migrations, IndexedDB
├─────────────────────────────┤
│  Sync (src/sync)           │  Dropbox (PKCE), per-item files, merge
└─────────────────────────────┘
        │                │
   IndexedDB        Dropbox app folder (optional, the user's own)
```

## Principles

1. **The device is the source of truth.** The app works fully offline.
2. **Pure logic.** Domain code has no UI or storage imports, so it is easy to test.
3. **Typed, versioned data.** Every stored record has a schema version and a migration path.
4. **No secrets in the app.** Dropbox uses PKCE, so only a public app key exists.
5. **Escape everything.** User text is never inserted as HTML.
6. **Privacy first.** No analytics, no tracking, no server-side storage.

## Sync model (planned)

- One small JSON file per item (workout, routine, program, measure, photo) inside the user's Dropbox app folder.
- Every item has `updatedAt` and a device ID. The newest edit wins; deletes leave a marker so they don't come back.
- Optional end-to-end encryption with a password the user chooses.
- Manual "Synchronize" button, plus a warning when nothing has synced for several days.

## Hosting and releases

- Web app: GitHub Pages (`byshriv.github.io/replift`), deployed by GitHub Actions.
- Android: Capacitor wraps the same web build; the APK is built by GitHub Actions and attached to GitHub Releases.
- Everything is free to run.

See [decisions](decisions/) for the reasoning behind the main choices.
