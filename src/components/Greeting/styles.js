import styled, { css } from 'styled-components'

export const GreetingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 40px;
`
export const LogoComponent = styled.img`
width: 35%;
margin-top: 30px;
margin-bottom: -30px;
transition-property: opacity;
transition-delay: 2s;
transition-duration: 10s;
`
// export const GreetingText = styled.img`
// width: 65%;
// `

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
  margin: 50px;
  margin-top: -30px;
`

