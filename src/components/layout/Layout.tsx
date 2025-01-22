import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <HeaderContent>
          <Logo>미니당근</Logo>
          <Nav>
            <NavItem>홈</NavItem>
            <NavItem>동네생활</NavItem>
            <NavItem>내 근처</NavItem>
            <NavItem>채팅</NavItem>
            <NavItem>나의 당근</NavItem>
          </Nav>
        </HeaderContent>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <FooterContent>
          <p>© 2025 미니당근 - 당근마켓 클론 프로젝트</p>
        </FooterContent>
      </Footer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff6f0f;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.span`
  cursor: pointer;
  &:hover {
    color: #ff6f0f;
  }
`;

const Main = styled.main`
  flex: 1;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1rem;
`;

const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  color: #868e96;
`;

export default Layout;
