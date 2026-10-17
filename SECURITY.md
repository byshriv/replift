# Security Policy

## Supported versions

Only the latest release receives security fixes.

## Reporting a vulnerability

Please **do not** open a public issue. Report it privately:

1. Go to the repository's **Security** tab.
2. Choose **Report a vulnerability** (GitHub private vulnerability reporting).

Include what you found, how to reproduce it, and the impact. You will get a first reply within about 7 days. Please allow time for a fix before sharing details publicly.

## Our approach

- No servers and no accounts: user data stays on the device or in the user's own Dropbox.
- Dropbox uses OAuth with PKCE. No client secret exists in the app.
- All user-provided text is escaped before display; a strict Content Security Policy is used.
- Dependencies are watched by Dependabot, `npm audit` and CodeQL.
