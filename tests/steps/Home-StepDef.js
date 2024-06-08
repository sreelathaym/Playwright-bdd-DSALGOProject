import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures';
import {expect} from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given('user navigate to dsportalapp home page', async ({Home_Page}) => {
          const url = process.env.HOME_URL
          await Home_Page.navigateToHomePage(url);
  });
  
  When('User is not signed in already', async ({Home_Page}) => {

     await Home_Page.signInIsVisisble();
  });
 
  Then('User should not get warning message by default', async ({Home_Page}) => {
            
            await Home_Page.loggedInErrMsgNotVisisble();
  });
  
  When('User click on GetStarted button', async ({Home_Page}) => {
    
            await Home_Page.clickOnGetStarteBtn();
  });
  
  Then('User should get user is not Sign-In warning message', async ({Home_Page}) => {
        
        await Home_Page.loggedInErrMsgVisisble();
       
  });
  
  When('User click on data structure drop down', async ({Home_Page}) => {
       
    await Home_Page.clickOnDataStrDD();
        
  });
  
  Then('User should see six data structure options in list', async ({Home_Page}) => {
        
           await Home_Page.dataStrDDMenuCount();
  });
  
   When('User verify Register and Sign-In buttons are displayed', async ({Home_Page}) => {
             await Home_Page.signInIsVisisble();
             await Home_Page.registerIsVisisble();
  });
  
 
  Then('verify Register and Sign-In buttons should be clickable', async ({Home_Page}) => {
           await Home_Page.signInIsEnabled();
           await Home_Page.registerIsEnabled();
  });
  
  When('User click on Register buttons', async ({Home_Page}) => {
        await Home_Page.registerIsEnabled();
        await Home_Page.clickOnRegister();
});

Then('User should be redirected to Register page', async ({page}) => {

 //await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/register')

});


  When('User click on Sign-In buttons', async ({Home_Page}) => {
    await Home_Page.clickOnSignIn();
  });
  
  
  Then('User should be redirected to login page', async ({SignIn_Page}) => {
    
           SignIn_Page.verifySignInPageUrl();
      //await expect(SignIn_Page).toHaveURL('https://dsportalapp.herokuapp.com/login')
 
  });  
  
  When('user is already signed in into dsportalapp', async ({SignIn_Page,Home_Page}) => {
    
        const url = process.env.LOGIN_URL
        await Home_Page.navigateToHomePage(url);         
        const uname = process.env.UNAME;
        const pwd = process.env.PASSWORD;
        await SignIn_Page.enterUsername(uname);
        await SignIn_Page.enterPassword(pwd)
        await SignIn_Page.clickOnLoginBtn();
        await Home_Page.verifyHomePageUrl();        
        Home_Page.loggedInSuccessMsgVisisble();
  });
  
  When('user click on Graph data structure from drop down menu {string}', async ({Home_Page}, ddMenuItem) => {
         
                await Home_Page.clickOnDataStrDD();
         //await expect(page.locator('//div[contains(@class,"dropdown-menu")]/a[text()="Graph"]')).toBeVisible();
  });
  
  
  Then('user should be redirected to Graph home page.', async ({page}) => {
    
         //await page.toHaveURL('https://dsportalapp.herokuapp.com/graph/');
  });
  
  