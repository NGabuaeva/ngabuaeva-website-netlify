import styled, { css } from 'styled-components'

export const ProjectsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 70%;
align-items: center;
`

export const ProjectWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin-bottom: 50px;
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

`
export const ProjectVideo = styled.video`
width: 35%;
 object-fit: contain;
`

