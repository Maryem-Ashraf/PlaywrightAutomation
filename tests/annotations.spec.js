const {test, expect} = require('@playwright/test')

test("test1", async ({page})=>{    //.only --> only this test will be executed
    console.log("Test 1...")   //.skip --> test will be skipped
})

test("test2", async ({page, browserName})=>{    
    console.log("Test 2...")   
    if(browserName==='chromium')
    {
        test.skip()  //this will skip the chromium browser test
    }                //test.fixme() --> it will skip the test if it have any unknown issues
})

test("Test 3", async(page)=>{
    test.fail() //expected
    console.log("test 3")
    expect(1).toBe(2) //if both expected and actual fails, then test will pass

})

test('test 4',async(page)=>{
    test.slow()
    await page.goto("https://www.demoblaze.com/")
    console.log('test 4')   //default timeout is 30sec, this will slow the test
})