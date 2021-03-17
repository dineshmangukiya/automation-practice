$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/automationpractice/resources/featurefiles/contactus.feature");
formatter.feature({
  "line": 1,
  "name": "Contact us customer service functionality",
  "description": "As a user\r\nI want to visit contact us feature\r\nso I can contact automation practice",
  "id": "contact-us-customer-service-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Verify user should contact automation practice for customer service",
  "description": "",
  "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on automation practice home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on contact us link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select customer service from drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter email address in email field \"\u003cEmail address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter order reference number \"\u003cReference number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter message in message field \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on send button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should send message successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service;",
  "rows": [
    {
      "cells": [
        "Email address",
        "Reference number",
        "Message"
      ],
      "line": 18,
      "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service;;1"
    },
    {
      "cells": [
        "harrypatel@gmail.com",
        "78547854",
        "Hello There"
      ],
      "line": 19,
      "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service;;2"
    },
    {
      "cells": [
        "dkkattapa@gmail.com",
        "234509876",
        "Hello"
      ],
      "line": 20,
      "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8204698500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user should contact automation practice for customer service",
  "description": "",
  "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on automation practice home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on contact us link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select customer service from drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter email address in email field \"harrypatel@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter order reference number \"78547854\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter message in message field \"Hello There\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on send button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should send message successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsTest.iAmOnAutomationPracticeHomePage()"
});
formatter.result({
  "duration": 376630400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iClickOnContactUsLink()"
});
formatter.result({
  "duration": 1493169000,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iSelectCustomerServiceFromDropDownMenu()"
});
formatter.result({
  "duration": 605819100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harrypatel@gmail.com",
      "offset": 38
    }
  ],
  "location": "ContactUsTest.iEnterEmailAddressInEmailField(String)"
});
formatter.result({
  "duration": 336875200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "78547854",
      "offset": 32
    }
  ],
  "location": "ContactUsTest.iEnterOrderReferenceNumber(String)"
});
formatter.result({
  "duration": 352530900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello There",
      "offset": 34
    }
  ],
  "location": "ContactUsTest.iEnterMessageInMessageField(String)"
});
formatter.result({
  "duration": 334819600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iClickOnSendButton()"
});
formatter.result({
  "duration": 22880073800,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iShouldSendMessageSuccessfully()"
});
formatter.result({
  "duration": 105721000,
  "status": "passed"
});
formatter.after({
  "duration": 1075602800,
  "status": "passed"
});
formatter.before({
  "duration": 8626146100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should contact automation practice for customer service",
  "description": "",
  "id": "contact-us-customer-service-functionality;verify-user-should-contact-automation-practice-for-customer-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on automation practice home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on contact us link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select customer service from drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter email address in email field \"dkkattapa@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter order reference number \"234509876\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter message in message field \"Hello\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on send button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should send message successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactUsTest.iAmOnAutomationPracticeHomePage()"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iClickOnContactUsLink()"
});
formatter.result({
  "duration": 2402252100,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iSelectCustomerServiceFromDropDownMenu()"
});
formatter.result({
  "duration": 434974300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dkkattapa@gmail.com",
      "offset": 38
    }
  ],
  "location": "ContactUsTest.iEnterEmailAddressInEmailField(String)"
});
formatter.result({
  "duration": 367497100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234509876",
      "offset": 32
    }
  ],
  "location": "ContactUsTest.iEnterOrderReferenceNumber(String)"
});
formatter.result({
  "duration": 344101200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello",
      "offset": 34
    }
  ],
  "location": "ContactUsTest.iEnterMessageInMessageField(String)"
});
formatter.result({
  "duration": 250011100,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iClickOnSendButton()"
});
formatter.result({
  "duration": 21185838600,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsTest.iShouldSendMessageSuccessfully()"
});
formatter.result({
  "duration": 101359200,
  "status": "passed"
});
formatter.after({
  "duration": 887898500,
  "status": "passed"
});
});