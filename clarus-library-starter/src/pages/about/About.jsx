import React from 'react'
import { AboutContainer, IconContainer, InfoContainer} from './About.style' 
import { iconData } from '../../helper/iconData'
import Icon from '../../components/icon/Icon'


const About = () => {
  return (
    <AboutContainer> 
      
      <InfoContainer> 
      <h1>hi, ı'm Şuheda</h1> 
      <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML, CSS, JS, ReactJS.
        </h4> 
        <h5>You can reach me from the links below</h5>
      </InfoContainer> 
      <IconContainer> 
      {iconData.map(item=> <a key={item.icon} href={item.href}>
          <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
        </a>)}
      </IconContainer>

    </AboutContainer>
  )
}

export default About