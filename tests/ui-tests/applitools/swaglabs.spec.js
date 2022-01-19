const { Eyes, ClassicRunner, Target, RectangleSize} = require('@applitools/eyes-playwright');
const { test, expect } = require('@playwright/test');


test('SwagLabs-Test @applitool',async({page})=>{
    //we set timeout to infinite cuz this kind of testing takes longer then regular tests
    test.setTimeout(0);
  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');
  //We initialize the eyes.
  const eyes = new Eyes();
  await eyes.open(page, "SwagLabs Login Page", "Swag labs products buy process");
  //Intial login page Screenshot
  await eyes.check('SwagLabs Login Page', Target.window().fully());
  // Click [data-test="username"]
  await page.click('[data-test="username"]');
  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');
  // Click [data-test="password"]
  await page.click('[data-test="password"]');
  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');
  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  //Logged in Screenshot
  await eyes.check('SwagLabs Logged in Page', Target.window().fully());
  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  // Click [data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]
  await page.click('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  // Click text=Sauce Labs Bolt T-Shirt
  await page.click('text=Sauce Labs Bolt T-Shirt');
 // Click a:has-text("2")
 await page.click('a.shopping_cart_link');
 //Cart page Screenshot
 await eyes.check('Cart Page ', Target.window().fully());
 // Click [data-test="checkout"]
 await page.click('[data-test="checkout"]');
 //Checkout page - part 1-Screenshot
 await eyes.check('Checkout step one', Target.window().fully());
 // Click [data-test="firstName"]
 await page.click('[data-test="firstName"]');
 // Fill [data-test="firstName"]
 await page.fill('[data-test="firstName"]', 'dan');
 // Click [data-test="lastName"]
 await page.click('[data-test="lastName"]');
 // Fill [data-test="lastName"]
 await page.fill('[data-test="lastName"]', 'chick');
 // Click [data-test="postalCode"]
 await page.click('[data-test="postalCode"]');
 // Fill [data-test="postalCode"]
 await page.fill('[data-test="postalCode"]', '43123');
 // Click [data-test="continue"]
 await page.click('[data-test="continue"]');
 //Checkout Part 2 - Screenshot
 await eyes.check('Checkout step two', Target.window().fully());
 // Click [data-test="finish"]
 await page.click('[data-test="finish"]');
 //Finished order Screenshot
 await eyes.check('Finish Order', Target.window().fully());
 // Click [data-test="back-to-products"]
 await page.click('[data-test="back-to-products"]');
 //Back to homepage Screenshot
 await eyes.check('Back to home page', Target.window().fully());
    
    await eyes.close();

});