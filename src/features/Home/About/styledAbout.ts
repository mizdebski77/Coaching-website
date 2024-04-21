import { css, styled } from "styled-components";

export const Wrapper = styled.section`
    margin-top: -280px;
    display: grid;
`;

export const Wave = styled.img`

`;

export const Article = styled.article`
    background: ${({ theme }) => theme.color.secondColor};

`;

export const Circle = styled.img <{ bottom?: boolean, top?: boolean, bottomLeft?: boolean }>`
    position: absolute;
    top: -40px;
    left: -140px;
    opacity: 0.3;

    ${({ bottom }) => bottom && css`
        top: auto;
        bottom: -180px;
        right: 20px;
        opacity: 0.7;
        left: auto;
        right: -120px;
    `};

    ${({ top }) => top && css`
        top: 40px;
        left: auto;
        right: -200px;
        opacity: 0.2;
    `};

    ${({ bottomLeft }) => bottomLeft && css`
        top: auto;
        bottom: -20px;
        opacity: 0.2;
        right: -120px;
    `};
`;

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    gap: 40px;
    position: relative;
`;

export const Title = styled.h2`
    font-size: 62px;
    letter-spacing: 4px;
    font-weight: medium;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0;
`;

export const AvatarWrapper = styled.div <{ reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    padding: 20px 40px;
    justify-content: center;
    gap: 80px;

    ${({ reverse }) => reverse && css`
        grid-template-columns: 1.5fr 1fr;
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns:1fr;
    };
`;

export const AvatarTitle = styled.span`
    font-size: 40px;
    margin: 0 auto;
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const Avatar = styled.img`
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    z-index: 10;
`;

export const AvatarTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

export const AvatarText = styled.p`
    font-size: 24px;
    text-align: justify;
    margin: 0;
`;