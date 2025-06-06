const {test, expect} = require('@playwright/test')

test.skip("Alert with OK", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enable alert handling or dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message).toContain('I am an alert box!')
        await dialog.accept(); //to close the dialog
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(5000)

})

test.skip("Confirmation dialoged with OK and cancel button", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message).toContain('Press a button!')
        await dialog.accept(); //close by using OK button
        //await dialog.dismiss()  //close by using cancel button
    })

    await page.click('#confirmBtn')
    await expect(page.locator('#demo')).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)

})

test("Prompt dialog", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message).toContain('Please enter your name')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John'); //close by using OK button
        
        
    })

    await page.click('#promptBtn')
    await expect(page.locator("(//p[@id='demo'])[1]")).toHaveText('Hello Harry Potter! How are you today?')
    await page.waitForTimeout(5000)

})