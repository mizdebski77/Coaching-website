import { Link } from "react-scroll";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    display: flex;
    width: 100%;
    align-items:center;
    justify-content: space-around;
    padding: 120px 20px;
    background: ${({ theme }) => theme.color.fontColor};
    color: white;
    position: relative;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        display: grid;
        gap: 56px;
        padding: 10px;
        justify-content: center;
        min-height: 480px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 40px 10px;
        min-height: 440px;
    };
`;

export const Logo = styled(Link)`
    color: white;
    font-size: 44px;
    cursor: pointer;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 28px;
        text-align: center;
    };
`;


export const LogoSpan = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const LinksWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 20px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 10px;
    };
`;

export const Circles = styled.img`
    position: absolute;
    right: 10px;
    bottom: 0;
`;

export const NavLink = styled(Link)`
    color: black;
    cursor: pointer;
    transition: 0.5s;
    font-size: 20px;
    text-align: center;

    &:hover {
        transform: scale(1.04);
    }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        text-align: center;
        font-weight: normal;
        padding: 4px;
        font-size: 16px;
    };
`;

export const Socials = styled.div`
    display: grid;
    justify-content: center;
    gap: 16px;
`;

export const FooterTitle = styled.span`
    font-size: 32px;
    text-align: center;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    };
`;

export const SVGLinks = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    width: 300px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        margin: 0;
    };
`;

export const SVGLink = styled.a`
    transition: 1s;
    width: 32px;
    transition: 0.3s;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }

`;


export const Image = styled.img`
    width: 48px;
    height: 48px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 40px;
        height: 40px;
    };
`;


