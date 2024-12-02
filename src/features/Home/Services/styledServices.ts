import { css, styled } from "styled-components";

export const Wrapper = styled.section`
    max-width: 1500px;
    margin:  -120px auto;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin:  0 auto;
    };
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

        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
            display: none;
        };
    `};
`;


export const Title = styled.h3`
    font-size: 62px;
    letter-spacing: 4px;
    text-align: center;
    color: ${({ theme }) => theme.color.fontColor};
    margin: 0 0 32px 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
    };
`;

export const ListWrapper = styled.div`
    max-width: 1200px;
    display: grid;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    gap: 20px;
`;

export const ListItemWrapper = styled.div`
    padding: 20px;
    background: white;
    color:  ${({ theme }) => theme.color.fontColor};
    border: 1px solid  ${({ theme }) => theme.color.fontColor};
    display: grid;
    gap: 20px;
    border-radius: 12px;
`;

export const ExpandWrapper = styled.div`
    background: white;
    font-size: 20px;
    margin: 0;
    text-align: justify;
    word-spacing: -2px;
    border-radius: 12px;
    color: black;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    };
`;

export const ExpandContent = styled.p`

`;

export const UList = styled.ul`
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding-left: 20px;
    };
`;

export const OList = styled.ul`
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    padding-left: 20px;
    };
`;

export const ExpandSpan = styled.p`
    color: ${({ theme }) => theme.color.fontColor};
`;

export const ExpandButton = styled.button`
    background: ${({ theme }) => theme.color.fontColor};
    text-align: center;
    padding: 10px 20px;
    font-size: 18px;
    color: white;
    border-radius: 10px;
    min-width: 140px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        opacity: 0.7;
    };

    &:active {
        opacity: 0.6;
    };
`;

export const ListItem = styled.div`
    font-size: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: start;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 18px;
        gap: 12px;
        flex-direction: column;
        text-align: center;
    };
`;

