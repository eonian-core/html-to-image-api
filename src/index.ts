import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'
import * as fs from 'node:fs'
import * as showdown from 'showdown'

import * as config from './config'
import { TemplateParameters, Viewport } from './types'
import { createFromPreviewTemplate, renderTemplateAsHTML, renderTemplateToImage } from './render'

const app = express()
app.use(express.static('public'))
app.use(express.json())

const md = new showdown.Converter()

app.get('/', async (_request, response) => {
  const readme = fs.readFileSync('README.md', 'utf-8')
  try {
    const content = fs.readFileSync('views/index.tmpl', 'utf-8').replace('@@MAIN@@', md.makeHtml(readme.toString()))
    response.set('Content-Type', 'text/html')
    response.send(content)
  } catch (error) {
    response.send()
  }
})

/**
 * Renders token-rating from the corresponding template.
 * Used as a demo (for the development/testing purposes).
 * To see the closest result to the screenshot, please use /iframed-preview endpoint.
 */
app.get('/preview', async (request, response) => {
  const { templateName, width, height } = request.query
  const parameters = parseParameters(request, response)
  const content = await renderTemplateAsHTML(String(templateName), parameters)
  const html = createFromPreviewTemplate(content, width, height)
  response.set('Content-Type', 'text/html')
  response.send(html)
})

/**
 * Opens /preview content in iframe.
 * Used as a demo (for the development/testing purposes).
 */
app.get('/iframed-preview', async (request, response) => {
  const { width, height } = request.query
  const params = new URLSearchParams(request.query as Record<string, any>)
  const content = `<iframe src="http://localhost:${config.port}/preview?${params.toString()}" width="${width}" height="${height}"></iframe>`
  const html = createFromPreviewTemplate(content, width, height)
  response.set('Content-Type', 'text/html')
  response.send(html)
})

app.get('/generate', async (request, response) => {
  const { templateName, width, height } = request.query

  const viewport: Viewport = {
    width: parseInt(width as string),
    height: parseInt(height as string),
  }

  const parameters = parseParameters(request, response)
  try {
    const imageBuffer = await renderTemplateToImage(templateName as string, parameters, viewport)
    response.setHeader('Content-Type', 'image/png')
    response.send(imageBuffer)
  } catch (error) {
    console.error('Error generating image:', error)
    response.status(500).send('Error generating image')
  }
})

function parseParameters(request: express.Request, response: express.Response) {
  try {
    return JSON.parse(request.query.parameters as string)
  } catch (error) {
    console.error('Unable to parse parameters:', error)
    response.status(400).send('Invalid parameters format')
  }
}

async function main() {
  app.listen(config.port, () => {
    console.log(`🚀 Server ready at: http://localhost:${config.port}`)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})


