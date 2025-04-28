const {test, expect} = require('@playwright/test')

test("Mouse Double click", async ({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/")
    const copyBtn = await page.locator("//button[normalize-space()='Copy Text']")

    //double click
    await copyBtn.dblclick()
    const field2 = await page.locator("#field2")
    await expect(field2).toHaveValue("Hello World!")
    await page.waitForTimeout(5000)

})