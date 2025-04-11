const {test, expect} = require('@playwright/test')

test('handle radiobutton', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/inputs')

    //inputbox - first name #input-text

    await page.locator("#input-text", "Maryem zubair")

    await page.waitForTimeout(5000) //Pausing code
    
})