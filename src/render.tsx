import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { chromium } from 'playwright';
import ExampleTemplate from './templates/exampleTemplate';
import { TemplateParameters, Viewport } from './types';

export async function renderTemplate(
    templateName: string,
    parameters: TemplateParameters,
    viewport: Viewport
): Promise<Buffer> {
    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    // Declare TemplateComponent as a React functional component
    let TemplateComponent: React.FC<any>;

    switch (templateName) {
        case 'example':
            TemplateComponent = ExampleTemplate;
            break;
        default:
            throw new Error(`Unknown template: ${templateName}`);
    }
    console.log('parameters', parameters.title)

    // Render the selected template
    const html = ReactDOMServer.renderToStaticMarkup(
        <TemplateComponent {...parameters} />
);

    await page.setContent(html);
    const imageBuffer = await page.screenshot();
    await browser.close();

    return imageBuffer;
}