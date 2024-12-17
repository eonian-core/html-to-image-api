import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { chromium } from 'playwright'
import ExampleTemplate from './templates/exampleTemplate'
import { TemplateParameters, Viewport } from './types'
import { TokenRating } from './templates/token-rating'

import * as fs from 'node:fs'

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
  const context = await browser.newContext({ viewport, deviceScaleFactor: 4, screen: viewport })
  const page = await context.newPage()

  const html = createFromPreviewTemplate(
    await renderTemplateAsHTML(templateName, parameters),
    viewport.width,
    viewport.height
  )

  await page.setContent(html)
  const imageBuffer = await page.screenshot()
  await browser.close()

  return imageBuffer
}

export function createFromPreviewTemplate(content: string, width: unknown, height: unknown): string {
  return fs
    .readFileSync('views/template-preview.tmpl', 'utf-8')
    .replace('@@CONTENT@@', content)
    .replace('@@WIDTH@@', `${width}px`)
    .replace('@@HEIGHT@@', `${height}px`)
}
