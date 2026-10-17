import pkg from '../package.json';

/** Permanent identity of the app. The app ID must never change after the first release. */
export const APP = {
  id: 'io.github.byshriv.replift',
  name: 'Replift',
  version: pkg.version,
  repo: import.meta.env.VITE_REPO ?? 'byshriv/replift',
  env: import.meta.env.VITE_APP_ENV ?? 'development',
} as const;

const env = import.meta.env;

/**
 * Every outside link lives here. Empty means "not set yet": the UI shows
 * "coming soon" instead of a broken link. Fill them in `.env.production`.
 */
const RAW = {
  whatsapp: env.VITE_LINK_WHATSAPP,
  x: env.VITE_LINK_X,
  instagram: env.VITE_LINK_INSTAGRAM,
  strava: env.VITE_LINK_STRAVA,
  email: env.VITE_LINK_EMAIL,
  donate: env.VITE_LINK_DONATE,
  dropboxVideo: env.VITE_LINK_DROPBOX_VIDEO,
  deleteForm: env.VITE_FORM_DELETE_URL,
  issueForm: env.VITE_FORM_ISSUE_URL,
} as const;

export type LinkKey = keyof typeof RAW;

/** Returns the link, or null when it is empty or not a safe https/mailto URL. */
export function link(key: LinkKey): string | null {
  const value = (RAW[key] ?? '').trim();
  if (!value) return null;
  return /^(https:\/\/|mailto:)/i.test(value) ? value : null;
}

/** Public Dropbox app key. It is not a secret (PKCE flow, no client secret). */
export const DROPBOX_APP_KEY = (env.VITE_DROPBOX_APP_KEY ?? '').trim();
