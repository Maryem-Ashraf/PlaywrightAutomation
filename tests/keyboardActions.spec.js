const {test, expect} = require('@playwright/test')

test('handle inoutbox', async ({page})=>{ 
    await page.goto("https://gotranscript.com/text-compare")
    await page.locator('[name="text1"]').fill("How are you buddy!")

    //ctrl + A
    await page.keyboard.press("ctrl+A")

    //ctrl + C
    await page.keyboard.press("ctrl+C")
    
    //press tab
    await page.keyboard.down('tab')       //to press the tab key
    await page.keyboard.up('tab')         //to release the tab key

    //ctrl + V
    await page.keyboard.press("ctrl+V")

    await page.waitForTimeout(5000)

})