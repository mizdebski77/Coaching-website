import { css, styled } from "styled-components";

export const Wrapper = styled.section`
    margin-top: -140px;
    display: grid;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        margin:  0 auto;
    };
`;

export const SVG = styled.img <{ bottom?: boolean, top?: boolean }>`
    position: absolute;
    top: 40px;
    left: 80px;
    max-width: 100px;
    opacity: 0.3;

    ${({ bottom }) => bottom && css`
        bottom: 80px;
        right: 90px;
        left: auto;
        top: auto;
        max-width: 80px;
        opacity: 0.2;

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            display: none;
        };
    `};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        max-width: 40px;
        top:-10px;
        left:20px;
        opacity:0.6;
    };
`;


export const Article = styled.article`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 120px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 56px 20px;
    };
`;

export const Title = styled.h4`
    font-size: 62px;
    letter-spacing: 4px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const Wave = styled.img`

`;

export const LinkWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: grid;
        gap: 20px;
        margin-top: 20px;
    };
`;

export const Span = styled.span`
    font-size: 48px;
    letter-spacing: 4px;
    font-weight: normal;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
       font-size: 24px;
    };
`;

export const Link = styled.a`
    background: ${({ theme }) => theme.color.fontColor};
    text-align: center;
    padding: 14px 40px;
    font-size: 24px;
    color: white;
    border-radius: 10px;
    margin: 0 auto;
    text-decoration: none;
    z-index: 99;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.7;
    };

    &:active {
        opacity: 0.6;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        padding: 8px 20px;
    };
`;

