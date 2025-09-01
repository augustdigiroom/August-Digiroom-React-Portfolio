import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import styled from '@emotion/styled';
import { useTheme, useMediaQuery } from '@mui/material';
import Container from './Container';

/* -------------------------
   Styled components
   ------------------------- */

const Header = styled.header`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff'};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center; /* ✅ vertical center for all children */
  padding: 0.75rem 1rem;
`;

/* Logo (left) */
const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};
  text-decoration: none;
`;

/* Center section for theme toggle */
const CenterSection = styled.div`
  display: flex;
  align-items: center;
`;

/* Theme toggle button */
const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};
  border-radius: 9999px;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#000000' : '#ffffff'};
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

/* Right side group (nav links + hamburger) */
const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* Nav list styling */
const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  /* Mobile dropdown */
  @media (max-width: 768px) {
    position: absolute;
    top: 64px; /* below header */
    right: 1rem;
    background: ${({ theme }) =>
      theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff'};
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    width: calc(100% - 2rem);
    max-width: 320px;
    z-index: 60;

    /* hide when closed */
    ${({ isOpen }) => !isOpen && `display: none;`}
  }
`;

/* Nav link style */
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#ffffff' : '#000000'};

  &:hover {
    color: #6366f1;
  }

  &.active {
    font-weight: 600;
  }
`;

/* Mobile hamburger button */
const MobileToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* -------------------------
   Component
   ------------------------- */

export default function Navbar({ toggleTheme, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  // icon color: white in dark mode, black otherwise
  const iconColor = theme?.palette?.mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <Header theme={theme}>
      <Nav>
        {/* Logo (left) */}
        <Logo to="/" theme={theme}>
          August Digiroom
        </Logo>

        {/* Theme Toggle (center) */}
        <CenterSection>
          <ThemeToggle onClick={toggleTheme} theme={theme}>
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </ThemeToggle>
        </CenterSection>

        {/* Right side: nav links (desktop) and hamburger (mobile) */}
        <RightControls>
          {/* Desktop Nav Links */}
          <NavList isOpen={isOpen} theme={theme}>
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

          {/* Hamburger */}
          <MobileToggle
            onClick={() => setIsOpen((s) => !s)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            title="Menu"
          >
            {isMobile ? (isOpen ? <FiX size={24} color={iconColor} /> : <FiMenu size={24} color={iconColor} />) : null}
          </MobileToggle>
        </RightControls>
      </Nav>
    </Header>
  );
}