/** Generated from: tests\features\DataStructures.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("DataStructures-Introduction feature", () => {

  test.beforeEach(async ({ Given, Home_Page, When, SignIn_Page, page, And }) => {
    await Given("user navigate to dsportalapp home page", null, { Home_Page });
    await When("User click on Sign-In buttons", null, { Home_Page });
    await When("User enters valid username and valid password", null, { SignIn_Page, page });
    await And("User click on login button", null, { SignIn_Page });
  });

  test("", { tag: ["@DataStructures-Introduction"] }, async ({ When, homePage, Then, dataStructurePage, page, Given }) => {
    await When("The user clicks on the Get Started button below Data Structures", null, { homePage });
    await Then("The user is redirected to \"DataStructures-Introduction\" Page", null, { dataStructurePage, page });
    await When("The user clicks on the Time Complexity link", null, { dataStructurePage });
    await Then("The user is redirected to \"Time Complexity\" Page", null, { dataStructurePage, page });
    await When("the user clicks on Practice Questions link", null, { dataStructurePage });
    await Then("The user is redirected to \"Practice Questions DS\" Page", null, { dataStructurePage, page });
    await Then("The user goes back to previous Page \"Time Complexity\"", null, { dataStructurePage, page });
    await When("The user clicks the Try here link", null, { dataStructurePage, page });
    await Given("The user is in a page having an Editor with a Run button to test in \"try Editor Url\" page", null, { dataStructurePage, page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\DataStructures.feature"),
});

const testMetaMap = {
  "": {"pickleLocation":"11:1","tags":["@DataStructures-Introduction"]},
};