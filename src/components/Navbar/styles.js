import styled, { css } from 'styled-components'

export const NavWrapper = styled.div`
border-radius: 3px;
display: flex;
flex-direction: row;
background-color: #051854;
height: 50px;
justify-content: space-between;
margin: -10px;
align-items: center;
top: 0px;
position: sticky;
position: -webkit-sticky;
z-index: 1;
`

export const LinkWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
`
export const NavLink = styled.a`
background: transparent;
border-radius: 3px;
border: 2px solid #fff6e0;
align-self: right;
color: #fff6e0;
margin: 0 1em;
padding: 0.25em 1em;
height: 18px;
`
export const LogoComponent = styled.img`
max-width: 40px;
max-height: 40px;
margin: 5px;
`
