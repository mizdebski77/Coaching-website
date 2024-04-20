import React from 'react';
import { Article, Avatar, AvatarText, AvatarTextWrapper, AvatarTitle, AvatarWrapper, Container, Title, Wave, Wrapper } from './styledAbout';
import upWave from '../../../common/Images/upWave.svg';
import avatar from '../../../common/Images/avatar.svg';

export const About = () => {
    return (
        <Wrapper>
            <Wave src={upWave} />
            <Article>
                <Container>
                    <Title> O Nas</Title>

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
        </Wrapper>
    );
};

