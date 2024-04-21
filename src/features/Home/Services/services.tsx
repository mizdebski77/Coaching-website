import React from 'react';
import { Container, SVG, Tile, TilePrice, TilePriceWrapper, TileText, TileTitle, TileWrapper, Title, Wrapper } from './styledServices';
import { ServicesData } from '../../../core/arrays';
import circles from '../../../common/Images/circles-oval-svgrepo-com.svg';

export const Services = () => {
    return (
        <Wrapper>
            <Title>Nasze Usługi</Title>
            {/* <SVG src={circles} />
            <SVG src={circles} bottom /> */}

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

