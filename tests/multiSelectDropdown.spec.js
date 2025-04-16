const {test, expect} = require('@playwright/test')

test("handle dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow'])


    await page.waitForTimeout(5000)

})