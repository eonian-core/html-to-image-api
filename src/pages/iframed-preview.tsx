import React from 'react';
import { GetServerSideProps } from 'next';
import { ParsedQuery, parseQuery } from '../utils/parseQuery';
import getBaseUrl from '../utils/getBaseUrl';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const baseUrl = getBaseUrl(context);
  const queryString = new URLSearchParams(context.query as Record<string, string>).toString();
  const iframeSrc = `${baseUrl}/preview?${queryString}`;

  return {
    props: {
      ...parseQuery(context),
      iframeSrc,
    },
  };
};

const IframedPreview: React.FC<ParsedQuery & { iframeSrc: string }> = ({ iframeSrc, viewport }) => {
  return (
    <div>
      <iframe
        src={iframeSrc}
        width={viewport.width}
        height={viewport.height}
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default IframedPreview;
