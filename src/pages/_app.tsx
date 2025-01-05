import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';

import '../devHello'


const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
