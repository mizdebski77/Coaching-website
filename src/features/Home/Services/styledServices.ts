import { css, styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin:  -120px auto;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin:  0 auto;
    };
`;

export const SVG = styled.img <{ bottom?: boolean, top?: boolean }>`
    position: absolute;
    top: 0px;
    max-width: 100px;
    opacity: 0.3;

    ${({ bottom }) => bottom && css`
        bottom: -120px;
        right: 80px;
        top: auto;
        max-width: 156px;
        opacity: 0.7;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            display: none;
        };
    `};
`;


export const Title = styled.h3`
    font-size: 62px;
    letter-spacing: 4px;
    font-weight: medium;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const Container = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-evenly;
    padding: 80px 40px;
    gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        gap: 20px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        flex-wrap: wrap;
        gap: 60px;
        padding: 20px 40px;
    }; 
`;

export const TileWrapper = styled.div`
    display: block;
`;

export const Tile = styled.div`
    background: ${({ theme }) => theme.color.fontColor};
    padding: 40px 28px;
    border: 3px solid white;
    border-radius: 20px 20px 0 0;
    box-shadow: 10px 10px 4px 10px ${({ theme }) => theme.color.secondColor};
    display: grid;
    justify-content: center;
`;

export const TileTitle = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.mainColor};
    margin: 0 auto;
    letter-spacing: 2px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const TileText = styled.p`
    font-size: 24px;
    text-align: justify;
    color: black;
    margin-top: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const TilePriceWrapper = styled.span`
    background: ${({ theme }) => theme.color.mainColor};
    border-radius: 50% 0;
    /* width: 120px;
    height: 120px; */
    margin: 0 auto;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    align-self: self-start;
    margin-top: -52px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 80px;
        height: 80px;
    };
`;

export const TilePrice = styled.span`
    font-size: 24px;
    color: black;
    font-weight: medium;
    letter-spacing: 1px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;
