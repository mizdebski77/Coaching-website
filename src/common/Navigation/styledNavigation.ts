import { styled } from "styled-components";
import { Link } from "react-scroll";

export const Wrapper = styled.nav`
  position: sticky;
  z-index: 10; 
  top: 0;
`;

export const LogoImg = styled.img`
    max-width: 64px;
    margin: auto;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      max-width: 32px;
    };
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 64px;
  top:0;
  background: ${({ theme }) => theme.color.mainColor};
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    padding: 12px 24px;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    padding: 12px 20px;
  };
`;

export const Logo = styled(Link)`
    color: black;
    font-size: 32px;
    cursor: pointer;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 20px;
    };
`;

export const LogoSpan = styled.span`
  color: ${({ theme }) => theme.color.fontColor};

`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.secondBreakPoint}px){
    gap: 24px;
  };
`;

export const NavLink = styled(Link)`
    color: black;
    cursor: pointer;
    transition: 0.5s;
    font-size: 20px;
  

    &:hover {
        transform: translateY(-5px);
        color: ${({ theme }) => theme.color.fontColor};
        
        @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
          transform: none;
          color: white;
        }
    };


    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      text-align: center;
      color: white;
      font-weight: normal;
      padding: 4px;
      font-size: 16px;
      width: 60%;
      margin: 0 auto;
      border-bottom: 1px solid white;
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
    background: rgba(243, 154, 19, 0.97);
    position: fixed;
    width: 100%;
    z-index: -1;
    min-height: 200px;

    @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        display: none;
    };
`;


export const MobileLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 24px;
`;




