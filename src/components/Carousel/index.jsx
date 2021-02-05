import React from "react"
import * as Styled from "./style"
import Gallery from "../Gallery/index"

const Carousel = () => {
  return (
    <>
      <Styled.Case>
        <Styled.CaseWrapper>
          <Styled.Title> Nosso lindo e maravilhoso time</Styled.Title>
        </Styled.CaseWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt
          ullam, in officiis, totam nulla veritatis aliquid ipsum consequatur
          quia non quaerat dolore, doloremque minima. Natus in expedita
          laudantium enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt
          ullam, in officiis, totam nulla veritatis aliquid ipsum consequatur
          quia non quaerat dolore, doloremque minima. Natus in expedita
          laudantium enim. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui incidunt ullam, in officiis, totam nulla veritatis aliquid
          ipsum consequatur quia non quaerat dolore, doloremque minima. Natus in
          expedita laudantium enim. 
        </p>
        <Gallery />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt
          ullam, in officiis, totam nulla veritatis aliquid ipsum consequatur
          quia non quaerat dolore, doloremque minima. Natus in expedita
          laudantium enim.
        </p>
        <Styled.ButtonLink to="/">
          <Styled.Button>Tela inicial</Styled.Button>
        </Styled.ButtonLink>
      </Styled.Case>
    </>
  )
}

export default Carousel
