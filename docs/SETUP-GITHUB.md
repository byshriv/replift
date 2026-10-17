# GitHub setup (one time)

Do these once, after the first upload. All of it is free for public repositories.

## 1. Upload the code

Easiest way: **GitHub Desktop** (https://desktop.github.com).

1. Sign in, then **File → Clone repository → URL**, enter `byshriv/replift`, choose a folder.
2. Unzip the Replift zip and copy **everything inside the unzipped `replift` folder** into the cloned folder (include hidden files such as `.github`, `.gitignore`).
3. Back in GitHub Desktop you will see all the files listed. Write the summary `Foundation build`, click **Commit to main**, then **Push origin**.

## 2. Turn on the web app (GitHub Pages)

Repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Then **Actions → Deploy web app → Run workflow** (or just push a change). After a minute the app is at https://byshriv.github.io/replift/.

## 3. Turn on security features

**Settings → Advanced Security** (or "Code security"):

- Private vulnerability reporting: **Enable**
- Dependabot alerts and security updates: **Enable**
- Secret scanning and push protection: **Enable**
- Code scanning (CodeQL) shows up automatically from the workflow.

## 4. Protect the main branch (recommended)

**Settings → Rules → Rulesets → New branch ruleset**: target `main`, require status checks (`Lint, types, unit tests, build`), block force pushes.

## 5. Make the repository easy to find

On the main page click the gear next to **About**: add a description ("Free, open-source, local-first workout logger") and topics: `workout`, `fitness`, `pwa`, `local-first`, `react`, `typescript`.

## 6. Check that CI is green

Open the **Actions** tab. Each workflow should show a green tick. If one is red, open it and send me the log.
