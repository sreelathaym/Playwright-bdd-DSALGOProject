import {test as setup ,expect} from '@playwright/test';

const authFile = 'playwright/.auth/user.json';
//THIS WILL EXECUTE BEFOR EACH TEST
setup('authenticate',async({page})=>{
    
    await page.goto(process.env.LOGIN_URL);
    await page.getByLabel('Username:').fill(process.env.UNAME);
    await page.getByLabel('Password:').fill(process.env.PASSWORD);
    await page.locator('//input[@value="Login"]').click();
    await expect(page).toHaveURL('https://dsportalapp.herokuapp.com/home');
    //await expect(page.locator('//a[contains(text(),"You are logged in")]')).toBeVisible();
    //await expect(page.getByRole('alert', { name: 'You are logged in' })).toBeVisible();

    await page.context().storageState({path: authFile});

});