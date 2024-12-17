// pages/api/render.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { chromium } from 'playwright';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { template = 'DefaultTemplate', parameters = '', w = '1280', h = '720', format = 'html' } = req.query;

    if (format === 'html') {
        // Directly render the HTML template
        res.setHeader('Content-Type', 'text/html');
        res.redirect(`/${template}?parameters=${parameters}`);
        return;
    }

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Set viewport size using the w and h query parameters
    const width = parseInt(w as string, 10);
    const height = parseInt(h as string, 10);
    await page.setViewportSize({ width, height });

    // Navigate to the template page
    await page.goto(`http://localhost:3000/${template}?parameters=${parameters}`);

    let buffer: Buffer;
    if (format === 'pdf') {
        buffer = await page.pdf();
        res.setHeader('Content-Type', 'application/pdf');
    } else {
        buffer = await page.screenshot();
        res.setHeader('Content-Type', 'image/png');
    }

    await browser.close();

    res.send(buffer);
}