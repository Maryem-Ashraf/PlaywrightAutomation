const {test, expect} = require('@playwright/test')

test('LocateMultipleElements', async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    const links = await page.$$('a')

    for (const link of links)
    {
        linkText = await link.textContent()
    }
})