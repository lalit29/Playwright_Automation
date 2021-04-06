const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.hometown.in/login
  await page.goto('https://www.hometown.in/login');
  // Click text=Email ID *Password *Remember me Forgot Password?SIGN IN >> input[type="text"]
  await page.click('text=Email ID *Password *Remember me Forgot Password?SIGN IN >> input[type="text"]');
  // Fill text=Email ID *Password *Remember me Forgot Password?SIGN IN >> input[type="text"]
  await page.fill('text=Email ID *Password *Remember me Forgot Password?SIGN IN >> input[type="text"]', 'lalit@hometown.in');
  // Click input[type="password"]
  await page.click('input[type="password"]');
  // Fill input[type="password"]
  await page.fill('input[type="password"]', '123456');
  // Click button:has-text("SIGN IN")
  await page.click('button:has-text("SIGN IN")');
  // Go to https://www.hometown.in/profile
  await page.goto('https://www.hometown.in/profile');
  // ---------------------
  await context.close();
  await browser.close();
})();