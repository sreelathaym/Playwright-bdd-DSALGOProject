import { createBdd } from 'playwright-bdd';
import {expect} from '@playwright/test';
import {test} from '../fixtures/fixtures';
import { env } from 'process';

//import and configure dotenv to load the variables from the .env file
const { Given, When, Then } = createBdd(test);

When('User enters valid username and valid password', async ({SignIn_Page,page}) => {
    // await page.pause();
     const uname = process.env.UNAME;
     const pwd = process.env.PASSWORD;
     console.log(uname);
     console.log(pwd);
     await SignIn_Page.enterUsername(uname);
     await SignIn_Page.enterPassword(pwd)
});

When('User click on login button', async ({SignIn_Page}) => {
        await SignIn_Page.clickOnLoginBtn();
});
Then('User should be redirected to Home page with success message {string}', async ({Home_Page}, loginSuccessMsg) => {
            await Home_Page.loggedInSuccessMsgVisisble();
            console.log(Home_Page.loginSuccessMsg);
});

// 4. Missing step definition for "tests\features\SignIn.feature:14:5"
Then('Username should be displayed along with Sign-out button on home page.', async ({Home_Page}) => {
  // ...
});

Then('user is logged in successfully and has title as {string}', async ({SignIn_Page}, title) => {
  const PageTitle = await SignIn_Page.getPageTitle();
   expect(PageTitle).toEqual(title);
});


Given('user is on the {string} page', async ({page},title) => {
    const URL = await (page.url()).toString();
     expect(URL).toContain(title);
});

When('User click on Sign-out button', async ({Home_Page}) => {
  await Home_Page.clickOnSignOut();
});

// 6. Missing step definition for "tests\features\SignIn.feature:16:5"
Then('User should get Signout alert message {string} on home page.', async ({Home_Page}, arg) => {
  // ...
});

Given('User enters {string} and {string} in username and password fields', async ({SignIn_Page}, username, password) => {
  
      await SignIn_Page.enterUsername(username);
      await SignIn_Page.enterPassword(password)
     
});

Then('user recieves {string} error message', async ({SignIn_Page},errMsg) => {
  await expect(SignIn_Page.errMsg).toContainText(errMsg);
});