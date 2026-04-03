import puppeteer from 'puppeteer';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const htmlPath = path.resolve('/mnt/disco2/pt2/public/brochure-dataminds.html');
const pdfPath = path.resolve('/mnt/disco2/pt2/public/brochure-dataminds.pdf');

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(htmlPath).toString(), { waitUntil: 'networkidle0' });

const dims = await page.evaluate(() => {
  const body = document.body;
  const html = document.documentElement;
  const width = Math.max(body.scrollWidth, html.scrollWidth, body.offsetWidth, html.offsetWidth);
  const height = Math.max(body.scrollHeight, html.scrollHeight, body.offsetHeight, html.offsetHeight);
  return { width, height };
});

await page.pdf({
  path: pdfPath,
  printBackground: true,
  width: `${dims.width}px`,
  height: `${dims.height}px`,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
  preferCSSPageSize: false,
});

await browser.close();
console.log(`PDF regenerated at: ${pdfPath}`);
