import React from 'react';
import { Image, Imagee, Span, TextWrapper, Title, TitleLink, TitleParagraph, TitleSpan, Wrapper } from './styledHeader';
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
                <Span >

                Firma założona z pasji do dzielenia się wiedzą i doświadczeniem. Jesteśmy praktykami, którzy każdego dnia wykorzystują omawiane podczas szkoleń narzędzia, jak i umiejętności miękkie. Nauczymy Cię praktycznego spojrzenia na problem, stosowania adekwatnych narzędzi i ciągłego dążenia do doskonałości. Zarządzamy zespołami liczącymi ponad 1000 osób - podzielimy się z Tobą naszym doświadczeniem. Zapoznaj się z naszą ofertą!
                </Span>


                <AnimatedElement right>
                    <div style={{marginTop: '32px'}}>
                        <TitleLink href='mailto:artur.surmik@optimizeperformance.pl' >
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

