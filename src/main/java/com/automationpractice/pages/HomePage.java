package com.automationpractice.pages;


import com.automationpractice.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



/**
 * Home page class extends to use properties and behaviour of utility class
 */
public class HomePage extends Utility {
    /**
     * logger to print logs
     */
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    /**
     * Locators saved using page factory model for web elements
     */

    @FindBy(xpath = "//header/div[2]/div[1]/div[1]/nav[1]/div[2]/a[1]")
    WebElement _contactUs;


    /**
     * Method created to do actions on each web element
     */
    public void clickOnContactUsButton() {
        Reporter.addStepLog("Clicking on Contact Us Button" + _contactUs.toString());
        clickOnElement(_contactUs);
        log.info("Clicking on Contact Us Button" + _contactUs.toString());
    }


}