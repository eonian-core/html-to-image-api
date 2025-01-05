import React from 'react';
import {GetServerSideProps} from 'next';
import dynamic from 'next/dynamic';
import TemplateWrapper from '../components/TemplateWrapper';
import {ParsedQuery, parseQuery} from "../utils/parseQuery";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: parseQuery(context),
  };
};

const TemplatePage: React.FC<ParsedQuery> = ({ templateName, parameters, viewport }) => {
  const TemplateComponent = dynamic(() => {
    switch (templateName) {
      case 'rating':
        return import(`../templates/${templateName}/index`);
      default:
        throw new Error(`Unknown template: ${templateName}`);
    }
  });

  return (
    <TemplateWrapper viewport={viewport}>
      <TemplateComponent {...parameters} />
    </TemplateWrapper>
  );
};

export default TemplatePage;
