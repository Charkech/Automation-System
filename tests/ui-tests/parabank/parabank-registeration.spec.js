const { test, expect } = require('@playwright/test');

test('ParaBank-RegisterProcess-Test @slow @regular', async ({ page }) => {

  // Go to https://parabank.parasoft.com/parabank/index.htm
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Click text=Register
  await page.click('text=Register');

  // Click input[name="customer.firstName"]
  await page.click('input[name="customer.firstName"]');

  // Fill input[name="customer.firstName"]
  await page.fill('input[name="customer.firstName"]', 'Idan');

  // Press Tab
  await page.press('input[name="customer.firstName"]', 'Tab');

  // Fill input[name="customer.lastName"]
  await page.fill('input[name="customer.lastName"]', 'Charkachi');

  // Click input[name="customer.address.street"]
  await page.click('input[name="customer.address.street"]');

  // Fill input[name="customer.address.street"]
  await page.fill('input[name="customer.address.street"]', 'Sample address');

  // Click input[name="customer.address.city"]
  await page.click('input[name="customer.address.city"]');

  // Fill input[name="customer.address.city"]
  await page.fill('input[name="customer.address.city"]', 'Bagdad');

  // Click input[name="customer.address.state"]
  await page.click('input[name="customer.address.state"]');

  // Fill input[name="customer.address.state"]
  await page.fill('input[name="customer.address.state"]', 'Bagdad');

  // Click input[name="customer.address.zipCode"]
  await page.click('input[name="customer.address.zipCode"]');

  // Fill input[name="customer.address.zipCode"]
  await page.fill('input[name="customer.address.zipCode"]', '34321');

  // Click input[name="customer.phoneNumber"]
  await page.click('input[name="customer.phoneNumber"]');

  // Fill input[name="customer.phoneNumber"]
  await page.fill('input[name="customer.phoneNumber"]', '058412731');

  // Click input[name="customer.ssn"]
  await page.click('input[name="customer.ssn"]');

  // Fill input[name="customer.ssn"]
  await page.fill('input[name="customer.ssn"]', 'ssn');

  // Click input[name="customer.username"]
  await page.click('input[name="customer.username"]');

  // Fill input[name="customer.username"]
  await page.fill('input[name="customer.username"]', 'idan');

  // Click tr:nth-child(11) td:nth-child(2)
  await page.click('tr:nth-child(11) td:nth-child(2)');

  // Fill input[name="customer.password"]
  await page.fill('input[name="customer.password"]', 'idan');

  // Click input[name="repeatedPassword"]
  await page.click('input[name="repeatedPassword"]');

  // Fill input[name="repeatedPassword"]
  await page.fill('input[name="repeatedPassword"]', 'idan');

  // Click input:has-text("Register")
  await page.click('input:has-text("Register")');

  //Find the successful registration msg.
  await page.locator('text=Your account was created successfully. You are now logged in.');

  //First we wait for the user panel to load up before we test anything.
  await page.waitForSelector('#leftPanel');
  //Check for the signed in welcome title
  await page.locator('text=Welcome Idan Charkachi')
  //Find the Log out btn.
  await page.locator('text=Log Out');
});