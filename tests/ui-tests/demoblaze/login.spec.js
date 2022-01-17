const { test, expect } = require('@playwright/test');


test('DemoBlaze - Login Test', async ({ page }) => {
    //In this case we send registered credentials that should work.
    await page.goto('https://www.demoblaze.com/');
    //We click the Login button.
    await page.locator('#login2').click();
    //We insert id:1111 pw:1111 to the login fields.
    await page.fill('#loginusername','1111');
    //A way to check that we indeed filled the input box:
    // const content=await page.$eval("#loginusername",(el)=>el.value);
    // console.log(content);
    await page.fill('#loginpassword','1111');
    //We then click the Login btn.
    await page.locator('.modal-footer :text("Log in")').click();
    //Make sure we are actually logged in.
    await page.locator('text=Log out');
    //Now we check whether the ui updated to welcome the current user.
    // const titleValue= await page.$eval("a#nameofuser.nav-link",(el)=>el.textContent);

    //We need to wait the page to actually load the component before we try to match the expected text.
    //Else,the text will always be empty and we wont match the test we are trying to match.
    // const titleValue=await (await page.waitForSelector('#nameofuser')).innerText();
    // console.log(titleValue);

    await expect(page.locator('#nameofuser')).toHaveText('Welcome 1111');
  });