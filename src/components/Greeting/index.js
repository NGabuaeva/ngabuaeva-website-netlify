import React from 'react'
import { GreetingWrapper, LogoComponent, GreetingText, GreetingParagraph } from './styles'
import Logo from '../../images/Logo-1-loop.gif'
import Typist from 'react-typist';

export default () => (
  <GreetingWrapper>

    {/* <GreetingText src={Greeting1} /> */}
    <LogoComponent src={Logo} />
    <Typist cursor={{ show: false }}>
      <GreetingText><p >Hi!</p >
        <p >My name is Natalia Gabuaeva.</p >
        <p >I am a full stack software engineer.</p ></GreetingText>
    </Typist>
  </GreetingWrapper >
)
