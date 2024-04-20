import React from 'react';
import { Container, Tile, TilePrice, TilePriceWrapper, TileText, TileTitle, TileWrapper, Title, Wrapper } from './styledServices';
import { ServicesData } from '../../../core/arrays';

export const Services = () => {
    return (
        <Wrapper>
            <Title>Nasze Usługi</Title>

            <Container>
                {ServicesData.map((service) => (
                    <TileWrapper key={service.title}>
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
        </Wrapper>
    );
};

