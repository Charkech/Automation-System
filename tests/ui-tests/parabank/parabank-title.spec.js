const { test, expect } = require('@playwright/test');

test('ParaBank-TitleParagraph Test @fast @regular', async ({ page }) => {
  //We open the main page of the website.
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  //We locate the title paragraph text.
  const titleParagraph=page.locator('#topPanel .caption');
  //We see if the desired text matches what we found.
  await expect(titleParagraph).toContainText('Experience the difference');
});
