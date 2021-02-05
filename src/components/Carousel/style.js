import styled from "styled-components"
import { Link } from "gatsby"

export const Case = styled.div`
  display: block;
  margin: 2rem 2rem 3.5rem 2rem;
  font-family: Nunito;

  p {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
  }
`

export const CaseWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Nunito;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
`

export const Button = styled.button`
background: rgb(39, 222, 191);
position: fixed;
bottom: 50px;
right: 100px;
border-radius: 20px;
box-shadow: 0px 0px 5px black;
height: 35px;
width: 155px;
border: none;
cursor: pointer;
font-family: Nunito;
font-weight: 700;
text-decoration: none;
transition: transform .6s;
outline: none;

:hover {
    transform: scale(1.1);
    color: #fff;
    text-shadow: 0px 0px 3px #000;
}
`

export const ButtonLink = styled(Link)`
  color: #0e273b;
`
