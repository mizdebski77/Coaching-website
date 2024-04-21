import React from 'react';
import { Article, Link, LinkWrapper, SVG, Span, Title, Wave, Wrapper } from './styledContact';
import wave from '../../../common/Images/contactWave.svg';
import contact from '../../../common/Images/contact.svg';
import useInViewAnimation from '../../../core/useInView';
import { motion } from 'framer-motion';
import { variantButton, variantTitle } from '../../../core/arrays';

export const Contact = () => {

    const { animation: animationTitle, ref: refTitle } = useInViewAnimation(0.2);
    const { animation: animationButton, ref: refButton } = useInViewAnimation(0.2);

    return (
        <Wrapper id="contact">
            <Wave src={wave} />
            <Article>
                <SVG src={contact} />
                <SVG src={contact} bottom />

                <Title
                    as={motion.h4}
                    variants={variantTitle}
                    animate={animationTitle}
                    ref={refTitle}
                    initial="hidden"
                > Zainteresowaliśmy cię?</Title>
                <LinkWrapper >
                    <Link
                        as={motion.a}
                        animate={animationButton}
                        ref={refButton}
                        variants={variantButton}
                        initial="hidden"
                        href='https://www.youtube.com/'>Napisz do nas</Link>
                    <Span>Lub</Span>
                    <Link> Skontakuj się z nami telefonicznie</Link>
                </LinkWrapper>

            </Article>
        </Wrapper >
    );
};
