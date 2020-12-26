import * as pupTypes from 'puppeteer';
const puppeteer: typeof pupTypes = require('puppeteer');

const width = 980;
const height = 1080;
const broserConfig = process.env.DEBUG ? {
  headless: false,
  slowMo: 250,
  devtools: true,
  args: ['--start-maximized']
} : {};

describe('Check the demo loads', () => {
  let browser: pupTypes.Browser;
  let page: pupTypes.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch(broserConfig);
    page = await browser.newPage();

    page.emulate({
      viewport: { width, height },
      userAgent: ''
    });

    await page.goto(process.env.SERVER_URL);
  });

  afterAll(() => {
    browser.close();
  });

  test('header renders correctly', async () => {
    await new Promise(res => setTimeout(res, 50000))
    const header = await page.$eval("header", el => el);
    expect(header).toBeDefined();
  }, 60000)
})