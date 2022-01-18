const { test, expect } = require('@playwright/test');


test('BookStore-Title-Test @fast', async ({ page }) => {
  //We open the main page of the website.
  await page.goto('https://automationbookstore.dev/');
  //We locate the header title so we can later check if it matches what we expect.
  const title = page.locator('.ui-header .ui-title');
  //We check if the title matches the expected value.
  await expect(title).toHaveText('Automation Bookstore');
});
