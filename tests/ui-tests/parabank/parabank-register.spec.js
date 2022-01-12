const { test, expect } = require('@playwright/test');

test('ParaBank-RegisterBtn Test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    //We click the Register Btn.
    await page.click('text=Register');
    //We check whether after clicking the register btn we see the expected page changes.
    const signupTitle = page.locator('#rightPanel .title');
    await expect(signupTitle).toContainText('Signing up is easy!');
  });