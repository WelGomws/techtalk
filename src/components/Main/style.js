import Styled from "styled-components";
import {Link} from "gatsby"

export const Main = Styled.main`
margin: 32px 0;
h1 {
    font-family: Nunito;
    font-size: 32px;
    margin: 32px auto;
    text-align: center;
}
p {
    font-family: Nunito;
    margin-top: 16px;
}
`
export const Button = Styled.button`
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

export const ButtonLink = Styled(Link)`
    color:#0E273B; 
`