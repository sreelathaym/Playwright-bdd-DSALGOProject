import {expect} from '@playwright/test'
 

 class ArrayPageObj{
    constructor(page){
        this.page = page
        this.username =page.locator("#id_username")
        this.password = page.locator("#id_password")
        this.login = page.locator("//input[@value='Login']")
        this.arrayGetStart = page.locator("//a[@href='array']")
        this.arraysInPyton =page.locator("//a[@href='arrays-in-python']")
        this.practiceQuestions =  page.locator("//a[text()='Practice Questions']")

        this.tryHere =  page.locator("//a[text()='Try here>>>']")
        
        this.practiceQ =  page.locator("//a[text()='Practice Questions']")
    }

    async enteruserame(uName) {
        await this.username.fill("uName");
    }

    async enterpassword(pswd) {
        await this.password.fill(pswd);
    }
    async clickOnLoginButton(){
        await this.login.click();
    }
    async clickOnArrays(){
        await this.arrayGetStart.click();
    }

	async clickOnArraysInPython(){
        await this.arraysInPyton.click();
    }

    async tryHereClick() {
		await this.tryHere.click();
	}

    async practiceQuestionsClick() {

		await this.practiceQ.click();
    }

    async  checkPageTitleArray(page, str) {
		
		let title = await this.page.title()
		console.log('title of the page ', title)
        expect(await this.page).toHaveTitle(str)
	}

async checkUrlArray(page, pagename){
   
    let page_name = await   pagename.replace(/ /g,"")
        console.log("Process env page_name value ", process.env[page_name])
		expect(await this.page).toHaveURL(process.env[page_name]);
       
	}

   /* async checkURL( page, pagename) {
        let page_name = await pagename.replace(/ /g,"")
        console.log("Process env page_name value ", process.env[page_name])
		expect(await this.page).toHaveURL(process.env[page_name]);
	}*/

    async navigateToArray( page, pagename) {
        let page_name = await pagename.replace(/ /g,"")
		await page.goto(process.env[page_name]);
      
    }

    async goBack( page) {
        await page.goBack()
    }
}
export{ArrayPageObj}
