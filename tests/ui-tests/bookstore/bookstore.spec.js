const { test, expect } = require('@playwright/test');


test('bookstore title test', async ({ page }) => {
  await page.goto('https://automationbookstore.dev/');
  const title = page.locator('.ui-header .ui-title');
  await expect(title).toHaveText('Automation Bookstore');
});
