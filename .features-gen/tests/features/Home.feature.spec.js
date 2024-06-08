/** Generated from: tests\features\Home.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Home page verification feature", () => {

  test.beforeEach(async ({ Given, Home_Page }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
  });

  test("verify Sign-In warning message is not present by default", { tag: ["@HomePage", "@NoSignInWaringByDefault"] }, async ({ When, Home_Page, Then }) => {
    await When("User is not signed in already", null, { Home_Page });
    await Then("User should not get warning message by default", null, { Home_Page });
  });

  test("user should be able to access GetStarted without sign in", { tag: ["@HomePage", "@GetStartedAccessWithoutSignIn"] }, async ({ When, Home_Page, And, Then }) => {
    await When("User is not signed in already", null, { Home_Page });
    await And("User click on GetStarted button", null, { Home_Page });
    await Then("User should get user is not Sign-In warning message", null, { Home_Page });
  });

  test("user should be able to access any data structure from drop down without sign in", { tag: ["@HomePage", "@DataStrMenuAccessWithoutSignIn"] }, async ({ When, Home_Page, And, Then }) => {
    await When("User is not signed in already", null, { Home_Page });
    await And("User click on data structure drop down", null, { Home_Page });
    await Then("User should see six data structure options in list", null, { Home_Page });
  });

  test("verify Register and Sign-In button are displayed and clickable", { tag: ["@HomePage", "@RegisternSignInBtnDispalyed"] }, async ({ When, Home_Page, And, Then }) => {
    await When("User is not signed in already", null, { Home_Page });
    await And("User verify Register and Sign-In buttons are displayed", null, { Home_Page });
    await Then("verify Register and Sign-In buttons should be clickable", null, { Home_Page });
  });

  test("User should be redirected to login page after click on Sign-In button", { tag: ["@HomePage", "@signInBtn"] }, async ({ When, Home_Page, Then, SignIn_Page }) => {
    await When("User click on Sign-In buttons", null, { Home_Page });
    await Then("User should be redirected to login page", null, { SignIn_Page });
  });

  test("User should be redirected to Register page after click on Register button", { tag: ["@HomePage", "@RegisterBtn"] }, async ({ When, Home_Page, Then, page }) => {
    await When("User click on Register buttons", null, { Home_Page });
    await Then("User should be redirected to Register page", null, { page });
  });

  test("User should be redirected to Graph home page via Graph data structure dropdown", { tag: ["@HomePage", "@RegirectedToGraph"] }, async ({ When, SignIn_Page, Home_Page, And, Then, page }) => {
    await When("user is already signed in into dsportalapp", null, { SignIn_Page, Home_Page });
    await And("User click on data structure drop down", null, { Home_Page });
    await And("user click on Graph data structure from drop down menu \"Graph\"", null, { Home_Page });
    await Then("user should be redirected to Graph home page.", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\Home.feature"),
});

const testMetaMap = {
  "verify Sign-In warning message is not present by default": {"pickleLocation":"8:4","tags":["@HomePage","@NoSignInWaringByDefault"],"ownTags":["@NoSignInWaringByDefault"]},
  "user should be able to access GetStarted without sign in": {"pickleLocation":"13:3","tags":["@HomePage","@GetStartedAccessWithoutSignIn"],"ownTags":["@GetStartedAccessWithoutSignIn"]},
  "user should be able to access any data structure from drop down without sign in": {"pickleLocation":"19:4","tags":["@HomePage","@DataStrMenuAccessWithoutSignIn"],"ownTags":["@DataStrMenuAccessWithoutSignIn"]},
  "verify Register and Sign-In button are displayed and clickable": {"pickleLocation":"26:3","tags":["@HomePage","@RegisternSignInBtnDispalyed"],"ownTags":["@RegisternSignInBtnDispalyed"]},
  "User should be redirected to login page after click on Sign-In button": {"pickleLocation":"33:3","tags":["@HomePage","@signInBtn"],"ownTags":["@signInBtn"]},
  "User should be redirected to Register page after click on Register button": {"pickleLocation":"39:3","tags":["@HomePage","@RegisterBtn"],"ownTags":["@RegisterBtn"]},
  "User should be redirected to Graph home page via Graph data structure dropdown": {"pickleLocation":"46:3","tags":["@HomePage","@RegirectedToGraph"],"ownTags":["@RegirectedToGraph"]},
};