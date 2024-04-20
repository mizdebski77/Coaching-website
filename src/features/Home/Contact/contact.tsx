import React from 'react';
import { Title, Wave, Wrapper } from './styledContact';
import wave from '../../../common/Images/contactWave.svg';

export const Contact = () => {
    return (
        <Wrapper>
            <Wave src={wave} />
            <Title> Zainteresowaliśmy cię? </Title>
        </Wrapper >
    );
};
