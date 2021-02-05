import React from "react"
import badicoGif from "../../gif/badico2.gif"
import * as Styled from "./style"

function Header() {
  return (
    <Styled.Header>
      <Styled.Gif src={badicoGif} />
    </Styled.Header>
  )
}

export default Header
