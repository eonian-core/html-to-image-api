import React from 'react';
import styles from './TemplateOne.module.scss';

interface TemplateOneProps extends TemplateProps {
    parameters: {
        title?: string
    };
}

const TemplateOne: React.FC<TemplateOneProps> = ({ parameters, viewport }) => {
    return (
        <div
            className={styles.container}
            style={{ width: viewport.width, height: viewport.height }}
        >
            <h2>Template One</h2>
            <p>Parameters: {parameters?.title}</p>
            <p>Viewport: {viewport.width} x {viewport.height}</p> {/* Render properties individually */}
        </div>
    );
};

export default TemplateOne;