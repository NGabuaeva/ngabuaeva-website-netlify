import styled from 'styled-components'

export const NavWrapper = styled.div`
display: flex;
flex-direction: row;
background-color: #051854;
height: 50px;
justify-content: space-between;
margin-top: -10px;
align-items: center;
top: 0px;
position: sticky;
position: -webkit-sticky;
z-index: 1;
@media(max-width: 794px){
  max-width: 100%;
  padding: 0px;

  & > div {
    width: 100%
}
}
`

export const LinkWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;

@media(max-width: 414px){
  display: none;
}
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

@media(max-width: 414px){
margin: 5px;
}
`
export const LogoComponent = styled.img`
max-width: 40px;
max-height: 40px;
margin: 10px;
`
export const Menu = styled.div`
display: none;

@media(max-width: 414px) {
  display: block;
  color: seashell;
  overflow:hidden;
  max-width: 30px;
}
`

export const MenuInput = styled.input`
display:none;

&:not(:checked) ~label :first-child{
  display: none
}

&:checked ~label span ~ :last-child{
  display: none
}

&:checked ~${LinkWrapper} {
  position: absolute;
  background-color: #051854;
  opacity:90%;
  top: 50px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}
`
