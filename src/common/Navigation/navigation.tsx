import React, { useState } from 'react';
import { Container, LinksWrapper, Logo, LogoSpan, MobileLinksWrapper, MobileNavbar, MobileNavbarWrapper, NavLink, Wrapper } from './styledNavigation';
import { LinksData, MobileLinksWrapperAnimation, mobileNavAnimation } from '../../core/arrays';
import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';

export const Navigation = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);

    const toggleMobileNavbar = () => {
        setMobileNavbar(!mobileNavbar);
    };


    return (
        <Wrapper>
            <Container>
                <Logo to="home"
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={1500}>
                    <LogoSpan>Optimize</LogoSpan> Performence
                </Logo>

                <LinksWrapper>
                    {LinksData.map((link, index) => (
                        <NavLink
                            key={index}
                            offset={link.offset}
                            spy={true}
                            to={link.to}
                            smooth={true}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </LinksWrapper>

                <MobileNavbar onClick={toggleMobileNavbar}>
                    <Hamburger color='#F39A13' size={24} />
                </MobileNavbar>
            </Container>

            <AnimatePresence>

                {mobileNavbar && (

                    <MobileNavbarWrapper
                        as={motion.div}
                        initial="hidden"
                        animate={mobileNavbar ? "visible" : "hidden"}
                        exit="hidden"
                        variants={mobileNavAnimation}
                    >

                        <MobileLinksWrapper
                            as={motion.div}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={MobileLinksWrapperAnimation}
                        >
                            {LinksData.map((link, index) => (
                                <NavLink
                                    key={index}
                                    spy={true}
                                    to={link.to}
                                    smooth={true}
                                >
                                    {link.text}
                                </NavLink>
                            ))}
                        </MobileLinksWrapper>
                    </MobileNavbarWrapper>)}
            </AnimatePresence>
        </Wrapper>
    );
};

