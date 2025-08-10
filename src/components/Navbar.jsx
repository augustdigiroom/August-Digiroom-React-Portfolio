 import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from '@emotion/styled';
import { useTheme, useMediaQuery } from '@mui/material';

const Header = styled.header`
  background-color: ${({ theme }) => theme.palette.mode === 'dark' ? '#1a1a1a' : '#fff'};
  color: ${({ theme }) => theme.palette.mode === 'dark' ? '#f3f4f6' : '#1f2937'};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6366f1;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    align-items: flex-start;
    ${({ isOpen }) => !isOpen && `display: none;`}
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.mode === 'dark' ? '#e5e7eb' : '#374151'};

  &:hover {
    color: #6366f1;
  }

  &.active {
    color: #4338ca;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <Header theme={theme}>
      <Nav>
        <Logo to="/">August Digiroom</Logo>

        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          {isMobile && (isOpen ? <FiX size={24} /> : <FiMenu size={24} />)}
        </MobileToggle>

        <NavList isOpen={isOpen}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <StyledNavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setIsOpen(false)}
                theme={theme}
              >
                {link.name}
              </StyledNavLink>
            </li>
          ))}
        </NavList>
      </Nav>
    </Header>
  );
}

