import React from 'react';
import { Article, Avatar, AvatarText, AvatarTextWrapper, AvatarTitle, AvatarWrapper, Circle, Container, List, Title, Topics, Wave, Wrapper } from './styledAbout';
import upWave from '../../../common/Images/upWave.svg';
import bottomWave from '../../../common/Images/bottomWave.svg';
import circle from '../../../common/Images/leftArrow.svg';
import arrow from '../../../common/Images/rightArrow.svg';
import lefArrow from '../../../common/Images/SemiCirclesOrange.svg';
import AnimatedElement from '../AnimatedElements';
import artur from '../../../common/Images/Artur.png';

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
                            <Avatar src={artur} />
                        </AnimatedElement>

                        <AvatarTextWrapper >
                            <AnimatedElement left>
                                <AvatarTitle>
                                    Artur Surmik
                                </AvatarTitle>
                            </AnimatedElement>

                            <AnimatedElement bottom>
                                <AvatarText>
                                    Kierownik zmiany w Amazon Fulfilment Poland oraz doktorant Szkoły Doktorskiej na kierunkiem Ekonomia i Finanse. Mimo młodego wieku może pochwalić się kilkuletnim doświadczeniem w zarządzaniu małymi i dużymi zespołami. W swojej karierze mocno stawia na optymalizację procesu poprzez standaryzację i eliminację marnotrawstw.

                                    <p style={{ fontStyle: 'italic' }}>
                                        „Swoją przygodę ze szkoleniami i prowadzeniem masowych wydarzeń zacząłem w czasie studenckim, kiedy dzięki ówczesnej pracy w gastronomii miałem okazję prowadzić kilkadziesiąt wydarzeń tematycznych, wewnętrznych szkoleń dla personelu oraz degustacji win z udziałem winiarzy z różnych zakątków Europy.”
                                    </p>
                                </AvatarText>
                            </AnimatedElement>
                        </AvatarTextWrapper>


                    </AvatarWrapper>
                    <Topics>Zakres Tematyczny:</Topics>
                    <List>
                        <li>Optymalizacja procesu w myśl zasady Lean Six Sigma</li>
                        <li>Feedback - skuteczne udzielanie i przyjmowanie informacji zwrotnej</li>
                        <li>Difficult conversations - prowadzenie trudnych rozmów z pracownikiem</li>
                        <li>Negocjacje i strategie przywódcze, czyli umiejętne zarządzanie zespołem</li>
                        <li>Identyfikacja celu i realizacja wyznaczonych KPI</li>
                    </List>

                    {/* <AvatarWrapper reverse >
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
                    </AvatarWrapper> */}
                </Container>
            </Article>
            <Wave src={bottomWave} />
        </Wrapper >
    );
};

