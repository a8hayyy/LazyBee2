import React from 'react'
import Delivery from '../../Components/Delivery/Delivery'
import Feedback from '../../Components/Feedback/Feedback'
import Footer from '../../Components/Footer/Footer'
import Intro from '../../Components/Intro/Intro'
import MainSection from '../../Components/MainSection/MainSection'
import Service from '../../Components/Services/Service'

function Home() {
  return (
    <>
      <MainSection/>
      <Intro/>
      <Delivery/>
      <Service/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default Home