import styled, { css } from 'styled-components'

export const ProjectsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 70%;
align-items: center;

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

export const ProjectWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin-bottom: 50px;

@media(max-width: 794px){
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  & > div {
    width: 100%
}
}
`

export const ProjectText = styled.div`
width: 65%;
font-family: 'Lato', sans-serif;
font-style: oblique;
font-weight: bold;
opacity: 85%;
color: #051854;
font-size: 120%;
margin-right: 15px;

@media (max-width: 794px) {
  max-width: 100%;
  margin-right: 0px;
  margin-bottom: 20px;
}
`
export const ProjectTitle = styled.a`
font-family: Apple Chancery, 'Lato', sans-serif;
text-decoration: none;
margin-bottom: 10px;
align-self: center;
color: #051854;
margin: 7px;
font-size: 30px;
`
export const ProjectImage = styled.img`
width: 35%;
object-fit: contain;

@media (max-width: 768px) {
  width: 80%;
  margin-top: 20px;
  margin-left: 0px
}

`
export const ProjectVideo = styled.video`
width: 35%;
 object-fit: contain;

 @media (max-width: 768px) {
  width: 80%;
  margin-top: 20px;
  margin-left: 0px
}
`

