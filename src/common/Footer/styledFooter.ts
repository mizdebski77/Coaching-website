import { Link } from "react-scroll";
import { styled } from "styled-components";

export const Wrapper = styled.footer`
    display: grid;
    gap: 48px;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        gap: 28px;
    };
`;

export const Container = styled.footer`
    display: grid;
    width: 100%;
    color: white;
    position: relative;
    background: ${({ theme }) => theme.color.fontColor};
    overflow: hidden;
    margin: 0 auto;
    padding: 40px;

    @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
        padding: 20px;
        min-height: 480px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        min-height: 440px;
    };
`;

export const Logo = styled(Link)`
    color: white;
    font-size: 44px;
    cursor: pointer;
    font-weight: normal;
    display: grid;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
        text-align: center;
    };
`;


export const LogoImg = styled.img`
    max-width: 120px;
    margin: auto;

    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      max-width: 80px;
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
    z-index: 2;
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
    z-index: 4;
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
        padding: 10px 20px 20px;
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


export const RealisationWrapper = styled.div`
    border-top: 2px solid white;
    padding-top: 40px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      width: 100%;
      padding: 20px;
    };
`;

export const Span = styled.p`
    font-size: 20px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 16px;
    };
`;

export const Name = styled.a`
    font-weight: 600;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

