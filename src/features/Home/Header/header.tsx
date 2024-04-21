import React from 'react';
import { Image, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
import image from '../../../common/Images/header.svg';
import AnimatedElement from '../AnimatedElements';

export const Header = () => {

    return (
        <Wrapper id="home"  >
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

