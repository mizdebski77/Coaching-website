import React from 'react';
import { Image, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
import image from '../../../common/Images/header.svg';

export const Header = () => {
    return (
        <Wrapper id="home">
            <TextWrapper>
                <Title>
                    <TitleSpan>
                        Jakieś hasło
                    </TitleSpan>
                    <TitleParagraph>
                        dłuższe bądź krótsze
                    </TitleParagraph>
                </Title>
                <TitleLink href='http://localhost:3000/'>
                    Napisz do nas!
                </TitleLink>
            </TextWrapper>

            <Image src={image} alt='Header image' />
        </Wrapper>
    );
};

