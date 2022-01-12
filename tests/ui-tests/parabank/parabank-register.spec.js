const { test, expect } = require('@playwright/test');

test('register - para bank', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.click('text=Register');
    const signupTitle = page.locator('#rightPanel .title');
    await expect(signupTitle).toContainText('Signing up is easy!');
  });