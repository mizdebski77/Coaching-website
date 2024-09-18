import React from 'react';
import { Article, Link, LinkWrapper, SVG, Span, Title, Wave, Wrapper } from './styledContact';
import wave from '../../../common/Images/contactWave.svg';
import contact from '../../../common/Images/contact.svg';
import AnimatedElement from '../AnimatedElements';

export const Contact = () => {


    return (
        <Wrapper id="contact">
            <Wave src={wave} />
            <Article>
                <SVG src={contact} />
                <SVG src={contact} bottom />

                <AnimatedElement bottom>
                    <Title> Zainteresowaliśmy cię?</Title>
                </AnimatedElement>
                <LinkWrapper >
                    <AnimatedElement left>
                        <Link href='mailto:artur.surmik@optimizeperformance.pl'>Napisz do nas</Link>
                    </AnimatedElement>

                    <AnimatedElement bottom><Span>Lub</Span></AnimatedElement>


                    <AnimatedElement right>
                        <Link href='tel:530932229'> Skontakuj się z nami telefonicznie</Link>
                    </AnimatedElement>

                </LinkWrapper>

            </Article>
        </Wrapper >
    );
};
