# GitHub setup (one time)

Everything here is free for a public repository. Tick items off as you go.

## 1. Upload the code (done once, then use GitHub Desktop for every change)

1. GitHub Desktop → **File → Clone repository → URL** → `byshriv/replift`.
2. Copy the project files (including hidden ones like `.github`) into that folder.
3. Summary, **Commit to main**, then **Push origin**.

## 2. Turn on the web app (GitHub Pages)

**Settings → Pages → Source: GitHub Actions.** Do not click "Configure" on the Jekyll or Static HTML cards.
**Actions → Deploy web app → Run workflow.** The app is live at https://byshriv.github.io/replift/.

## 3. Security features

**Settings → Advanced Security** (sometimes called "Code security"):

- [ ] Private vulnerability reporting: **Enable**
- [ ] Dependency graph: **Enable**
- [ ] Dependabot alerts: **Enable**
- [ ] Dependabot security updates: **Enable**
- [ ] Secret scanning: **Enable**
- [ ] Push protection (blocks pushes that contain secrets): **Enable**
- [ ] Code scanning: leave GitHub's "default setup" **off**. Replift already has its own CodeQL workflow (`.github/workflows/codeql.yml`); two setups conflict.

## 4. Protect the main branch (Rulesets)

**Settings → Rules → Rulesets → New ruleset → New branch ruleset.**

Name: `Protect main`. Enforcement status: **Active**. Target branches: **Add target → Include default branch**.

Stage A (turn on now, light):

- [ ] Restrict deletions
- [ ] Block force pushes
- [ ] Require linear history

Stage B (turn on before the first public release, strict):

- [ ] Require a pull request before merging (required approvals: **0** is fine when you work alone)
- [ ] Require status checks to pass. Add: `Lint, types, unit tests, build`, `Browser tests (Chrome, Firefox, Safari engine, phones)` and `Dependency audit`
- [ ] Require branches to be up to date before merging

In stage B you can no longer push straight to `main`. Work on a branch in GitHub Desktop (**Current Branch → New Branch**), push it, open a pull request, wait for the green ticks, then **Squash and merge**.
Under **Bypass list** add **Repository admin** with "Allow for pull requests only" so you can never lock yourself out.

Later, add a second ruleset for tags named `v*` (restrict deletions and updates) to protect releases.

## 5. Actions settings

**Settings → Actions → General:**

- [ ] Actions permissions: **Allow actions created by GitHub** (Replift only uses `actions/*` and `github/*`)
- [ ] Fork pull request workflows: **Require approval for first-time contributors**
- [ ] Workflow permissions: **Read repository contents and packages permissions**
- [ ] "Allow GitHub Actions to create and approve pull requests": **off**

## 6. Environments

**Settings → Environments → github-pages → Deployment branches and tags → Selected branches → `main`.**

## 7. General settings

**Settings → General:**

- [ ] Features: keep **Issues** on; turn **Discussions** on (community Q&A); turn **Wikis** and **Projects** off (docs live in the repo)
- [ ] Pull Requests: allow **squash merging only**; turn on **Automatically delete head branches**
- [ ] About (gear on the main page): description, website `https://byshriv.github.io/replift/`, topics `workout`, `fitness`, `pwa`, `local-first`, `react`, `typescript`

## 8. Your own account

- [ ] **GitHub → Settings → Password and authentication:** turn on two-factor authentication, save the recovery codes somewhere safe (not on the same phone), and add a passkey if you can
- [ ] **Settings → Emails:** tick "Keep my email addresses private" and "Block command line pushes that expose my email"

## 9. Dependabot pull requests

Dependabot opens pull requests for updates. Each one runs the checks.

- **Green:** click **Squash and merge**.
- **Red:** do not merge. Comment `@dependabot ignore this major version` (for a major jump) or `@dependabot close`, then tell me if you are unsure.
- ESLint 10 and TypeScript 7 pull requests are expected to fail for now. Replift's `dependabot.yml` ignores them from now on; close the old ones.

## 10. Check the health of the repo

- **Insights → Community Standards** should show every item ticked (README, license, code of conduct, contributing, security policy, issue and PR templates).
- **Actions:** every workflow should have a green tick on `main`.
- The main page should show **MIT license** in the About box.
