const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {

    //Set Chrome option
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu')
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        //Send driver to website
        await driver.get("https://54.227.2.251/");

        //Grab an element from the page
        //await driver.findElement(By.id("lastname")).click()
        // 4 | type | id=lastname | valencia
        //await driver.findElement(By.id("lastname")).sendKeys("valencia")
        //backgroundcolor, I guess
        await driver.findElement(By.tagname('body'))
        backgroundColor = await bodyElement.getCssValue('background-color');

        //expected color
        expectedColor = 'rgb(0, 128, 0)'; //expected color , green

        //Check the result

        if (backgroundColor !== expectedColor) {
            throw new Error(`Background color mismatch. Expected: ${expectedColor}, Actual: ${backgroundColor}`);
        } else {
            console.log('Background color is as expected.');
        }
    } catch (error) {
        console.log('Test Failed because:', error);
    } finally {
        await driver.quit();
    }

}
test_case();