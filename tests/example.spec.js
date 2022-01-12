const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  const innerText = page.locator('.hero__title')
  await expect(title).toHaveText('Playwright');
  await expect(innerText).toContainText(' enables reliable end-to-end testing for modern web apps.');
});