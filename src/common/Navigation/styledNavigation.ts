import { styled } from "styled-components";
import { Link } from "react-scroll";

export const Wrapper = styled.nav`

`;

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled(Link)`
    color: black;
    font-size: 32px;
    cursor: pointer;
    font-weight: normal;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 20px;
    };
`;

export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.color.fontColor};
`;

export const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 50px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  };
`;

const activeClassName = "active";

export const NavLink = styled(Link)`
    color: black;
    cursor: pointer;
    transition: 0.5s;
    font-size: 20px;

    &:hover {
        transform: translateY(-5px);
        color: ${({ theme }) => theme.color.fontColor};
    };

    &.${activeClassName} {
        color: ${({ theme }) => theme.color.fontColor};
        border-bottom: 1px solid ${({ theme }) => theme.color.fontColor};
    };

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      text-align: center;
      padding: 4px;
    };
`;

export const MobileNavbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;

    @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: none;
    };
`;

export const MobileNavbarWrapper = styled.div`
    background: ${({ theme }) => theme.color.fontColor};
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 73px;

`;

export const MobileLinksWrapper = styled.div`
    display: grid;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;




