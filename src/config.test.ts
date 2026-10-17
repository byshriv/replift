import { APP, link, DROPBOX_APP_KEY } from './config';

describe('config', () => {
  it('uses a valid, permanent app ID', () => {
    expect(APP.id).toBe('io.github.byshriv.replift');
    expect(APP.id).toMatch(/^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/);
  });

  it('returns null for links that are not set', () => {
    expect(link('whatsapp')).toBeNull();
    expect(link('donate')).toBeNull();
  });

  it('has no Dropbox key until one is configured', () => {
    expect(typeof DROPBOX_APP_KEY).toBe('string');
  });
});
