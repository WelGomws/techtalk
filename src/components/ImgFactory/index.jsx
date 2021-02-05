import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const ImgFactory = () => {
  const { factory } = useStaticQuery(
    graphql`
      query {
        factory: file(relativePath: { eq: "Factory.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div style={{width: "500px", float: "left", margin: "16px"}}>
      <Img fluid={factory.childImageSharp.fluid} />
    </div>
  )
}

export default ImgFactory