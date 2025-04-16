const {test, expect} = require('@playwright/test')

test("handle dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow'])

    //Assertions
    //1) check number of options in dropdown
    //const options = await page.locator('#colors option')
    await expect(options).toHaveCount(5)

    //2) check number of options in dropdown using array
    const options = await page.$$('#colors option')
    console.log('Number of options:', options.length)
    await expect(options.length).toBe(5)

    //3) check presence of value in dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy




    await page.waitForTimeout(5000)

})