const {test, expect} = require('@playwright/test')

test("Date Picker", async ({page})=>{ 
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.fill("#datepicker", "04/28/2025")
    //await page.waitForTimeout(3000)

    //date picker
    const year = "2025"
    const month = "May"
    const date = "05"

    await page.click("#datepicker") //opens calendar
    while(true)
    {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

        if(currentYear == year && currentMonth == month)
        {
            break;
        }
        await page.locator('[title="Next"]') //keep clicking on next button

        //date selection using for loop Approach -01
        //for(const dt of dates)
        //{
            //if(await dt.textContent() == date)
            //{
                //await dt.click()
                //break;
            //}
        //}

        //date selection without for loop Approach -02
        await page.click(`//a[@class='ui-state-default'] [text()=${date}`)

    }






})