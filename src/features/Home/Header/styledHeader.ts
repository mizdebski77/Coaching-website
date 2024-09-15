import { styled } from "styled-components";

export const Wrapper = styled.section`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 10px;
    min-height: 40vh;
    position: relative;
    min-height: 80vh;
    gap: 120px;
    max-width: 1400px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 20px;
    };
`;
export const Imagee = styled.img`
    max-width: 500px;
    position: absolute;
    left: -320px;
    opacity: 0.1;
    top: -120px;
    z-index: -1;
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
    position: absolute;
    max-width: 940px;
    top: -540px ;
    right: -700px;
    border: 40px solid orange;
    border-radius: 100%;
    z-index: -10;
    box-shadow: 0 0 40px;
    z-index: -10;
`;