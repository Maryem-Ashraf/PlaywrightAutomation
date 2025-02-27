const {test, expect} =  require('@playwright/test')
const exp = require('constants')

test('assertionstest', async ({page})=>{

    //to open app

    await page.goto('https://demo.nopcommerce.com/register')

    //to validate that page have URL

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //to validate page have title

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //to validate element is visible

   const logoElement = await page.locator('.header-logo')
   await expect(logoElement).toBeVisible()


   //to validate radio button or checkbox is checked 

   const maleRadioButton = await page.locator('#gender-male')
   maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked()

   //checkbox

   const newsLetterCheckbox = await page.locator('#Newsletter')
   await expect(newsLetterCheckbox).toBeChecked()

   //to validate that element have/contain text

   const registerButton = await page.locator('.page-title h1')
   await expect(registerButton).toHaveText('Register')    //need to write full text

   const rgstrButton = await page.locator('.page-title h1')
   await expect(rgstrButton).toContainText('Reg')         //partial text

   //to validate element have attribute

   const regButton = await page.locator('#register-button')
   await expect(regButton).toHaveAttribute('type', 'submit')

   //list of elements have given length
   const options = await page.locator('#customerCurrency option')
   await expect(options).toHaveCount(2)

   //to validate input field has a value
   const emailInput = await page.locator('#Email')
   await emailInput.fill('test')
   await expect(emailInput).toHaveValue('test')


})

