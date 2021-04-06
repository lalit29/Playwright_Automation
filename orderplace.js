const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.hometown.in/
//   await page.goto('https://www.hometown.in/');
//   // Click img[alt="DOD"]
//   await page.click('img[alt="DOD"]');
//   // assert.equal(page.url(), 'https://www.hometown.in/hot-deals/furniture-deals');
//   // Click #sku_pro_HO340SS50AUJHTFUR-461177
//   await page.click('#sku_pro_HO340SS50AUJHTFUR-461177');
//   // Click #hometown_1573910556 div:has-text("Gayle Engineered Wood Shoe Rack in Wenge Colour by HomeTown₹7,599 ₹14,900Dimensi")
//   await page.click('#hometown_1573910556 div:has-text("Gayle Engineered Wood Shoe Rack in Wenge Colour by HomeTown₹7,599 ₹14,900Dimensi")');
  await page.goto('https://www.hometown.in/hot-deals/furniture-deals');
  // Click text=Buy Now
  await page.click('text=Buy Now');
  // assert.equal(page.url(), 'https://www.hometown.in/checkout/cart');
  // Click :nth-match(:text("SECURE CHECKOUT"), 2)
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.hometown.in/checkout/delivery-address' }*/),
    page.click(':nth-match(:text("SECURE CHECKOUT"), 2)')
  ]);
  // Click input[type="text"]
  await page.click('input[type="text"]');
  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'test');
  // Click text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 2)
  await page.click('text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 2)');
  // Fill text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 2)
  await page.fill('text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 2)', 'shdjashk@edahkda.com');
  // Click text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 3)
  await page.click('text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 3)');
  // Fill text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 3)
  await page.fill('text=Full Name *Email ID *Phone * >> :nth-match(input[type="text"], 3)', '7132321212`');
  // Click textarea[type="textarea"]
  await page.click('textarea[type="textarea"]');
  // Fill textarea[type="textarea"]
  await page.fill('textarea[type="textarea"]', 'sadsa');
  // Click :nth-match(textarea[type="textarea"], 2)
  await page.click(':nth-match(textarea[type="textarea"], 2)');
  // Fill :nth-match(textarea[type="textarea"], 2)
  await page.fill(':nth-match(textarea[type="textarea"], 2)', 'dadsdasd');
  // Click text=Pincode *State * >> input[type="text"]
  await page.click('text=Pincode *State * >> input[type="text"]');
  // Fill text=Pincode *State * >> input[type="text"]
  await page.fill('text=Pincode *State * >> input[type="text"]', '401202');
  // Click text=Save and Continue
  await page.click('text=Save and Continue');
  // Go to https://www.hometown.in/checkout/payment-options
  await page.goto('https://www.hometown.in/checkout/payment-options');
  // Click text=Internet Banking
  await page.click('text=Internet Banking');
  // Click img[alt="ICIB"]
  await page.click('img[alt="ICIB"]');
  // Click text=Place Order
  await page.click('text=Place Order');
  // Go to https://secure.payu.in/_payment
  await page.goto('https://secure.payu.in/_payment');
  // Go to https://secure.payu.in/8a2845e227f164fc404bc9d00aacdebc/paytxn
  await page.goto('https://secure.payu.in/8a2845e227f164fc404bc9d00aacdebc/paytxn');
  // Go to https://shopping.icicibank.com/corp/BANKAWAY?IWQRYTASKOBJNAME=bay_mc_login&BAY_BANKID=ICI
  await page.goto('https://shopping.icicibank.com/corp/BANKAWAY?IWQRYTASKOBJNAME=bay_mc_login&BAY_BANKID=ICI');
  // ---------------------
  await context.close();
  await browser.close();
})();