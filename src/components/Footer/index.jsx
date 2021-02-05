import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./style"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: { github, linkedin, podcast },
        copyright,
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            github
            linkedin
            podcast
          }
          copyright
        }
      }
    }
  `)

  return (
    <Styled.Footer>
      <Styled.divIcons>
        <ul>
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              <Styled.GitHubIcon />
            </a>
          </li>
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <Styled.LinkedinIcon />
            </a>
          </li>
          <li>
            <a href={podcast} target="_blank" rel="noreferrer">
              <Styled.SpotifyIcon />
            </a>
          </li>
        </ul>
      </Styled.divIcons>
      <p>{copyright}</p>
    </Styled.Footer>
  )
}

export default Footer
