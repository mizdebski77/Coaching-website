import React from 'react';
import { Image, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
import image from '../../../common/Images/header.svg';
import useInViewAnimation from '../../../core/useInView';
import { motion } from 'framer-motion';
import { variantButton, variantOpacity, variantTitle } from '../../../core/arrays';

export const Header = () => {
    const { animation, ref } = useInViewAnimation(0.2);

    return (
        <Wrapper id="home" ref={ref} >
            <TextWrapper>
                <Title
                    as={motion.h1}
                    variants={variantTitle}
                    initial="hidden"
                    animate={animation}
                >
                    <TitleSpan>
                        Jakieś hasło
                    </TitleSpan>
                    <TitleParagraph>
                        dłuższe bądź krótsze
                    </TitleParagraph>
                </Title>


                <TitleLink href='http://localhost:3000/' >
                    Napisz do nas!
                </TitleLink>

            </TextWrapper>

            <Image src={image} alt='Header image' />
        </Wrapper>
    );
};

