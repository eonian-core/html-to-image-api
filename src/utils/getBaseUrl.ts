import {NextApiRequest} from "next";
import {GetServerSidePropsContext} from "next/dist/types";

export function getBaseUrl(req: NextApiRequest | GetServerSidePropsContext): string {
  const headers = 'headers' in req ? req.headers : req.req?.headers;
  const protocol = headers?.['x-forwarded-proto'] || 'http';
  const host = headers?.['host'] || 'localhost:3000';

  return `${protocol}://${host}`;
}

export default getBaseUrl;
