import { css, styled } from "styled-components";

export const AnimatedElementWrapper = styled.div <{ left?: boolean, bottom?: boolean, right?: boolean }>`
    margin: 0 auto;
    opacity: 0;
    transform: translateX(30%);
    transition: opacity 1s, transform 1s;
    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: translateY(10%);
    };

    ${({ left }) => left && css`
        margin: 0 auto;
        opacity: 0;
        transform: translateX(-30%);
        transition: opacity 1s, transform 1s;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        };
    `};

    ${({ bottom }) => bottom && css`
        margin: 0 auto;
        opacity: 0;
        transform: translateY(20%);
        transition: opacity 1s, transform 1s;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        };
    `};

    ${({ right }) => right && css`
        margin: 0 auto;
        opacity: 0;
        transform: translateX(30%);
        transition: opacity 1s, transform 1s;

        &.visible {
            opacity: 1;
            transform: translateY(0);
        };
    

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        transform: translateY(2%);
    };
    `};
`;