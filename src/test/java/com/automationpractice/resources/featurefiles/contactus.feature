Feature: Contact us customer service functionality
  As a user
  I want to visit contact us feature
  so I can contact automation practice

  Scenario Outline: Verify user should contact automation practice for customer service

    Given I am on automation practice home page
    When I click on contact us link
    And I select customer service from drop down menu
    And I enter email address in email field "<Email address>"
    And I enter order reference number "<Reference number>"
    And I enter message in message field "<Message>"
    And I click on send button
    Then I should send message successfully

    Examples:
      | Email address        | Reference number | Message     |
      | harrypatel@gmail.com | 78547854         | Hello There |
      | dkkattapa@gmail.com  | 234509876        | Hello       |

