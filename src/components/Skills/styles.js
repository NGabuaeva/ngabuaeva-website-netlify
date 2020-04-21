import styled from 'styled-components'

export const SkillsWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

@media(max-width: 768px){
  max-width: 100%;
  padding: 0px;
`

export const Icon = styled.img`
max-height: 80px;
margin: 20px;

@media(max-width: 768px){
max-height: 40px
}
`
