import React from 'react';
import { Article, Title, Wave, Wrapper } from './styledAbout';
import upWave from '../../../common/Images/upWave.svg';

export const About = () => {
    return (
        <Wrapper>
            <Wave src={upWave} />
            <Article>
                <Title> O Nas</Title>
            </Article>
        </Wrapper>
    );
};

