import {test} from '../fixtures/fixtures';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
	
Given('The user is on the {string} after logged in', async ({dataStructurePage, page}, str) => {
        await dataStructurePage.checkURL(page, str)
    });
  
  When('The user clicks on the Get Started button below Data Structures', async ({homePage}) =>{
        homePage.getStartedForModule("Datastructures");

    })
	
    Then('The user is redirected to {string} Page', async ({dataStructurePage, page}, str) => {
        await dataStructurePage.navigateTo(page, str)
    });
  
	When("The user clicks on the Time Complexity link", async({dataStructurePage}) => {
        dataStructurePage.timeComplexityClick();
    })  
  
    When('the user clicks on Practice Questions link', async ({dataStructurePage}) => {
        await dataStructurePage.practiceQuestionsClick()
    });
  
    Then('The user goes back to previous Page {string}', async ({dataStructurePage, page}, str) => {
        await dataStructurePage.navigateTo(page, str)
      });
    

    When('The user clicks the Try here link', async ({dataStructurePage, page}) => {
        await dataStructurePage.tryHereClick()
    });

    
    Given('The user is in a page having an Editor with a Run button to test in {string} page', async ({dataStructurePage, page}, arg) => {
        //this.page.pause()
        await dataStructurePage.checkURL(page, arg)
      });

    When('The user enters valid python code in Editor from sheet {string} and {int}', async ({genericPage}, arg, arg1) => {
        await genericPage.enterCodeToExecute(arg, arg1)
    });

    When('clicks run button', async ({genericPage}) => {
        await genericPage.click_Run()
    });

    Then('The user is presented with the result after run button is clicked from sheet {string} and {int}', async ({genericPage}, arg, arg1) => {
        
        console.log('Expected result',genericPage.getExpectedResult(arg,arg1) )
        console.log('Actual result',genericPage.getActualResult() )

    });

    //Invalid python code
  
    When('The user enters invalid python code in Editor from sheet {string} and {int}', async ({genericPage, page}, arg, arg1) => {
        await genericPage.enterCodeToExecute(arg, arg1)
    });
  
      Then('The user gets an error message as {string}', async ({genericPage}, arg) => {
        await genericPage.getErrorMessage(arg)
    });
  

