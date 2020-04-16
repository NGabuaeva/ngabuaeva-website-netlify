import React from 'react'
import { Icon, ContactWrapper } from './styles'
import { SectionTitle, SectionWrapper } from '../SharedStyles/SharedStyles'
import Github from '../../images/Github.png'
import LinkedIn from '../../images/LinkedIn.png'
import Email from '../../images/Email.png'

export default () => (
  <SectionWrapper id='contact'>
    <SectionTitle>Get in touch</SectionTitle>
    <ContactWrapper >
      <a href='https://github.com/NGabuaeva'>
        <Icon src={Github} />
      </a>
      <a href='https://www.linkedin.com/in/natalia-gabuaeva/'>
        <Icon src={LinkedIn} />
      </a>
      <a href='mailto:ngabuaeva@gmail.com'>
        <Icon src={Email} />
      </a>
    </ContactWrapper>
  </SectionWrapper>
)
