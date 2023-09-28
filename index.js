const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',],
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  // Perform actions on the web page
  await browser.close();
})();