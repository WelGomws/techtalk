import React from "react"
import Header from "../components/Header"
import Container from "../components/Container"
import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import Seo from '../components/seo';

const Members = () => {
  return (
    <>
    <Seo title="Tech Talk - Members" />
      <Header />
      <Container>
        <Carousel />
      </Container>
      <Footer />
    </>
  )
}

export default Members
