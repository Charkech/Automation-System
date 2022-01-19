const { Eyes, VisualGridRunner, Target, BrowserType, DeviceName } = require('@applitools/eyes-playwright');
const { test, expect } = require('@playwright/test');

test('UltraFast-Test @ultra @applitool',async({page})=>{
    test.setTimeout(0);
    //we set up ultrarunner to run on few devices!
    const runner = new VisualGridRunner({ testConcurrency: 5 });
    const eyes = new Eyes(runner);
    await page.goto('https://www.saucedemo.com/');
    const configuration = eyes.getConfiguration();
    //Configuration for our tested devices
    configuration.addBrowser({ width: 1200, height: 800, name: BrowserType.CHROME });
    configuration.addBrowser({ width: 1200, height: 800, name: BrowserType.FIREFOX });
    configuration.addBrowser({ width: 1200, height: 800, name: BrowserType.SAFARI });
    configuration.addBrowser({ width: 1200, height: 800, name: BrowserType.EDGE_CHROMIUM });
    configuration.addBrowser({ width: 1200, height: 800, name: BrowserType.IE_11 });
    configuration.addBrowser({ deviceName: DeviceName.Pixel_2 });
    configuration.addBrowser({ deviceName: DeviceName.iPhone_X });
    eyes.setConfiguration(configuration);
    
    await eyes.open(page, 'UltraTest-SwagLabs', 'UltraTest-SwagLabs');
    //Login Page Screenshot
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
   //Cart Page Screenshot
   await eyes.check('Cart Page ', Target.window().fully());
   // Click [data-test="checkout"]
   await page.click('[data-test="checkout"]');
   //Checkout page - part 1 - Screenshot
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
   //CheckOut Step 2 Screenshot
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

