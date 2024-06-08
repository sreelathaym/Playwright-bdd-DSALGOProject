Feature: Registering on DsAlgo partal

Background: register Page
    Given User navigates to Dsalgo "https://dsportalapp.herokuapp.com/"
    When user clicks on Get Started 
    Then user lands on DsAlgo Home page and clicks on Register tab on top right
    Then It should land on register page and verify the url contains "https://dsportalapp.herokuapp.com/register"


Scenario Outline: User tries to register with valid username and valid password
     
    And User enters valid username "<username>" 
    And User enters valid "<password>" 
    And User confirms password "<pConfirmation>"
    When User clicks on register button
    Then user is directed to DsAlgo home page
 Examples:
|username|password|pConfirmation|
|Ninja123|Abcd1234!|Abcd1234!|
   