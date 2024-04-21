import { css, styled } from "styled-components";

export const Wrapper = styled.section`
    margin-top: -280px;
    display: grid;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        margin-top: -40px;
    };
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

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        left: 0px;
        top: 0px;
    };

    ${({ bottom }) => bottom && css`
        top: auto;
        bottom: -180px;
        right: 20px;
        opacity: 0.12;
        left: auto;
        right: 20px;

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            right: 120px;
        };
    `};

    ${({ top }) => top && css`
        top: 40px;
        left: auto;
        right: -200px;
        opacity: 0.2;

        @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
            right: 10px;
        };

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            display: none;
        };
    `};

    ${({ bottomLeft }) => bottomLeft && css`
        top: auto;
        bottom: -20px;
        opacity: 0.2;
        right: -120px;

        @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
            display: none;
        };
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        max-width:120px;
    };
`;

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    gap: 40px;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 10px;
    };
`;

export const Title = styled.h2`
    font-size: 68px;
    letter-spacing: 4px;
    font-weight: medium;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const AvatarWrapper = styled.div <{ reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    padding: 20px 40px;
    justify-content: center;
    gap: 80px;

    ${({ reverse }) => reverse && css`
        grid-template-columns: 1.5fr 1fr;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            display: flex;
            flex-direction: column-reverse;
        };
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns:1fr;
        padding: 20px;
        gap:20px;
    };
`;

export const AvatarTitle = styled.span`
    font-size: 40px;
    margin: 0 auto;
    color: ${({ theme }) => theme.color.fontSecond};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const Avatar = styled.img`
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    z-index: 9;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 140px;
    };
`;

export const AvatarTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 12px;
    };
`;

export const AvatarText = styled.p`
    font-size: 24px;
    text-align: justify;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;