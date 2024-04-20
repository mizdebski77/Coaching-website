import { styled } from "styled-components";

export const Wrapper = styled.section`
    margin-top: -140px;
    display: grid;
`;

export const Article = styled.article`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h4`
    font-size: 62px;
    letter-spacing: 4px;
    font-weight: lighter;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0;
`;

export const Wave = styled.img`

`;

export const LinkWrapper = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;
    align-items: center;
`;

export const Span = styled.span`
    font-size: 48px;
    letter-spacing: 4px;
    font-weight: lighter;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
`;

export const Link = styled.a`
    background: ${({ theme }) => theme.color.fontColor};
    color: white;
    font-size: 24px;
    padding: 16px 80px;
    text-decoration: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;

