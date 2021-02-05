import React from "react"
import Container from "../components/Container/index"
import Header from "../components/Header/index"
import Main from '../components/Main/index'
import Footer from '../components/Footer/index'
import Seo from '../components/seo';

const IndexPage = () => (
  <div>
    <Seo title="Tech Talk" />
    <Header />
    <Container>
      <Main/>
    </Container>
    <Footer/>
  </div>
)

export default IndexPage
