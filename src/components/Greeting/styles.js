import styled, { css } from 'styled-components'

export const GreetingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 40px;

@media (max-width: 414px) {
  padding-top: 80px;
  padding-bottom: 80px
}
`
export const LogoComponent = styled.img`
width: 35%;
margin-top: 30px;
margin-bottom: -30px;
transition-property: opacity;
transition-delay: 2s;
transition-duration: 10s;

@media (max-width: 768px) {
  width: 100%;
}

@media (max-width: 414px) {
width: 120%;
}
`

export const GreetingText = styled.div`
  color: #051854;
  font-size: 200%;
  font-family: 'Lato', sans-serif;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;

  @media (max-width: 414px) {
    font-size: 110%;
    max-width: 100%;
    margin: 0px;
    font-weight: bold;
    letter-spacing: 0em;
    padding-bottom: 40px
  }
`

