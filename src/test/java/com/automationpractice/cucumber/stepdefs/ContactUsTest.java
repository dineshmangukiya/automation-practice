package com.automationpractice.cucumber.stepdefs;

import com.automationpractice.pages.ContactUsPage;
import com.automationpractice.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class ContactUsTest {
    @Given("^I am on automation practice home page$")
    public void iAmOnAutomationPracticeHomePage() {

    }

    @When("^I click on contact us link$")
    public void iClickOnContactUsLink() {
        new HomePage().clickOnContactUsButton();
    }

    @And("^I select customer service from drop down menu$")
    public void iSelectCustomerServiceFromDropDownMenu() {
        new ContactUsPage().selectCustomerService();

    }

    @And("^I enter email address in email field \"([^\"]*)\"$")
    public void iEnterEmailAddressInEmailField(String emailAddress) {
        new ContactUsPage().enterEmailAddress(emailAddress);
    }

    @And("^I enter order reference number \"([^\"]*)\"$")
    public void iEnterOrderReferenceNumber(String orderReference) {
        new ContactUsPage().enterOrderReference(orderReference);
    }

    @And("^I enter message in message field \"([^\"]*)\"$")
    public void iEnterMessageInMessageField(String message) {
        new ContactUsPage().enterMessage(message);
    }

    @And("^I click on send button$")
    public void iClickOnSendButton() {
        new ContactUsPage().clickOnSendButton();
    }

    @Then("^I should send message successfully$")
    public void iShouldSendMessageSuccessfully() {
        Assert.assertEquals(new ContactUsPage().getTextMessage(),"Your message has been successfully sent to our team.");
    }
}
