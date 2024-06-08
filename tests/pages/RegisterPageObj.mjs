import { expect } from '@playwright/test';

class RegisterPage {
    constructor(page) {
        this.page = page;
        this.startBtn = page.locator("button[class='btn']");
        this.register = page.locator('text="Register"');
        this.userName = page.locator("input[name= 'username']");
        this.password = page.locator('input[name= "password1"]');
        this.pswConfirm = page.locator('input[name= "password2"]');
        this.registerBtn = page.locator('input[value="Register"]');

    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }

    async clickOnGetStarted() {
        await this.startBtn.click();
    }

    async clickOnRegister() {
        await this.register.click();
    }

    async verifyRegisterPg(registerUrl) {
        console.log();
        //await expect(this.page).toHaveURL(new RegExp(registerUrl));
        expect(await this.page).toHaveURL(registerUrl);

    }

    async enterUserName(uName) {
        await this.userName.fill(uName);
    }

    async enterPassword(pswd) {
        await this.password.fill(pswd);
    }

    async enterConfirmationPassword(confirm) {
        await this.pswConfirm.fill(confirm);
    }

    async clickOnRegisterBtn() {
        await this.registerBtn.click();
    }

}

export {RegisterPage}