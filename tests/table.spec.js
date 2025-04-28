const {test, expect} = require('@playwright/test')

test("handling table", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = await page.locator("#productTable")

    //1)total No. of columns
    const columns = await page.locator("thead tr th")
    console.log("Number of columns:", await columns.count())
    expect (await columns.count()).toBe(9)

    //2)total No. of rows
    const rows = await page.locator("tbody tr")
    console.log("Number of rows:", await rows.count())
    expect (await rows.count()).toBe(17)

    //select checkbox for soundbar
    //const machedRow = rows.filter({ 
        //has: page.locator("td"),
        //hasText: 'Soundbar'
    //})

    //await machedRow.locator(("//input[@type='checkbox'])[11]").check())
    

    //3) select multiple products by re-usable function 
    //await selectProduct(rows, page, 'Soundbar')
    //await selectProduct(rows, page, 'E-Reader')

    //4) print all prodct details using loop
    

    await page.waitForTimeout(5000)



    async function selectProduct(rows, page, name) {
        const machedRow = rows.filter({
            has: page.locator('td'),
            hasText: name
        })
        await machedRow.locator(("//input[@type='checkbox'])[11]").check())
    }

})