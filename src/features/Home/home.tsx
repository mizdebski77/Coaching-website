import React from 'react';
import { Header } from './Header/header';
import { About } from './About/about';
import { Services } from './Services/services';

export const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Services />
        </>
    );
};

