import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 40px 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 20px;
    };
`;

export const TextWrapper = styled.div`
    display: grid;
    justify-content: center;
`;

export const Title = styled.h1`
    font-weight: normal;
    font-size: 54px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const TitleSpan = styled.span`
    color: ${({ theme }) => theme.color.fontColor};
    font-size: 80px;
`;

export const TitleParagraph = styled.p`
    margin: 0;
`;

export const TitleLink = styled.a`
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

export const ImageWrapper = styled.div`
`;

export const Image = styled.img`
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
`;