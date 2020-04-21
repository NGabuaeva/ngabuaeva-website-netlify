import styled, { css } from 'styled-components'

export const SectionTitle = styled.h1`
font-family: 'Source Sans Pro', sans-serif;
text-decoration: underline;
margin-bottom: 10px;
color: #051854;
opacity: 95%;
margin-bottom: 30px;
`
export const SectionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 100px;

@media (max-width: 768px) {
  max-width: 100%;
  padding: 25px;
}
`
