import styled from "styled-components"
import Icons from "../Icons"

export const Footer = styled.footer`
  width: 100%;
  height: 140px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: #0e273b;
  font-family: Nunito;
  flex-direction: column;
  align-items: center;
  
  p {
    color: white;
  }
`

export const divIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 3rem;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
  }
`

export const GitHubIcon = styled(Icons.Github)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  display: inline-block;
  &:hover {
    color: gray;
  }
`

export const LinkedinIcon = styled(Icons.Linkedin)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  display: inline-block;
  &:hover {
    color: gray;
  }
`

export const SpotifyIcon = styled(Icons.Spotify)`
  margin-right: 10px;
  width: 1.6rem;
  color: white;
  display: inline-block;
  &:hover {
    color: gray;
  }
`