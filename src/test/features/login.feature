Feature: Login Functionality

  As a user, I want to be able to log in to the application
  so that I can access my account.

  Background:
    Given the login page is displayed

  
  Scenario Outline: User logs in with valid and invalid credentials
    When the user enters the username "<username>" and the password "<password>"
    And the user clicks on the login button
    Then the user should see "<message>"

    Examples:
      | username      | password      | message                   |
      | student       | Password123   | Logged In Successfully    |
      | student23     | Password12345 | Your username is invalid! |

