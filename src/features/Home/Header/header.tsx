import React from 'react';
import { Image, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
import image from '../../../common/Images/header.svg';
import useInViewAnimation from '../../../core/useInView';
import { motion } from 'framer-motion';
import { variantButton, variantOpacity, variantTitle } from '../../../core/arrays';
import AnimatedElement from '../AnimatedElements';

export const Header = () => {
    const { animation, ref } = useInViewAnimation(0.2);

    return (
        <Wrapper id="home" ref={ref} >
            <TextWrapper>
                <AnimatedElement left>
                    <Title >
                        <TitleSpan>
                            Jakieś hasło
                        </TitleSpan>
                        <TitleParagraph>
                            dłuższe bądź krótsze
                        </TitleParagraph>
                    </Title>
                </AnimatedElement>



                <AnimatedElement right>
                    <TitleLink href='http://localhost:3000/' >
                        Napisz do nas!
                    </TitleLink>
                </AnimatedElement>


            </TextWrapper >

            <AnimatedElement right>
                <Image src={image} alt='Header image' />
            </AnimatedElement>


        </Wrapper >
    );
};

