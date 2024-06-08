import { expect } from '@playwright/test';

export class HomePage {

  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.registerLink = page.getByRole('link', { name: ' Register ' });
    this.signOutLink = page.getByRole('link', { name: 'Sign out' });
    this.notloggedInErrMsg = page.getByText('You are not logged in');
    this.loggedInMsg = page.locator('//a[contains(text(),"You are logged in")]');
    this.dataStrDropDown = page.locator('//a[text()="Data Structures"]');
    this.dataStrDDMenu =  page.locator('//div[contains(@class,"dropdown-menu")]/a');
    this.getStartedBtn = page.getByText('Get Started');

  }
  async navigateToHomePage(url) {

    await this.page.goto(url);
    //await expect(this.page).toHaveURL(url);
  }
  async getPageTitle(){
    return await this.page.title();
}


  async verifyHomePageUrl() {
    await expect(this.page).toHaveURL('https://dsportalapp.herokuapp.com/home');
}
  async signInIsVisisble() {

    await this.signInLink.isVisible();
  }
  async registerIsVisisble() {

    await this.registerLink.isVisible();
  }

async signInIsEnabled() {

  await this.signInLink.isEnabled();
}
async registerIsEnabled() {

  await this.registerLink.isEnabled();
}
async clickOnSignIn() {
  await this.signInLink.click();
}

async clickOnSignOut() {
  await this.signOutLink.click();
}
async clickOnRegister() {
  await this.registerLink.click();
}
  async loggedInErrMsgNotVisisble() {
    expect(await this.notloggedInErrMsg.count()).toEqual(0);
  }

  async loggedInSuccessMsgVisisble() {
    //expect(await this.loggedInMsg.count()).toEqual(1);
    //await expect(this.page.getByRole('alert', { name: 'You are logged in' }).count()).toBeGreaterThan(0);
      
  }

  async clickOnGetStarteBtn() {
    await this.getStartedBtn.last().click();
  }
  async loggedInErrMsgVisisble() {
    expect(await this.notloggedInErrMsg.count()).toBeGreaterThan(0);
    
  }

  async clickOnDataStrDD() {
    await this.dataStrDropDown.click();
  }
  async dataStrDDMenuCount() {
    
    expect(await this.dataStrDDMenu.count()).toBe(6);

  }

}

//export{HomePage}
