# 0001: Local-first, no backend

**Status:** accepted

## Context

A workout log is personal data. A server would need hosting, security work, backups, accounts, password resets and privacy compliance, and it would cost money.

## Decision

Replift has no backend. Data lives on the device. Optional sync goes to the user's own Dropbox app folder.

## Consequences

- Free to run forever; nothing to patch or monitor.
- Users keep full control of their data.
- No cross-user features (social feed, shared programs) unless added later with a different design.
- "Accounts" are a local profile plus an optional Dropbox connection.
