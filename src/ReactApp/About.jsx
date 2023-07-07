import React from 'react'
import img7 from './images/img7.png'
import CommonPart from './CommonPart'

const About = () => {
  return (
    <>
    <CommonPart 
      name="Welcome to About 
      Page" btn_name="Contact 
      Now" imgsrc={img7} 
      visit="/contact"/>
    </>
  )
}

export default About
