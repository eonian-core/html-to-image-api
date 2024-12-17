import { NextApiRequest, NextApiResponse } from 'next';
import { chromium } from 'playwright';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { template, parameters, w = '1280', h = '720' } = req.query;
    const templateName = typeof template === 'string' ? template : 'DefaultTemplate';
    const isImageRequest = templateName.endsWith('.jpg');
    const cleanTemplateName = isImageRequest ? templateName.replace('.jpg', '') : templateName;

    // Parse parameters
    let parsedParameters = {};
    try {
        parsedParameters = JSON.parse(decodeURIComponent(parameters as string));
    } catch (error) {
        console.error('Failed to parse parameters:', error);
        res.status(400).json({ error: 'Invalid parameters format' });
        return;
    }

    // Parse viewport dimensions
    const width = parseInt(w as string, 10);
    const height = parseInt(h as string, 10);
    const viewport = {
        width: isNaN(width) ? 1280 : width,
        height: isNaN(height) ? 720 : height,
        deviceScaleFactor: 2, // Use a higher scale factor for high resolution
    };

    if (isImageRequest) {
        try {
            const browser = await chromium.launch();
            const page = await browser.newPage();

            // Set viewport size and scale factor
            await page.setViewportSize(viewport);

            // Navigate to the template page with parameters
            const url = `http://localhost:3000/${cleanTemplateName}?parameters=${encodeURIComponent(JSON.stringify(parsedParameters))}`;
            await page.goto(url, { waitUntil: 'networkidle' });

            // Add a delay to ensure the page is fully rendered
            await page.waitForTimeout(3000);

            // Capture a screenshot
            const imageBuffer = await page.screenshot({ type: 'jpeg' });

            await browser.close();

            // Set the response headers and send the image
            res.setHeader('Content-Type', 'image/jpeg');
            res.send(imageBuffer);
        } catch (error) {
            console.error('Error rendering image:', error);
            res.status(500).json({ error: 'Failed to render image' });
        }
    } else {
        res.status(400).json({ error: 'Invalid request format' });
    }
}