const { Eyes, ClassicRunner, Target, RectangleSize} = require('@applitools/eyes-playwright');
const { test, expect } = require('@playwright/test');


test('Applitool-Bookstore-Test @applitool',async({page})=>{
   //we set timeout to infinite cuz this kind of testing takes longer then regular tests
   test.setTimeout(0);
    //We go to the bookstore web's main page
    await page.goto('https://automationbookstore.dev/');

    const eyes = new Eyes();
    await eyes.open(page, "AutomationBookStore.dev website", "Bookstore Automation Test");
    //Main Page Screenshot
    await eyes.check('Main Page', Target.window().fully());
    await page.click('#pid3_thumb');
      // Fill [placeholder="Filter books.."]
    await page.fill('[placeholder="Filter books.."]', 'Agile');
    //Filtered page screenshot
    await eyes.check('Filtered Page', Target.window().fully());
    await eyes.close();

});