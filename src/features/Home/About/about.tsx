import React from 'react';
import { Article, Avatar, AvatarText, AvatarTextWrapper, AvatarTitle, AvatarWrapper, Circle, Container, Title, Wave, Wrapper } from './styledAbout';
import upWave from '../../../common/Images/upWave.svg';
import avatar from '../../../common/Images/avatar.svg';
import bottomWave from '../../../common/Images/bottomWave.svg';
import circle from '../../../common/Images/leftArrow.svg';
import arrow from '../../../common/Images/rightArrow.svg';
import lefArrow from '../../../common/Images/SemiCirclesOrange.svg';

export const About = () => {
    return (
        <Wrapper>
            <Wave src={upWave} />
            <Article>


                <Container>
                    <Title> O Nas</Title>
                    <Circle src={lefArrow} />
                    <Circle src={lefArrow} bottom />
                    <Circle src={arrow} top />
                    <Circle src={circle} bottomLeft />

                    <AvatarWrapper>
                        <Avatar src={avatar} />

                        <AvatarTextWrapper>
                            <AvatarTitle>Artur Surmik</AvatarTitle>
                            <AvatarText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                            </AvatarText>
                        </AvatarTextWrapper>

                    </AvatarWrapper>

                    <AvatarWrapper reverse >
                        <AvatarTextWrapper>
                            <AvatarTitle>Artur Surmik</AvatarTitle>
                            <AvatarText>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                            </AvatarText>
                        </AvatarTextWrapper>

                        <Avatar src={avatar} />
                    </AvatarWrapper>
                </Container>
            </Article>
            <Wave src={bottomWave} />
        </Wrapper>
    );
};

