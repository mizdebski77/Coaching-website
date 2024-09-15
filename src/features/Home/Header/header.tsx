import React from 'react';
import { Image, Imagee, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
import image from '../../../common/Images/bg.jpg';
import AnimatedElement from '../AnimatedElements';
import cirlce from '../../../common/Images/circles-oval-svgrepo-com.svg'
export const Header = () => {

    return (
        <Wrapper id="home">
            <Imagee src={cirlce} />
            <TextWrapper>
                <AnimatedElement left>
                    <Title >
                        <TitleSpan>
                            Optimize Performance
                        </TitleSpan>
                        <TitleParagraph>
                            Experience it
                        </TitleParagraph>
                    </Title>
                </AnimatedElement>
                <span style={{ maxWidth: '720px', fontSize: '24px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam sed! Quod fugiat, quibusdam pariatur dolorem aspernatur, adipisci harum molestiae maxime temporibus sapiente ipsum dolor porro est itaque tempore dicta?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam sed! Quod fugiat, quibusdam pariatur dolorem aspernatur, adipisci harum molestiae maxime temporibus sapiente ipsum dolor porro est itaque tempore dicta?
                </span>


                <AnimatedElement right>
                    <div style={{marginTop: '32px'}}>
                        <TitleLink href='http://localhost:3000/' >
                            Napisz do nas!
                        </TitleLink>
                    </div>
                </AnimatedElement>


            </TextWrapper >

            <AnimatedElement right>
                <Image src={image} alt='Header image' />
            </AnimatedElement>

        </Wrapper >
    );
};

