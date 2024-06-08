import { expect } from '@playwright/test';
export class SignInPage{

    constructor(page) {
        this.page = page;
        this.username = page.getByLabel('Username:');
        this.password = page.getByLabel('Password:');
        this.loginBtn = page.locator('//input[@value="Login"]');

        // this.userName = page.locator("//input[@id='id_username']");
        // this.password = page.locator("//input[@id='id_password']");
        // this.loginButton = page.locator("//input[@value='Login']");
        this.errMsg = page.locator("//div[@role='alert']");
        this.getStartedButton = page.locator('.btn');
        this.signInLink = page.getByText('Sign in');
        this.registerLink = page.getByText('Register!');
    
    }

    async assertLoginPagrUrl() {
         await expect(this.page).toHaveURL(url);
    }

    async enterUsername(userName) {
        await this.username.fill(userName)
    }

    async enterPassword(password) {
             await this.password.fill(password)
    }

    async clickOnLoginBtn() {
        await this.loginBtn.click();
    }

    async verifySignInPageUrl() {
        await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/login');
    }

    async navigateURL(url){
        await this.page.goto(url);
    }
    async clickGetStarted(){    
        await this.getStartedButton.click();
    }
    
    async getPageTitle(){
        return await this.page.title();
    }
    
    async getPageUrl(){
        return await this.page.url();
      }
   async clickRegisterLink(){
    await this.registerLink.click();
   }

   async clickSignInLink(){
    await this.signInLink.click();
}
  
}

//export{SignInPage}