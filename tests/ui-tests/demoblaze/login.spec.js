const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page})=>{
  await page.goto('https://www.demoblaze.com/');
});

test.afterEach(async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('DemoBlaze-Login-ValidInfo-Test', async ({ page }) => {
    //In this case we send registered credentials that should work.
    // await page.goto('https://www.demoblaze.com/'); moved this step to happen before each test case.
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

    //We check if after we successfully logged in we get the welcome msg we expect to see.
    await expect(page.locator('#nameofuser')).toHaveText('Welcome 1111');
  });

  test('DemoBlaze-Register-Already Registered-Test', async({page})=>{
    //We are headed to the main page and we'll first click the sign up button to pop up the registeration dialog.
    await page.locator('#signin2').click();
    //lets make sure first that the dialog pops by checking if the label of the dialog shows up.
    const signUPtext= await page.locator('#signInModalLabel');
    await expect(signUPtext).toHaveText('Sign up');
    //We give the register page info that's already registered up and we expect to later see that it alerts us that this user
    //Already exists.
    await page.fill('#sign-username','1111');
    await page.fill('#sign-password','1111');
    //We Send our registration request.
    await page.locator('.modal-footer :text("Sign up")').click();

    //We check that the system alerted us that this user is already registered.
    page.on('dialog',async dialog=>{
      expect(dialog.message()).toContain('This user already exist.');
      await dialog.accept();
    });
  });