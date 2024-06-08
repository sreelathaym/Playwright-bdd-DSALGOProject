/** Generated from: tests\features\Register.feature */
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe("Registering on DsAlgo partal", () => {

  test.beforeEach(async ({ Given, registerPage, When, Then }) => {
    await Given("User navigates to Dsalgo \"https://dsportalapp.herokuapp.com/\"", null, { registerPage });
    await When("user clicks on Get Started", null, { registerPage });
    await Then("user lands on DsAlgo Home page and clicks on Register tab on top right", null, { registerPage });
    await Then("It should land on register page and verify the url contains \"https://dsportalapp.herokuapp.com/register\"", null, { registerPage });
  });

  test.describe("User tries to register with valid username and valid password", () => {

    test("Example #1", async ({ And, registerPage, When, Then, Home_Page }) => {
      await And("User enters valid username \"Ninja123\"", null, { registerPage });
      await And("User enters valid \"Abcd1234!\"", null, { registerPage });
      await And("User confirms password \"Abcd1234!\"", null, { registerPage });
      await When("User clicks on register button", null, { registerPage });
      await Then("user is directed to DsAlgo home page", null, { Home_Page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\Register.feature"),
});

const testMetaMap = {
  "User tries to register with valid username and valid password|Example #1": {"pickleLocation":"19:1"},
};