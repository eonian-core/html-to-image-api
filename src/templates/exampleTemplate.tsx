import React from 'react';

interface ExampleTemplateProps {
    title: string;
}

const ExampleTemplate: React.FC<ExampleTemplateProps> = ({ title }) => (
    <div style={{ width: '100%', height: '100%', display: 'flex', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: '#333' }}>ttt {title}</h1>
    </div>
);

export default ExampleTemplate;
