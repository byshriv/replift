import { APP } from './config';

const MILESTONES = [
  ['Foundation', 'Repository, tooling, checks and docs'],
  ['Core app', 'Data layer, exercise library, all screens'],
  ['PWA', 'Offline install, backup and export'],
  ['Dropbox sync', 'Connect, sync and encrypt'],
  ['Android', 'APK built by GitHub Actions'],
] as const;

export function App() {
  return (
    <main className="shell">
      <img
        className="logo"
        src={`${import.meta.env.BASE_URL}logo.svg`}
        alt=""
        width={96}
        height={58}
      />
      <h1>Replift</h1>
      <p className="muted">Log after your sets, not between them.</p>
      <section aria-labelledby="roadmap" className="card">
        <h2 id="roadmap">Foundation build</h2>
        <ol>
          {MILESTONES.map(([name, text], i) => (
            <li key={name} aria-current={i === 0 ? 'step' : undefined}>
              <strong>{name}</strong>
              <span className="muted"> · {text}</span>
            </li>
          ))}
        </ol>
      </section>
      <p className="muted small">
        Version {APP.version} · {APP.env}
      </p>
    </main>
  );
}
