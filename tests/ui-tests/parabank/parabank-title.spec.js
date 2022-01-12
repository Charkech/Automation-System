const { test, expect } = require('@playwright/test');

test('para bank title test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  const titleParagraph=page.locator('#topPanel .caption');
  await expect(titleParagraph).toContainText('Experience the difference');
});
