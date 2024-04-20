import { styled } from "styled-components";

export const Wrapper = styled.section`
    margin-top: -120px;
    display: grid;
`;

export const Wave = styled.img`

`;

export const Article = styled.article`
    background: ${({ theme }) => theme.color.secondColor};
`;

export const Title = styled.h2`
    font-size: 54px;
    font-weight: normal;
    text-align: center;
    color: ${({theme}) => theme.color.fontColor};
`;