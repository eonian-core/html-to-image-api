import 'reflect-metadata'
import 'dotenv/config'

import express from 'express';
import * as fs from 'node:fs'
import * as showdown from 'showdown'

import * as config from './config';
import { TemplateParameters, Viewport } from './types';
import { renderTemplate } from './render';

// set up express web server
const app = express()
// set up static content
app.use(express.static('public'))
// Use express.json() middleware to parse JSON bodies
app.use(express.json())

const md = new showdown.Converter()

// Main page
app.get('/', async(_request, response) => {
  const readme = fs.readFileSync('README.md', 'utf-8')

  console.log(`Received request. Sending readme content.`)

  // render HTML response
  try {
    response.set('Content-Type', 'text/html')

    const content = fs.readFileSync('views/index.tmpl', 'utf-8')
      .replace('@@MAIN@@', md.makeHtml(readme.toString()))
    response.send(content)
  } catch (error) {
    response.send()
  }
})

app.get('/generate', async (req, res) => {
  const { templateName, parameters, width, height } = req.query;

  // Parse the parameters from JSON string to object
  let parsedParameters: TemplateParameters;
  try {
    parsedParameters = JSON.parse(parameters as string);
  } catch (error) {
    console.error('Error parsing parameters:', error);
    return res.status(400).send('Invalid parameters format');
  }

  const viewport: Viewport = {
    width: parseInt(width as string),
    height: parseInt(height as string),
  };

  try {
    const imageBuffer = await renderTemplate(templateName as string, parsedParameters, viewport);
    res.setHeader('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send('Error generating image');
  }
});



async function main(){
  app.listen(config.port, () => {
    console.log(`🚀 Server ready at: https://localhost:${config.port}`)
  }) 
}


main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })