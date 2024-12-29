import { NextApiRequest } from 'next';
import { GetServerSidePropsContext } from 'next';

export interface ParsedQuery {
  templateName: string;
  parameters: any;
  viewport: { width: number; height: number };
}

export function parseQuery(req: NextApiRequest | GetServerSidePropsContext): ParsedQuery {
  const { templateName, width, height, parameters } = req.query;

  if (typeof templateName !== 'string') {
    throw new Error('Template name is required and must be a string');
  }
  if (!width || !height) {
    throw new Error('Both width and height are required');
  }

  const viewport = {
    width: parseInt(width as string, 10),
    height: parseInt(height as string, 10),
  };

  if (isNaN(viewport.width) || isNaN(viewport.height)) {
    throw new Error('Width and height must be valid numbers');
  }

  let parsedParameters;
  try {
    parsedParameters = JSON.parse(parameters as string);
  } catch (e) {
    throw new Error('Parameters must be a valid JSON string');
  }

  return { templateName, parameters: parsedParameters, viewport };
}
