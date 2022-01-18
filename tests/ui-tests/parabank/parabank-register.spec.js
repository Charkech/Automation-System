const { test, expect } = require('@playwright/test');

test('ParaBank-RegisterBtn-Test @fast', async ({ page }) => {
  //We open the main page of the website.
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    //We click the Register Btn.
    await page.click('text=Register');
    //We check whether after clicking the register btn we see the expected page changes.
    const signupTitle = page.locator('#rightPanel .title');
    //After we located the title we check to see whether the page changed and we now see what we should.
    await expect(signupTitle).toContainText('Signing up is easy!');
  });
  