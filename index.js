const { chromium, firefox, webkit } = require('playwright');

const browserList = [chromium, firefox, webkit];

browserList.forEach(async browserItem => {
  const browser = await browserItem.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/');

  await page.fill('data-test-id=name', 'ozak25');
  await page.fill('data-test-id=age', '29');
  await page.click('data-test-id=submit');

  await page.screenshot({
    path: `screenshots/${browserItem.name()}/${Date.now()}.png`,
  });
  await browser.close();
});
