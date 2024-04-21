import React from 'react';
import { Article, Link, LinkWrapper, SVG, Span, Title, Wave, Wrapper } from './styledContact';
import wave from '../../../common/Images/contactWave.svg';
import contact from '../../../common/Images/contact.svg';

export const Contact = () => {
    return (
        <Wrapper id="contact">
            <Wave src={wave} />
            <Article>
                <SVG src={contact} />
                <SVG src={contact} bottom />

                <Title> Zainteresowaliśmy cię?</Title>
                <LinkWrapper >
                    <Link href='https://www.youtube.com/'>Napisz do nas</Link> <Span>Lub</Span> <Link> Skontakuj się z nami telefonicznie</Link>
                </LinkWrapper>

            </Article>
        </Wrapper >
    );
};
