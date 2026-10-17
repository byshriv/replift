# 0002: TypeScript, React and Vite

**Status:** accepted

## Context

The app began as a single-file prototype. It needs a maintainable, testable structure that beginners can contribute to.

## Decision

TypeScript (strict) + React + Vite. Vitest for unit tests, Playwright for browser tests, ESLint and Prettier for quality. Capacitor wraps the web build for Android. Electron may be added later for desktop.

## Consequences

- Large ecosystem and many contributors know React.
- Super Productivity uses Angular; we chose React for a lighter, simpler stack.
- One codebase serves the web app (PWA) and Android.
