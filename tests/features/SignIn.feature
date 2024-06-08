Feature: SignIn and SignOut validation feature

  Background:
    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons

  Scenario: Sign-in with valid user name and valid passwrod

    Then User should be redirected to login page
    When User enters valid username and valid password
    And User click on login button
    Then User should be redirected to Home page with success message "You are logged in"
    And Username should be displayed along with Sign-out button on home page.
    Then user is logged in successfully and has title as "NumpyNinja"
    When User click on Sign-out button
    Then User should get Signout alert message "Logged out successfully" on home page.


  Scenario: verify if user gets error message with invalid credentials
    Given user is on the "login" page
    And User enters "testuser" and "test123" in username and password fields
    When User click on login button
    Then user recieves "Invalid Username and Password" error message

  Scenario Outline: verify if user gets error message with invalid credentials
    Given user is on the "login" page
    And User enters "<username>" and "<password>" in username and password fields
    When User click on login button
    Then user recieves "Invalid Username and Password" error message
    Examples:
      | username | password |
      | abcd     | abcd123  |
      | test     | test123  |
      | hg!@#@$  | test     |
