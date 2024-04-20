import React from 'react';
import { Header } from './Header/header';
import { About } from './About/about';
import { Services } from './Services/services';
import { Contact } from './Contact/contact';

export const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Contact />
        </>
    );
};

