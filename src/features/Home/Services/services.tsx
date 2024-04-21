import React from 'react';
import { Container, SVG, Tile, TilePrice, TilePriceWrapper, TileText, TileTitle, TileWrapper, Title, Wrapper } from './styledServices';
import { ServicesData, variantOpacity } from '../../../core/arrays';
import circles from '../../../common/Images/circles-oval-svgrepo-com.svg';
import useInViewAnimation from '../../../core/useInView';
import { motion } from 'framer-motion';
import AnimatedElement from '../AnimatedElements';

export const Services = () => {

    const { animation, ref } = useInViewAnimation(0.2);

    return (
        <Wrapper id="services">
            <AnimatedElement bottom>
                <Title>
                    Nasze usługi
                </Title>
            </AnimatedElement>
            <SVG src={circles} />
            <SVG src={circles} bottom />

            <Container>
                {ServicesData.map((service, index) => (
                    <TileWrapper
                        ref={ref}
                        key={service.title}
                        as={motion.div}
                        variants={variantOpacity}
                        initial="hidden"
                        animate={animation}
                        transition={{
                            duration: 0.8, delay: index * 0.2, ease: 'linear', type: "tween",
                        }}
                    >
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

