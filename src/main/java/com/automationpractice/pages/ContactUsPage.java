package com.automationpractice.pages;

import com.automationpractice.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ContactUsPage extends Utility {

    /**
     * logger to print logs
     */
    private static final Logger log = LogManager.getLogger(ContactUsPage.class.getName());

    /**
     * Locators saved using page factory model for web elements
     */

    @FindBy(xpath = "//select[@id='id_contact']")
    WebElement _subjectHeading;
    @FindBy(xpath = "//input[@id='email']")
    WebElement _emailAddress;
    @FindBy(xpath = "//input[@id='id_order']")
    WebElement _orderReference;
    @FindBy(xpath = "//textarea[@id='message']")
    WebElement _message;
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/form[1]/fieldset[1]/div[2]/button[1]/span[1]")
    WebElement _send;
    @FindBy(xpath = "//p[contains(text(),'Your message has been successfully sent to our tea')]")
    WebElement _getMessageText;

    /**
     * Method created to do actions on each web element
     */


    public void selectCustomerService() {
        Reporter.addStepLog("Select customer service from drop down menu" + _subjectHeading.toString());
        clickOnElement(_subjectHeading);
        selectByValueFromDropDownMenu(_subjectHeading, "2");
        log.info("Select customer service from drop down menu" + _subjectHeading.toString());
    }

    public void enterEmailAddress(String emailAddress) {
        Reporter.addStepLog("Entering Email Address" + emailAddress + "On Email address Field" + _emailAddress.toString());
        sendTextToElement(_emailAddress, emailAddress);
        log.info("Entering Email Address" + emailAddress + "On Email address Field" + _emailAddress.toString());
    }

    public void enterOrderReference(String orderReference) {
        Reporter.addStepLog("Entering Order Reference" + orderReference + "On Order Reference field" + _orderReference.toString());
        waitOnTheElement(_orderReference, 20);
        sendTextToElement(_orderReference, orderReference);
        log.info("Entering Order Reference" + orderReference + "On order Reference Field" + _orderReference.toString());
    }

    public void enterMessage(String message) {
        Reporter.addStepLog("Entering Message" + message + "in message field" + _message.toString());
        sendTextToElement(_message, message);
        log.info("Entering Message " + message + "in message Field" + _message.toString());
    }


    public void clickOnSendButton() {
        Reporter.addStepLog("Clicking on Send Button" + _send.toString());
        clickOnElement(_send);
        log.info("Clicking on send Button" + _send.toString());
    }

    public String getTextMessage() {
        Reporter.addStepLog("Getting Text Message" + _getMessageText.toString());
        log.info("Getting Text Message" + _getMessageText.toString());
        return getTextFromElement(_getMessageText);
    }

}
