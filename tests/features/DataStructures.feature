
@DataStructures-Introduction
Feature: DataStructures-Introduction feature
  
Background:
    Given user navigate to dsportalapp home page
    When User click on Sign-In buttons
    When User enters valid username and valid password
    And User click on login button

Scenario:
    # Given The user is on the "home page" after logged in
    When The user clicks on the Get Started button below Data Structures
    Then The user is redirected to "DataStructures-Introduction" Page
    When The user clicks on the Time Complexity link
    Then The user is redirected to "Time Complexity" Page
    When the user clicks on Practice Questions link
    Then The user is redirected to "Practice Questions DS" Page
    Then The user goes back to previous Page "Time Complexity"
    When The user clicks the Try here link
    Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page


# @DataStructures2
#   	Scenario: Navigating to DataStructures-Introduction page   
#     When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
#     And clicks run button
#     Then The user is presented with the result after run button is clicked from sheet "<Sheetname>" and <RowNumber>

#     Examples: 
#       | Sheetname  | RowNumber |
#       | pythonCode |         5 |

#   @DataStructures5
#   	Scenario Outline: The user is presented with error message for invalid code in Editor 
#     #Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page
#     When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>
#     And clicks run button
#     Then The user gets an error message as "NameError: name 'String' is not defined on line 1"

#     Examples: 
#       | Sheetname  | RowNumber |
#       | pythonCode |         1 |
    
# #    @DataStructures6
#     Scenario: The user is able to click and navigate to Practice Questions
#     Given The user is on the "Time Complexity" after logged in
#     When the user clicks on Practice Questions link
#     Then The user is directed to "Practice Questions" page
