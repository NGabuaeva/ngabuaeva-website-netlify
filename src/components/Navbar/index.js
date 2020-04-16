import React from 'react'
import { NavLink, NavWrapper, LogoComponent, LinkWrapper, } from './styles'
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
  </NavWrapper>
)
