Feature: Array Validations feature
Background:
Given User clicks on get started button
And User clicks on sign in link on homepage
And User enters "shamibapatsdet124" and "Test@sdet124" in username and password fields
Then User click login button


Scenario:validating Arrays in python page
When User clicks getstarted button below Arrays
Then User clicks ArrayInPython Page
#Then user is landed ArrayInPython Page successfully and has title as "Arrays in Python"
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page
When The user enters valid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user is presented with the result after run button is clicked from sheet "<Sheetname>" and <RowNumber>


   Examples:
     | Sheetname  | RowNumber |
     | pythonCode |         5 |


Scenario Outline: Scenario Outline name: validating Arrays in python page with invalidData  
When User clicks getstarted button below Arrays
Then User clicks ArrayInPython Page
When The user clicks the Try here link
Given The user is in a page having an Editor with a Run button to test in "try Editor Url" page
When The user enters invalid python code in Editor from sheet "<Sheetname>" and <RowNumber>
And clicks run button
Then The user gets an error message as "NameError: name 'String' is not defined on line 1"


   Examples:
     | Sheetname  | RowNumber |
     | pythonCode |         1 |


