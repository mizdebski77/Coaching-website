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

export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    gap: 40px;
`;

export const Title = styled.h2`
    font-size: 54px;
    font-weight: normal;
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

`;

export const AvatarTitle = styled.span`
    font-size: 40px;
    margin: 0 auto;
`;

export const Avatar = styled.img`
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
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