import React from 'react';
import {GetServerSideProps} from 'next';
import dynamic from 'next/dynamic';
import TemplateWrapper from '../components/TemplateWrapper';

interface TemplatePageProps extends TemplateProps {
    template: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { template = 'DefaultTemplate', parameters = '{}', w = '1280', h = '720' } = context.query;

    // Parse the width and height from the query parameters
    const width = parseInt(w as string, 10);
    const height = parseInt(h as string, 10);

    // Ensure the parsed values are valid numbers, and provide defaults if not
    const viewport = {
        width: isNaN(width) ? 1280 : width,
        height: isNaN(height) ? 720 : height,
    };

    // Safely parse the parameters JSON string
    let parsedParameters = {};
    try {
        parsedParameters = JSON.parse(parameters as string);
    } catch (error) {
        console.error('Failed to parse parameters:', error);
    }

    console.log('viewport:', viewport);
    console.log('parameters:', parsedParameters);

    return {
        props: { template, parameters: parsedParameters, viewport },
    };
};

const TemplatePage: React.FC<TemplatePageProps> = ({template, parameters, viewport}) => {
    const TemplateComponent = dynamic<TemplatePageProps>(() =>
        import(`../templates/${template}/${template}`).catch(() =>
            import('../templates/DefaultTemplate/DefaultTemplate')
        )
    );

    return (
        <TemplateWrapper width={viewport.width} height={viewport.height}>
            <TemplateComponent template={template} parameters={parameters} viewport={viewport}/>
        </TemplateWrapper>
    );
};

export default TemplatePage;