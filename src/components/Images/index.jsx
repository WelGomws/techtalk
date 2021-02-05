import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Images = () => {
  const { badicocapa } = useStaticQuery(
    graphql`
      query {
        badicocapa: file(relativePath: { eq: "image.png" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <div style={{width: "1100px"}}>
      <Img fluid={badicocapa.childImageSharp.fluid} />
    </div>
  )
}

export default Images
