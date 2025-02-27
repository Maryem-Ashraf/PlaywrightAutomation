import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto('https://www.demoblaze.com/')

    await page.click('id=login2')

    await page.fill('id=loginusername', 'Maryem')

    await page.fill('id=loginpassword', '2480')

    await page.click('//body')

    const logOutLink = await page.locator('id="logout2"')

    await expect (logOutLink).toBeVisible()

    await page.close()

})