import React from "react"
import ImgFactory from "../ImgFactory"
import Images from "../Images/index"
import * as Styled from "./style"

const Main = () => (
  <Styled.Main>
    <Images />
    <h1>Pessoas incriveis com soluções mais incriveis ainda</h1>
    <div style={{ width: "70%", margin: "0 auto" }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra
        ullamcorper lacus a semper. Pellentesque enim mauris, pharetra at
        maximus ac, interdum vitae sem. Donec euismod erat eget dui lacinia
        mattis. Pellentesque interdum, massa aliquet tempor aliquam, velit neque
        dapibus velit, eu blandit ante elit a ante. Aliquam magna mauris,
        tincidunt quis nibh non, vestibulum porttitor magna. Suspendisse at dui
        id velit mattis efficitur. Nam et varius magna. Maecenas neque eros,
        fermentum sit amet diam id, placerat iaculis felis. Proin dui mi,
        aliquet id blandit sit amet, pulvinar elementum dui. Aenean dignissim
        lacus ut purus luctus, sed posuere tortor accumsan. Nunc nec arcu nec
        lorem volutpat egestas ac a eros. Sed sit amet leo interdum, accumsan
        augue ac, condimentum mi. Donec sit amet mi quam. Duis viverra tellus eu
        justo bibendum, non consequat mauris vestibulum.
      </p>
      <ImgFactory />
      <p>
        Nam tristique in massa eget mollis. Nam id congue velit. Suspendisse
        blandit turpis ante, eget aliquam erat dignissim ac. Vivamus rutrum dui
        ac lacus sodales, at mattis nisl pretium. Aliquam placerat consequat
        posuere. Nunc sit amet cursus lectus. Vivamus volutpat quis eros eu
        finibus. In vehicula efficitur sapien, non dictum augue malesuada ut.
      </p>
      <p>
        Mauris eu metus mauris. Proin et metus laoreet, venenatis eros sed,
        mollis tortor. Fusce et nibh aliquet, maximus lectus ut, congue magna.
        Cras venenatis laoreet vehicula. Curabitur condimentum tellus quis risus
        blandit viverra. Nullam mollis commodo massa vitae euismod. Praesent
        fermentum molestie mi, eu ornare dui imperdiet nec. Nam nibh urna,
        tincidunt sed hendrerit at, porttitor at ex. Nullam congue sollicitudin
        odio. Cras hendrerit in lectus vel maximus. In commodo est erat, ut
        convallis tortor sollicitudin sed. Sed sodales, ligula at scelerisque
        blandit, est sem molestie lorem, ac vulputate orci libero et nisl.
        Pellentesque pharetra lorem ac tortor suscipit, in ornare justo
        lobortis. Sed nisl eros, posuere posuere diam quis, dignissim varius
        quam.
      </p>
      <p>
        Nulla lacus lectus, maximus laoreet lectus at, bibendum convallis
        mauris. Donec dignissim erat at volutpat auctor. Aliquam tempor placerat
        nisi non pretium. Nunc scelerisque placerat mauris. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Morbi finibus mattis pellentesque. Duis vitae elementum sem, in
        auctor metus. Aliquam quis lectus vel nisl ultricies aliquet. Integer
        neque ex, mattis vitae diam eget, blandit faucibus nisi. Fusce pulvinar
        massa eget mauris feugiat, eu lobortis urna hendrerit.
      </p>
    </div>
    <Styled.ButtonLink to="/members">
      <Styled.Button>Conheça nosso time</Styled.Button>
    </Styled.ButtonLink>
  </Styled.Main>
)

export default Main
