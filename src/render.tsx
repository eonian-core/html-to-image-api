import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { chromium } from 'playwright'
import ExampleTemplate from './templates/exampleTemplate'
import { TemplateParameters, Viewport } from './types'
import { TokenRating } from './templates/token-rating'

export async function renderTemplateAsHTML(templateName: string, parameters: TemplateParameters): Promise<string> {
  let TemplateComponent: React.FC<any>

  switch (templateName) {
    case 'example':
      TemplateComponent = ExampleTemplate
      break
    case 'rating':
      TemplateComponent = TokenRating
      break
    default:
      throw new Error(`Unknown template: ${templateName}`)
  }

  return ReactDOMServer.renderToStaticMarkup(<TemplateComponent {...parameters} />)
}

export async function renderTemplateToImage(
  templateName: string,
  parameters: TemplateParameters,
  viewport: Viewport
): Promise<Buffer> {
  const browser = await chromium.launch()
  const context = await browser.newContext({ viewport })
  const page = await context.newPage()

  const html = await renderTemplateAsHTML(templateName, parameters)

  await page.setContent(html)
  const imageBuffer = await page.screenshot()
  await browser.close()

  return imageBuffer
}
