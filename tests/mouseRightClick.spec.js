const {test, expect} = require('@playwright/test')

test("Mouse Hover", async ({page})=>{ 
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    const button = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
    
    //right click action
    //await page.click(button)   //this will simply left click on button

    await button.click({button: "right"})

    await page.waitForTimeout(5000)

})