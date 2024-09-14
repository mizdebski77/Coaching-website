import React from 'react';
import { Circles, Container, FooterTitle, Image, LinksWrapper, Logo, LogoSpan, Name, NavLink, RealisationWrapper, SVGLink, SVGLinks, Socials, Span, Wrapper } from './styledFooter';
import { LinksData } from '../../core/arrays';
import phone from '../Images/phone.svg';
import mail from '../Images/mail.svg';
import facebook from '../Images/facebook.svg';
import circle from '../Images/SemiCircles.svg';

export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Logo to="home"
                    spy={true}
                    offset={-70}
                    smooth={true}
                    duration={1500}>
                    <LogoSpan>Logo</LogoSpan> Firmy
                </Logo>

                <LinksWrapper>
                    <FooterTitle> Menu:</FooterTitle>
                    <Circles src={circle} />

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
                </LinksWrapper>

                <Socials>
                    <FooterTitle> Skontaktuj się z nami:</FooterTitle>
                    <SVGLinks>
                        <SVGLink href='' target='blank'><Image src={facebook} /></SVGLink>
                        <SVGLink href="mailto: "><Image src={mail} /></SVGLink>
                        <SVGLink href="tel:"><Image src={phone} /></SVGLink>
                    </SVGLinks>
                </Socials>
            </Wrapper>
            <RealisationWrapper>
                <Span>Projekt oraz realizacja: <Name href='https://www.facebook.com/marcin.izdebski.7528/'>Marcin Izdebski</Name> </Span>
            </RealisationWrapper>
        </Container>

    );
};

