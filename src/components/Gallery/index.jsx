import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import * as Styled from "./style"

const Gallery = () => {
  return (
    <Styled.DivCarousel>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass="dot"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(3).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(9).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(11).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(10).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(12).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(1).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(2).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(4).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(5).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(6).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(7).png" />
        <Styled.Image src="https://techtalk-gatsby.s3.amazonaws.com/image+(8).png" />
      </Carousel>
    </Styled.DivCarousel>
  )
}

export default Gallery
