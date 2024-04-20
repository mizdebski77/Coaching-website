import { styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 40px 10px;
`;

export const TextWrapper = styled.div`
    display: grid;
    justify-content: center;
`;

export const Title = styled.h1`
    font-weight: normal;
    font-size: 80px;
    text-align: center;
`;

export const TitleSpan = styled.span`
    color: ${({ theme }) => theme.color.fontColor};
`;

export const TitleParagraph = styled.p`
    margin: 0;
`;

export const TitleLink = styled.a`
    background: ${({ theme }) => theme.color.fontColor};
    text-align: center;
    padding: 16px 32px;
    font-size: 24px;
    color: white;
    border-radius: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
        transform: scale(1.02);
    };

    &:active {
        opacity: 0.6;
    }
`;

export const ImageWrapper = styled.div`
`;

export const Image = styled.img`
    margin: 0 auto;
`;