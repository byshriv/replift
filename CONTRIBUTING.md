# Contributing to Replift

Thanks for helping. Small, focused changes are easiest to review.

## Set up

```bash
git clone https://github.com/<your-username>/replift.git
cd replift
npm ci
npm run dev
```

## Before you open a pull request

1. Create a branch: `git checkout -b fix/short-description`.
2. Make your change and add or update tests.
3. Run `npm run check`. It must pass; CI runs the same checks.
4. Describe what changed and how you tested it. Add screenshots for visual changes.

## Guidelines

- TypeScript strict mode is on. Avoid `any`.
- Keep user data local. Do not add analytics, trackers or servers.
- Keep the interface accessible: labels, keyboard use, readable contrast, reduced motion.
- Text shown to users goes through the translation files (English only for now).
- Do not commit secrets, keystores or personal data. See `.gitignore`.

## Commit messages

Use short, clear messages: `fix: stop set menu closing on tap`, `feat: add CSV export`.

## Be kind

Everyone must follow the [Code of Conduct](CODE_OF_CONDUCT.md).
