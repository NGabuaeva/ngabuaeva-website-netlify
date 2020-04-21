import styled from 'styled-components'

export const AboutWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
max-width: 70%;

@media(max-width: 1024px){
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  & > div {
    width: 100%
}
}
`

export const AboutText = styled.div`
width: 55%;
font-family: 'Lato', sans-serif;
font-weight: bold;
opacity: 85%;
color: #051854;
font-size: 120%;
margin-right: 15px;

@media (max-width: 768px) {
  max-width: 100%;
  margin-right: 0px;
}
`


export const AboutImage = styled.img`
object-fit: contain;
width: 45%;
margin-top: 20px;
margin-left: 15px;

@media (max-width: 768px) {
  width: 100%;
  margin-top: 20px;
  margin-left: 0px
}
`
