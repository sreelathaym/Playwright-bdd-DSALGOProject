import { test as base } from 'playwright-bdd';
//import { HomePage } from '../pages/HomePageObj.mjs'
//import { SignInPage } from '../pages/SignInPageObj.mjs'
import * as Pages from './pages';
//To create your own fixture, use test.extend() to create a new test object that will include it.
// Extend base test ,This new "test" can be used in multiple test files and each of them will get the fixtures.
const{HomePage, SignInPage, RegisterPage, DataStructurePage, GenericPage,ArrayPageObj} = Pages;

const createTestfunction = (PageClass) => async({page},use)=>{
        await use(new PageClass(page));
}

export const test = base.extend({
          
    Home_Page : createTestfunction(HomePage),
    SignIn_Page : createTestfunction(SignInPage),
    registerPage : createTestfunction(RegisterPage),
    dataStructurePage: createTestfunction(DataStructurePage),
    genericPage: createTestfunction(GenericPage),
    arraypage:createTestfunction(ArrayPageObj)
    }
);