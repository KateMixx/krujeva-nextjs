import { Link } from "react-scroll";

import React, { useState } from "react";
import PropTypes from "prop-types";
import style from './style.module.scss';
import clsx from "clsx";
import useWindowOnScroll from '../../public/hooks/useWindowOnScroll';
import useSmoothScrollTo from "../../public/hooks/useSmoothScrollTo";

import { Container, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';

interface IProps {
  brand: string,
  anchors: string[],
  menuText: string
}

function NavBar(props: IProps) {
  const { brand, anchors, menuText } = props;

  const handleScrollToTop = useSmoothScrollTo(0);
  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);


  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar
      className={shrink ? clsx(style.navbarRoot, style.navbarShrink) : style.navbarRoot}
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className={style.navbarBrand} onClick={handleBrandClick}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle className={style.navbarToggler} onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          {/* <Icon iconName="BarsIcon" /> */}
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-uppercase ml-auto">
            {anchors.map((anchor) => (
              <Nav.Item>
                <Link
                  className={style.navLink}
                  activeClass={style.navLinkActive}
                  to={anchor}
                  duration={0}
                  offset={-70}
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}>
                  {anchor}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;