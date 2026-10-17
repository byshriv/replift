/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: 'development' | 'production' | 'test';
  readonly VITE_DROPBOX_APP_KEY?: string;
  readonly VITE_FORM_DELETE_URL?: string;
  readonly VITE_FORM_ISSUE_URL?: string;
  readonly VITE_LINK_WHATSAPP?: string;
  readonly VITE_LINK_X?: string;
  readonly VITE_LINK_INSTAGRAM?: string;
  readonly VITE_LINK_STRAVA?: string;
  readonly VITE_LINK_EMAIL?: string;
  readonly VITE_LINK_DONATE?: string;
  readonly VITE_LINK_DROPBOX_VIDEO?: string;
  readonly VITE_REPO?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
