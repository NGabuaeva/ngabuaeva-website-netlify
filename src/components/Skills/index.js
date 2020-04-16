import React from 'react'
import { Icon, SkillsWrapper, SkillTitle } from './styles'
import { SectionTitle, SectionWrapper } from '../SharedStyles/SharedStyles'
import ChaiIcon from '../../images/Chai.png'
import CSSIcon from '../../images/CSS.png'
import D3Icon from '../../images/D3.png'
import ExpressIcon from '../../images/Express.png'
import GitIcon from '../../images/Git.png'
import GithubIcon from '../../images/Github1.png'
import HerokuIcon from '../../images/Heroku.png'
import HTMLIcon from '../../images/HTML.png'
import JSIcon from '../../images/JS.png'
import MochaIcon from '../../images/Mocha.png'
import NodeIcon from '../../images/Node.jpeg'
import PhotoshopIcon from '../../images/Photoshop.png'
import PostgresIcon from '../../images/Postgres.png'
import RESTIcon from '../../images/REST.png'
import SequelizeIcon from '../../images/Sequelize.png'
import ReactIcon from '../../images/React.png'
import ReduxIcon from '../../images/Redux.png'


export default () => (
  <SectionWrapper id='skills'>
    <SectionTitle>Skills</SectionTitle>
    <SkillsWrapper>
      <Icon src={JSIcon} />
      <Icon src={NodeIcon} />
      <Icon src={ExpressIcon} />
      <Icon src={PostgresIcon} />
      <Icon src={SequelizeIcon} />
      <Icon src={RESTIcon} />
      <Icon src={ReactIcon} />
      <Icon src={ReduxIcon} />
      <Icon src={HTMLIcon} />
      <Icon src={CSSIcon} />
      <Icon src={GitIcon} />
      <Icon src={GithubIcon} />
      <Icon src={HerokuIcon} />
      <Icon src={D3Icon} />
      <Icon src={ChaiIcon} />
      <Icon src={MochaIcon} />
      <Icon src={PhotoshopIcon} />
    </SkillsWrapper>

  </SectionWrapper>
)
