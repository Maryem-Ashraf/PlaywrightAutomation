import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginpage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';

test('test', async ({ page }) => { 

    //login
    const login = new loginPage(page)
    await login.gotologinPage()
    await login.login("pavanol", "test@123")
    await page.waitForTimeout(3000)
    
    //home
    const home = new homePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart()

    //cart
    const cart = new cartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart("Nexus 6")
    

})