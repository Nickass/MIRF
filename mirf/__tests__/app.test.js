const puppeteer = require('puppeteer')


const broserConfig = process.env.DEBUG ? {
  headless: false,
  slowMo: 250,
  devtools: true,
} : {};

describe('on page load', () => {
  test('h1 loads correctly', async () => {
    let browser = await puppeteer.launch(broserConfig)
    let page = await browser.newPage()
    
    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: ''
    })

    await page.goto(process.env.SERVER_URL);
    browser.close();
  }, 16000)
})