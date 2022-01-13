const { test, expect } = require('@playwright/test');


test('BookStore-Title Test', async ({ page }) => {
  await page.goto('https://automationbookstore.dev/');
  const title = page.locator('.ui-header .ui-title');
  //We check if the title matches the expected value.
  console.log("HI");
  await expect(title).toHaveText('Automation Bookstore');
});
