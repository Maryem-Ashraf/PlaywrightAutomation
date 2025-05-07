import {test, expect} from '@playwright/test';
let page;
test.beforeEach(async ({browser})=>{ //.beforeAll -> 
    page = await browser.newPage()
    await page.goto("https://www.demoblaze.com/")

    //login
    await page.locator("#login2").click()
    await page.locator("#loginusername").fill("pavanol")
    await page.locator("#loginpassword").fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()
})

test.afterEach(async()=>{ //.afterAll
    await page.locator("#logout2").click()
})

test('Homepage test', async ()=>{ 
    const products = await page.$$(".hrefch")
    expect(products).toHaveLength(9)
})

test('Add to cart test', async ()=>{ 
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    
})