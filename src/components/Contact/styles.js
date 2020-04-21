import styled from 'styled-components'

export const ContactWrapper = styled.div`
display: flex;
flex-direction: row;

@media(max-width: 794px){
  max-width: 100%;
  padding: 0px;
  justify-content: space-between;

  & > div {
    width: 60%
}
`
export const Icon = styled.img`
max-width: 120px;
margin: 20px;

@media(max-width: 794px){
  max-width: 60%;
  margin: 0px;
  margin-left: 10%
}
`
