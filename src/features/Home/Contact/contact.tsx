import React from 'react';
import { Article, Link, LinkWrapper, Span, Title, Wave, Wrapper } from './styledContact';
import wave from '../../../common/Images/contactWave.svg';

export const Contact = () => {
    return (
        <Wrapper>
            <Wave src={wave} />
            <Article>
                <Title> Zainteresowaliśmy cię?</Title>
                <LinkWrapper >
                    <Link href='https://www.youtube.com/'>Napisz do nas</Link> <Span>Lub</Span> <Link> Skontakuj się z nami telefonicznie</Link>
                </LinkWrapper>

            </Article>
        </Wrapper >
    );
};
