import { test, expect } from '@playwright/test';

test('the app loads and shows its name', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Replift' })).toBeVisible();
  await expect(page).toHaveTitle(/Replift/);
});

test('works on a phone-sized screen without horizontal scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});
