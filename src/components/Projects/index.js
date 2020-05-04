import React from 'react'
import LivingARt from '../../images/LivingARt.mp4'
import NYSE from '../../images/NYSE.png'
import PizzaNow from '../../images/Pizza Now.mp4'
import { ProjectWrapper, ProjectText, ProjectImage, ProjectVideo, ProjectsWrapper, ProjectTitle } from './styles'
import { SectionTitle, SectionWrapper } from '../SharedStyles/SharedStyles'

export default () => (
  <SectionWrapper id='projects'>
    <SectionTitle>Projects</SectionTitle>
    <ProjectsWrapper >
      <ProjectTitle href="https://pizza-now.herokuapp.com/">Pizza NOW</ProjectTitle>
      <ProjectWrapper>
        <ProjectText>
          With the recent drastic increase in domestic violence disputes, we wanted to create an app for victims to ask for help in a discreet way.
          We heard about victims using keywords similar to ordering a pizza when making 911 calls to disguise the purpose of the call from anyone else in the room. Inspired by that, we wanted to give victims another option and decided to build Pizza NOW, a pizza ordering service that triggers 'help' alerts to a victim's emergency contacts.
        </ProjectText>
        <ProjectVideo src={PizzaNow} autoplay controls></ProjectVideo>
      </ProjectWrapper>



      <ProjectTitle href="https://living-art-capstone.herokuapp.com/">LivingARt</ProjectTitle>
      <ProjectWrapper>
        <ProjectText>
          <p>Living ARt is an augmented reality (AR) and virtual reality (VR) native mobile app bringing famous art to life through animation and sound.
Redefining the way art is experienced through an immersive and interactive environment.</p>

          <p>Image recognition technology makes it possible to play an animated versions of any artwork found in our library using the AR view. Enhancing the experience, a sound description of the piece and artist is available to play.</p>

          <p>Immerse yourself further using the VR options. Choose regular VR to display the animated painting directly in front of you or 360 view which shows the painting all around you. Simply put on your VR headset and watch the painting come to life.</p>
        </ProjectText>
        <ProjectVideo src={LivingARt} autoplay controls />
      </ProjectWrapper>
      <ProjectTitle href="https://ny-sock-exchange.herokuapp.com/" color="black" >NYSE</ProjectTitle>
      <ProjectWrapper>
        <ProjectText>New York Sock Exchange is a mock e-commerse web app. Among the app's features are cart persistence, user login, user and guest checkout and ability to view order history.</ProjectText>
        <ProjectImage src={NYSE} />
      </ProjectWrapper>
    </ProjectsWrapper>
  </SectionWrapper>
)
