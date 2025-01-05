import React from 'react';
import clsx from 'clsx'

import styles from './TemplateWrapper.module.scss';
import { robotoFont } from '../fonts/Roboto';

interface TemplateWrapperProps {
    children: React.ReactNode;
    viewport: { width: number; height: number };
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ children, viewport }) => {
    return (
        <div
            className={clsx(styles.wrapper, robotoFont.className)}
            style={{width: `${viewport.width}px`, height: `${viewport.height}px`, overflow: 'auto'}}
        >
            {children}
        </div>
    );
};

export default TemplateWrapper;
