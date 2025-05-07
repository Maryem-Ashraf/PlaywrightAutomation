const {test, expect} = require('@playwright/test')

test('Homepage test', async ({page})=>{ 
    await page.goto("https://www.demoblaze.com/")

    //login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()

    //test homepage
    const products = await page.$$(".hrefch")
    expect(products).toHaveLength(9)

    //logout
    await page.locator("#logout2").click()
})
test('Add to cart test', async ({page})=>{ 

    //login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()

    //add to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })

    //log out
    await page.locator("#logout2").click()

})