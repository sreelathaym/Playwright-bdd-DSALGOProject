import {test} from '../fixtures/fixtures'
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
//
	
//1. Missing step definition for "tests/features/arrays.feature:6:1"
When('And User enters valid username {string} and {string}', async ({arrayPage}, uName, pswd) => {
 await arrayPage.enteruserame(uName);
 await arrayPage.enterpassword(pswd) ;
});

// 2. Missing step definition for "tests/features/arrays.feature:7:1"
Then('User click login button', async ({arrayPage}) => {
    await arrayPage.clickOnLoginButton()

});
// Array validations start
When('User clicks getstarted button below Arrays', async ({arrayPage}) => {
    await arrayPage.clickOnArrays();
  });
  
  // 2. Missing step definition for "tests/features/arrays.feature:14:1"
  Then('User clicks ArrayInPython Page', async ({arrayPage}) => {
 await arrayPage.clickOnArraysInPython();
 
  });
  // 1. Missing step definition for "tests/features/arrays.feature:12:1"
Then('user is landed ArrayInPython Page successfully and has title as {string}', async ({arrayPage,page}, str) => {
    await arrayPage.checkPageTitleArray(str)
  });
  
  // 1. Missing step definition for "tests/features/arrays.feature:12:1"
/*Then('user is landed ArrayInPython Page successfully and has URL as {string}', async ({page}, title) => {
    // const PageTitle = (await page.title()).toString();
    // console.log("ArraysInPhython Page Title", PageTitle)
    // await expect(PageTitle).toEqual(title);
   //await expect(page).toHaveURL(url);
   await arrayPage.checkPageTitleArray(title)
    
    // const URL = page.url().toString();
    // await expect(URL).toContain(title);
  });*/









/* 1. Missing step definition for "tests/features/arrays.feature:4:3"
Given('The user is on the {string} after logged in for Array', async ({arrayPage, page}, str) => {
    console.log('string' ,str);
    await page.pause();
    await arrayPage.checkUrlArray(page, str);
    
});
/*Given('The user is on the {string} after logged in', async ({dataStructurePage, page}, str) => {
    await dataStructurePage.checkURL(page, str)
});

// 2. Missing step definition for "tests/features/arrays.feature:5:5"
When('The user clicks on the Get Started button below Array', async ({homePage}) => {
    homePage.getStartedForModule("Arrays");
});

// 3. Missing step definition for "tests/features/arrays.feature:6:5"
Then('The user is redirected to {string} ArrayPage', async ({arrayPage, page}, str) => {
    await arrayPage.checkUrlArray(page, str)
});

// 4. Missing step definition for "tests/features/arrays.feature:7:5"
When('The user clicks on the ArraysInPython link', async ({arrayPage}) => {
   arrayPage.clickOnArraysInPython();
});

// 5. Missing step definition for "tests/features/arrays.feature:9:5"
When('the user clicks on Practice Questions on ArrayPagelink', async ({arrayPage}) => {
    await arrayPage.practiceQuestionsClick()
});

// 6. Missing step definition for "tests/features/arrays.feature:11:5"
Then('The user goes back to previous Page {string} ArrayPagelink', async ({arrayPage,page}, str) => {
    await arrayPage.navigateToArray(page, str)
});*/