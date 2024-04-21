import React from 'react';
import { Article, Avatar, AvatarText, AvatarTextWrapper, AvatarTitle, AvatarWrapper, Circle, Container, Title, Wave, Wrapper } from './styledAbout';
import upWave from '../../../common/Images/upWave.svg';
import avatar from '../../../common/Images/avatar.svg';
import bottomWave from '../../../common/Images/bottomWave.svg';
import circle from '../../../common/Images/leftArrow.svg';
import arrow from '../../../common/Images/rightArrow.svg';
import lefArrow from '../../../common/Images/SemiCirclesOrange.svg';
import { delay, motion } from 'framer-motion';
import useInViewAnimation from '../../../core/useInView';
import { rightVariant, variantButton, variantOpacity, variantTitle } from '../../../core/arrays';
import AnimatedElement from '../AnimatedElements';

export const About = () => {

    return (
        <Wrapper id="about" >
            <Wave src={upWave} />
            <Article>
                <Container>
                    <AnimatedElement bottom>
                        <Title>
                            O Nas
                        </Title>
                    </AnimatedElement>


                    <Circle src={lefArrow} />
                    <Circle src={lefArrow} bottom />
                    <Circle src={arrow} top />
                    <Circle src={circle} bottomLeft />

                    <AvatarWrapper>
                        <AnimatedElement left>
                            <Avatar src={avatar} />
                        </AnimatedElement>

                        <AvatarTextWrapper >
                            <AnimatedElement left>
                                <AvatarTitle>
                                    Artur Surmik
                                </AvatarTitle>
                            </AnimatedElement>

                            <AnimatedElement bottom>
                                <AvatarText>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                </AvatarText>
                            </AnimatedElement>

                        </AvatarTextWrapper>

                    </AvatarWrapper>

                    <AvatarWrapper reverse >
                        <AvatarTextWrapper >
                            <AnimatedElement left>
                                <AvatarTitle>
                                    Artur Surmik
                                </AvatarTitle>
                            </AnimatedElement>
                            <AnimatedElement bottom>
                                <AvatarText>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, mollitia at? Ad iusto deserunt odit aliquid libero iste culpa natus repellendus ea, quo, laudantium exercitationem eveniet dicta assumenda dolores. Eligendi.
                                </AvatarText>
                            </AnimatedElement>
                        </AvatarTextWrapper>

                        <AnimatedElement right>
                            <Avatar src={avatar} />
                        </AnimatedElement>
                    </AvatarWrapper>
                </Container>
            </Article>
            <Wave src={bottomWave} />
        </Wrapper >
    );
};

