import React from 'react'
import { AboutWrapper, AboutText, AboutImage } from './styles'
import { SectionTitle, SectionWrapper } from '../SharedStyles/SharedStyles'
import NataliaGabuaeva from '../../images/Natalia_Gabuaeva.png'

export default () => (
  <SectionWrapper id='about'>
    <SectionTitle>About me</SectionTitle>
    <AboutWrapper>
      <AboutText>
        <p>I am a full stack software engineer with background in the restaurant industry.
        I am also a visual artist, specializing in oil painting.
        Being a software engineer allows me to use my creativity in a completely different way and feeds my drive to constantly explore, learn, and evolve.</p>
        <p>I am a dedicated worker with a great work ethic.
        I see any company I work for as a project of my own and find great pleasure in contributing to my company's development and growth.
        I learn and adapt to new environments quickly.
        I find great pleasure working with other people and highly appreciate fun and supportive work environments.</p>
        <p>P.S.: I also have a level 1 Cicerone beer certification. Need beer advice? Ask me ;)</p>
      </AboutText>
      <AboutImage src={NataliaGabuaeva} alt='Natalia Gabuaeva' />
    </AboutWrapper>
  </SectionWrapper>
)
