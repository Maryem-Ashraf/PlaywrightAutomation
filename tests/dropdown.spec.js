const {test, expect} = require('@playwright/test')

test("handle dropdown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //multiple ways to select option from dropdown

    await page.locator("#country").selectOption({label:'India'}) //by label
    await page.locator("#country").selectOption('India') //visible text


    // Assertions
    // 1) check number of options in dropdown - Approach 1
    //const options = page.locator('#country option') //this will capture all the options in "option" variable
    await expect(options).toHaveCount(10)

    // 1) check number of options in dropdown - Approach 2
    //const options= await page.$$('#country option')
    console.log("Number of options:", options.length)

    //check presence of value in dropdown - approach 1
    const content = await page.locator('#country').textContent()
    await expect(content.includes('India')).toBeTruthy()

    //check presence of value in dropdown - approach 2 - using loop
    const options = await page.$$('#country option')

    for (const option of options)
    {
        console.log(await option.textContent())
    }




    await page.waitForTimeout(5000)

})