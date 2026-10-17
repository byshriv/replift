/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE is "/replift/" on GitHub Pages and "/" everywhere else.
export default defineConfig({
  base: process.env['VITE_BASE'] ?? '/',
  plugins: [react()],
  build: { sourcemap: true, target: 'es2022' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: { provider: 'v8', include: ['src/**'], exclude: ['src/test/**'] },
  },
});
