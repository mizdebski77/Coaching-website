import React from 'react';
import { Container, SVG, Tile, TilePrice, TilePriceWrapper, TileText, TileTitle, TileWrapper, Title, Wrapper } from './styledServices';
import { ServicesData } from '../../../core/arrays';
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
                    {ServicesData.map((service) => (
                        <TileWrapper>
                            <Tile>
                                <TileTitle>{service.title}</TileTitle>
                                <TileText>{service.text}</TileText>
                            </Tile>
                            <TilePriceWrapper>
                                <TilePrice>{service.price}</TilePrice>
                            </TilePriceWrapper>
                        </TileWrapper>
                    ))}
                </Container>
            </AnimatedElement>
        </Wrapper>
    );
};

