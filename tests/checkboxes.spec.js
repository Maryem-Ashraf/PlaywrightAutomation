const {test, ecxpect} = require('@playwright/test')

test ("Handle chexkboxes", async ({page})=>{
    await page.goto("http://itera-qa.azurewebsites.net/home/automation")

    //single check
    await page.locator("").check()

    expect (await page.locator("").check()).toBeChecked()

    //multiple checkboxes
    const checkboxeLocators = [
        "locator1",
        "locator2",
        "locator3"

    ]

    for (const locator of chexkboxLocator) //select multiple checkboxes
    {
        await page.locator(locator).check()
    }



})