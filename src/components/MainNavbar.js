import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  SetBackground,
  SetNavbarBrandTheme,
  SetNavbarLinkThemes,
  SetOverallContentThemes,
  SetFooterTheme,
  SetLogoThemes,
  SetLoadingTheme,
} from '../tools/ThemeSwitches';

const MainNavbar = () => {
  const [runOnce, setRun] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTheme, setThemeModeText] = useState('');

  if (!runOnce) {
    setRun(true);

    if (localStorage.getItem('Dark Mode') === 'true') {
      setDarkMode(true);
      setThemeModeText('Dark Mode');
    } else {
      setDarkMode(false);
      setThemeModeText('Light Mode');
    }
    require(`../includes/css/style${darkMode ? `.dark` : ``}.css`);
  }

  const setNavbarBrand = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('Dark Mode', !darkMode);
    setThemeModeText(darkMode ? 'Dark Mode ' : 'Light Mode');
  };

  useEffect(() => {
    require(`../includes/css/style${darkMode ? `.dark` : ``}.css`);
    SetBackground(darkMode);
    SetLoadingTheme(darkMode);
    SetNavbarBrandTheme(darkMode);
    SetNavbarLinkThemes(darkMode);
    SetOverallContentThemes(darkMode);
    SetLogoThemes(darkMode);
    SetFooterTheme(darkMode);
  }, [darkMode]);

  return (
    <div>
      <Navbar id='desktop-navbar' expand='lg' style={{ height: 100 }}>
        <NavbarBrand onClick={() => setNavbarBrand()}>
          <div id='navbar-site-logo'>
            <img alt='' rel='noopener noreferrer' />
          </div>
          <div className='text-center'>
            <font id='theme-mode-btn'>{currentTheme}</font>
          </div>
        </NavbarBrand>
        <Nav className='nav-res ml-auto' navbar>
          <NavItem
            id='n1-home'
            className={window.location.pathname === '/' ? 'active' : ''}
          >
            <NavLink href='/'>
              Home
              <hr id='n1' />
            </NavLink>
          </NavItem>
          <NavItem
            id='n2-works'
            className={window.location.pathname === '/works' ? 'active' : ''}
          >
            <NavLink href='/works'>
              Works
              <hr id='n2' />
            </NavLink>
          </NavItem>
          <NavItem
            id='n3-contact'
            className={window.location.pathname === '/contact' ? 'active' : ''}
          >
            <NavLink href='/contact'>
              Contact
              <hr id='n3' />
            </NavLink>
          </NavItem>
          <NavItem id='n4-scroll'>
            <NavLink className='d-none d-md-block'>
              Scroll!
              <hr id='n4' />
            </NavLink>
            <div>
              <div className='text-bubble-container'>
                <div className='text-bubble'>
                  It's a toggle since it uses ton of resources, somehow
                </div>
              </div>
            </div>
          </NavItem>
          {/* <NavItem id="n4-oldsite">
            <NavLink href="http://ferickandrew-laravel.herokuapp.com" className="d-none d-md-block">Go to Old Site<hr id="n4"/></NavLink>
            <NavLink href="http://ferickandrew-laravel.herokuapp.com" className="d-md-none">Old Site<hr id="n4"/></NavLink>
          </NavItem> */}
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
