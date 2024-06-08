import {expect} from '@playwright/test'
 

class DataStructurePage{
   constructor(page){
       this.page = page
       this.timeComplexity =  page.locator("//a[text()='Time Complexity']")
       this.practiceQuestions =  page.locator("//a[text()='Practice Questions']")

       this.tryHere =  page.locator("//a[text()='Try here>>>']")
       
       this.practiceQ =  page.locator("//a[text()='Practice Questions']")
   }

   async timeComplexityClick() {
       await this.timeComplexity.click();
   }

   async tryHereClick() {
       await this.tryHere.click();
   }

   async practiceQuestionsClick() {

       await this.practiceQ.click();
   }

   async  checkPageTitle(page, str) {
       
       let title = await this.page.title()
       console.log('title of the page ', title)
       expect(await this.page).toHaveTitle(str)
   }


   async checkURL( page, pagename) {
       let page_name = await pagename.replace(/ /g,"")
       console.log("Process env page_name value ", process.env[page_name])
       expect(await this.page).toHaveURL(process.env[page_name]);
   }

   async navigateTo( page, pagename) {
       let page_name = await pagename.replace(/ /g,"")
       await page.goto(process.env[page_name]);
   }

   async goBack( page) {
       await page.goBack()
   }
}
export{DataStructurePage}

