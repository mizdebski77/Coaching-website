import React from 'react';
import { Image, ImageWrapper, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
import image from '../../../common/Images/header.svg';

export const Header = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <Title>
                    <TitleSpan>
                        Jakieś hasło
                    </TitleSpan>
                    <TitleParagraph>
                        dłuższe bądź krótsze
                    </TitleParagraph>
                </Title>
                <TitleLink>
                    Napisz do nas!
                </TitleLink>
            </TextWrapper>

            <Image src={image} alt='Header image' />
        </Wrapper>
    );
};

