import React from 'react'
import { NavLink, NavWrapper, LogoComponent, LinkWrapper, Menu, MenuInput } from './styles'
import Logo from '../../images/LogoCopy.png'

export default () => (
  <NavWrapper>
    <a href="#"><LogoComponent align='left' src={Logo} /></a>
    <LinkWrapper align='right'>
      <NavLink href='#about'>About</NavLink>
      <NavLink href='#projects'>Projects</NavLink>
      <NavLink href='#skills'>Skills</NavLink>
      <NavLink href='#contact'>Contact</NavLink>
    </LinkWrapper>
    <Menu align="right">
      <MenuInput type="checkbox" id="menuToggle"></MenuInput>
      <label for="menuToggle"><span>&times;</span><span>&#9776;</span></label>
      <LinkWrapper>
        <NavLink href='#about'>About</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#contact'>Contact</NavLink>
      </LinkWrapper>
    </Menu>
  </NavWrapper>
)
