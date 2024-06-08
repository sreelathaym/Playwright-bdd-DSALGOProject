/** Generated from: tests\features\SignIn.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("SignIn and SignOut validation feature", () => {

  test.beforeEach(async ({ Given, Home_Page, When }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
    await When("User click on Sign-In buttons", null, { Home_Page });
  });

  test("Sign-in with valid user name and valid passwrod", async ({ Then, SignIn_Page, When, page, And, Home_Page }) => {
    await Then("User should be redirected to login page", null, { SignIn_Page });
    await When("User enters valid username and valid password", null, { SignIn_Page, page });
    await And("User click on login button", null, { SignIn_Page });
    await Then("User should be redirected to Home page with success message \"You are logged in\"", null, { Home_Page });
    await And("Username should be displayed along with Sign-out button on home page.", null, { Home_Page });
    await Then("user is logged in successfully and has title as \"NumpyNinja\"", null, { SignIn_Page });
    await When("User click on Sign-out button", null, { Home_Page });
    await Then("User should get Signout alert message \"Logged out successfully\" on home page.", null, { Home_Page });
  });

  test("verify if user gets error message with invalid credentials", async ({ Given, page, And, SignIn_Page, When, Then }) => {
    await Given("user is on the \"login\" page", null, { page });
    await And("User enters \"testuser\" and \"test123\" in username and password fields", null, { SignIn_Page });
    await When("User click on login button", null, { SignIn_Page });
    await Then("user recieves \"Invalid Username and Password\" error message", null, { SignIn_Page });
  });

  test.describe("verify if user gets error message with invalid credentials", () => {

    test("Example #1", async ({ Given, page, And, SignIn_Page, When, Then }) => {
      await Given("user is on the \"login\" page", null, { page });
      await And("User enters \"abcd\" and \"abcd123\" in username and password fields", null, { SignIn_Page });
      await When("User click on login button", null, { SignIn_Page });
      await Then("user recieves \"Invalid Username and Password\" error message", null, { SignIn_Page });
    });

    test("Example #2", async ({ Given, page, And, SignIn_Page, When, Then }) => {
      await Given("user is on the \"login\" page", null, { page });
      await And("User enters \"test\" and \"test123\" in username and password fields", null, { SignIn_Page });
      await When("User click on login button", null, { SignIn_Page });
      await Then("user recieves \"Invalid Username and Password\" error message", null, { SignIn_Page });
    });

    test("Example #3", async ({ Given, page, And, SignIn_Page, When, Then }) => {
      await Given("user is on the \"login\" page", null, { page });
      await And("User enters \"hg!@#@$\" and \"test\" in username and password fields", null, { SignIn_Page });
      await When("User click on login button", null, { SignIn_Page });
      await Then("user recieves \"Invalid Username and Password\" error message", null, { SignIn_Page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\SignIn.feature"),
});

const testMetaMap = {
  "Sign-in with valid user name and valid passwrod": {"pickleLocation":"7:3"},
  "verify if user gets error message with invalid credentials": {"pickleLocation":"19:3"},
  "verify if user gets error message with invalid credentials|Example #1": {"pickleLocation":"32:7"},
  "verify if user gets error message with invalid credentials|Example #2": {"pickleLocation":"33:7"},
  "verify if user gets error message with invalid credentials|Example #3": {"pickleLocation":"34:7"},
};