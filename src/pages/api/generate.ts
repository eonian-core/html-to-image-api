import { NextApiRequest, NextApiResponse } from 'next';
import { chromium } from 'playwright';
import {parseQuery} from '../../utils/parseQuery';
import getBaseUrl from "../../utils/getBaseUrl";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { viewport } = parseQuery(req);
  try {
    console.log('Launching browser');
    const browser = await chromium.launch({
      args: [
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-sandbox'
      ],
      chromiumSandbox: false
    });
    console.log('New Browser context');
    const context = await browser.newContext({
      viewport: viewport,
      deviceScaleFactor: 4,
      screen: viewport
    });

    const baseUrl = getBaseUrl(req)
    const queryString = new URLSearchParams(req.query as Record<string, string>).toString();
    const fullUrl = `${baseUrl}/preview?${queryString}`;

    console.log('New page open');
    const page = await context.newPage();
    console.log('Loading url:', fullUrl);
    await page.goto(fullUrl, { waitUntil: 'networkidle' });

    console.log('Take screenshot');
    const screenshot = await page.screenshot({ type: 'png' });

    console.log('Close browser');
    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate preview' });
  }
}
