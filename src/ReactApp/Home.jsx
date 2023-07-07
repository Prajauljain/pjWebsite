import React from 'react'
import img from './images/img1.png'
import CommonPart from './CommonPart'


const Home = () => {
  return (
    <>
    <CommonPart 
        name="Grow your Business with"
        btn_name="Get Started"
        imgsrc={img} 
        visit="/services"/>
    </>
  )
}

export default Home
