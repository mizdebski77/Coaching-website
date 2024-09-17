import React from 'react';
import { Container, SVG, Tile, TilePrice, TilePriceWrapper, TileSpan, TileText, TileTitle, TileWrapper, Title, Wrapper } from './styledServices';
import circles from '../../../common/Images/circles-oval-svgrepo-com.svg';
import AnimatedElement from '../AnimatedElements';

export const Services = () => {


    return (
        <Wrapper id="services">
            <AnimatedElement left>
                <Title>
                    Nasze usługi
                </Title>
            </AnimatedElement>
            <SVG src={circles} />
            <SVG src={circles} bottom />

            <AnimatedElement bottom>
                <Container>
                    <TileWrapper>
                        <Tile>
                            <TileTitle>Szkolenie biznesowe
                                <TileSpan>Oferujemy możliwość przeprowadzenia szkolenia wewnątrz Twojej firmy. </TileSpan>
                            </TileTitle>
                            <TileText>
                                Dlaczego warto nas wybrać?
                                <ul>
                                    <li>indywidualny dobór tematyki szkolenia z wyszczególnieniem ważnych dla Ciebie aspektów</li>
                                    <li>Stawiamy na rozwój Twojego zespołu - każdy z uczestników otrzyma certyfikat ukończenia szkolenia</li>
                                    <li>Jesteśmy praktykami, którzy zaszczepią w Twoim zespole pasję do tego co robią</li>
                                    <li>Jesteśmy elastyczni co do miejsca i czasu szkolenia</li>
                                </ul>
                            </TileText>
                        </Tile>
                        <TilePriceWrapper>
                            <TilePrice>Wycena indywidualna - skontaktuj się z nami</TilePrice>
                        </TilePriceWrapper>
                    </TileWrapper>

                    <TileWrapper>
                        <Tile>
                            <TileTitle>Szkolenie indywidualne
                                <TileSpan>Oferujemy możliwość przeprowadzenia szkolenia wewnątrz Twojej firmy. </TileSpan>
                            </TileTitle>
                            <TileText>
                                Szkolenie przede wszystkim adresowane do Liderów, Managerów, Specjalistów, Kierowników i innych osób chcących rozwijać swoje umiejętności z zakresu zarządzania zespołem i projektami. Każde szkolenie kończy się wręczeniem certyfikatów.
                                {/* <ul> <p style={{ fontWeight: 'bold', margin: '10px 0 ', textAlign: 'center' }}>Dostępne miejsca i terminy</p>
                                    <li>indywidualny dobór tematyki szkolenia z wyszczególnieniem ważnych dla Ciebie aspektów</li>
                                    <li>Stawiamy na rozwój Twojego zespołu - każdy z uczestników otrzyma certyfikat ukończenia szkolenia</li>
                                </ul> */}
                            </TileText>

                        </Tile>
                        <TilePriceWrapper>
                            <TilePrice>990 zł</TilePrice>
                        </TilePriceWrapper>
                    </TileWrapper>
                </Container>
            </AnimatedElement>
        </Wrapper>
    );
};

