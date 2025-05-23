const {test, expect}=require('@playwright/test')

test('frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total No. frames
    const allFrames =  await page.frames()
    console.log("Number of frames:", allFrames.length)

    //Approach-1 using name or URL - if name is present then use name insterad of url
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("input[name='mytext1']", 'Hello')

    //Approach-2 using frame locator
    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
    inputbox.fill("Hello")
     

    await page.waitForTimeout(5000)




})