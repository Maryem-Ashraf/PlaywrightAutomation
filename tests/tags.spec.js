const {test, expect} = require('@playwright/test')

test("test1@sanity", async ({page})=>{ 
    console.log("This is my test 1...")
})


test("test2@sanity", async ({page})=>{ 
    console.log("This is my test 2...")
})


test("test3@reg", async ({page})=>{ 
    console.log("This is my test 3...")
})


test("test4@reg", async ({page})=>{ 
    console.log("This is my test 4...")
})


test("test5@sanity@reg", async ({page})=>{ 
    console.log("This is my test 5...")
})

//npx playwright test tests/tags.spec.js --project chromium --headed --grep @reg ---> it will run only of reg tests
//npx playwright test tests/tags.spec.js --project chromium --headed --grep @sanity --> it will run only of sanityu tests
//npx playwright test tests/tags.spec.js --project chromium --headed --grep @sanity@reg --> it will run both tests
//npx playwright test tests/tags.spec.js --project chromium --headed --grep @sanity --grep-invert @reg --> it will exclude reg and vice versa