import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);


Given('User navigates to Dsalgo {string}', async ({registerPage}, url) => {
  await registerPage.navigateToUrl(url);
});


When('user clicks on Get Started', async ({registerPage}) => {
  await registerPage.clickOnGetStarted();
});


Then('user lands on DsAlgo Home page and clicks on Register tab on top right', async ({registerPage}) => {
  await registerPage.clickOnRegister();
});


Then('It should land on register page and verify the url contains {string}', async ({registerPage}, registerUrl) => {
  await registerPage.verifyRegisterPg(registerUrl);

});


Given('user is on register page url contains {string}', async ({registerPage}, registerUrl) => {
  await registerPage.verifyRegisterPg(registerUrl);
});


Given('User enters valid username {string}', async ({registerPage}, uName) => {
  await registerPage.enterUserName(uName);
});

Given('User enters valid {string}', async ({registerPage}, pswd) => {
  await registerPage.enterPassword(pswd) ;
});


Given('User confirms password {string}', async ({registerPage}, confirm, dataTable) => {
  await registerPage.enterConfirmationPassword(confirm);
});


When('User clicks on register button', async ({registerPage}) => {
  await registerPage.clickOnRegisterBtn();
});


Then('user is directed to DsAlgo home page', async ({Home_Page}) => {
         
});