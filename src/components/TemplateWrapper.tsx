import React from 'react';
import clsx from 'clsx'

import styles from './TemplateWrapper.module.scss';
import {robotoFont} from '../fonts/Roboto';

interface TemplateWrapperProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
}

const TemplateWrapper: React.FC<TemplateWrapperProps> = ({ children, width = 800, height = 600 }) => {
    return (
        <div
            className={clsx(styles.wrapper, robotoFont.className)}
            style={{width: `${width}px`, height: `${height}px`, overflow: 'auto'}}
        >
            {children}
        </div>
    );
};

export default TemplateWrapper;