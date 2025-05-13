import { test, expect } from '@playwright/test';

test('page screenshot',async ({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:'screenshots' + Date.now() + 'Homepage.png'})

})

test('Full page screenshot',async ({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:'screenshots' + Date.now() + 'fULLPAGE.png', fullPage:true})

    
})

test('Element screenshot',async ({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.locator("//body/main/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4']/div[1]").screenshot({path:'screenshots' + Date.now() + 'macbook.png'})
    
})