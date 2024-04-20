import { css, styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin:  -120px auto;
    position: relative;
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
    `};

`;


export const Title = styled.h3`
    font-size: 62px;
    letter-spacing: 4px;
    font-weight: medium;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0;
`;

export const Container = styled.article`
    display: flex;
    justify-content: space-evenly;
    padding: 80px 40px;
    gap: 80px;
`;

export const TileWrapper = styled.div`
    display: block;
`;

export const Tile = styled.div`
    background: ${({ theme }) => theme.color.fontColor};
    padding: 40px 28px;
    border: 2px solid white;
    border-radius: 20px;
    box-shadow: 10px 10px 4px 10px ${({ theme }) => theme.color.secondColor};
    display: grid;
    justify-content: center;
`;

export const TileTitle = styled.span`
    font-size: 32px;
    color: ${({ theme }) => theme.color.mainColor};
    margin: 0 auto;
    letter-spacing: 2px;
`;

export const TileText = styled.p`
    font-size: 24px;
    text-align: justify;
    color: black;
    font-style: italic;
`;

export const TilePriceWrapper = styled.span`
    background: ${({ theme }) => theme.color.mainColor};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({ theme }) => theme.color.fontColor};
    align-self: self-start;
    margin-top: -52px;
`;

export const TilePrice = styled.span`
    font-size: 24px;
    color: black;
    font-weight: medium;
    letter-spacing: 1px;
`;
