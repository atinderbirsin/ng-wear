import React, { useState } from "react";
import { ButtonLink } from "../BannerContainer/BannerElements";
import { Icon } from "../NavBar/NavbarElements";
import Testimonial from "./Testimonial";
import {
  TestimonialsContainer,
  Heading,
  TestimonialsDiv,
  PrevBtn,
  NextBtn,
  DotsContainer,
  TestimonialLink,
  TestContainer,
  TestimonialHeading,
  Text,
  Author,
  Stars,
  Link,
  Span,
} from "./TestimonialElements";
// import { css, cx } from "@emotion/css0";
// import { css } from "emotion";
// import { css, cx } from "@emotion/css";
import { css, jsx } from "@emotion/react";

const Testimonials = () => {
  const data = {
    0: {
      heading: "My profuse sweating has stopped",
      text: "I’m a medical doctor and as a result of my excessive sweating, all my shirts started bringing out yellowy colour within my armpit region. However, since I ordered for your sweatproof undershirt and started using it, my profuse sweating doesn’t show through my shirt and also there are no yellow stains on my shirts. I will definitely order again, thank you very much.",
      author: "M.V Pitava",
      slide: 0,
    },
    1: {
      heading: "This shirt works as claimed!",
      text: "Guys, the deep V-neck prevents sweat to a great extent.",
      author: "Rakesh Jain",
      slide: 1,
    },
    2: {
      heading: "The slim fit-crewneck has changed my life",
      text: "I’m a medical doctor and as a result of my excessive sweating, all my shirts started bringing out yellowy colour within my armpit region. However, since I ordered for your sweatproof undershirt and started using it, my profuse sweating doesn’t show through my shirt and also there are no yellow stains on my shirts. I will definitely order again, thank you very much",
      author: "Gupta P. A",
      slide: 2,
    },
  };

  const [current, setCurrent] = useState(data[0]);
  const [active, setActive] = useState(0);

  const handleSetClick = (event) => {
    setCurrent(data[event.target.getAttribute("data-quote")]);
  };

  const renderIcons = () => {
    return (
      <>
        {Object.keys(data).map((index) => {
          return (
            <Span
              onClick={(event) => handleSetClick(event)}
              data-quote={index}
              key={index}
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      <TestimonialsContainer>
        <Heading>TESTIMONIALS</Heading>
        <TestimonialsDiv>
          <TestContainer>
            <TestimonialHeading>{current.heading}</TestimonialHeading>

            <Text>
              {current.text} &nbsp;{" "}
              <ButtonLink as={Link} to="/">
                (view more)
              </ButtonLink>
            </Text>

            <Author>{current.author}</Author>

            <Stars>
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
              <Icon className="fa-solid fa-star" />
            </Stars>
          </TestContainer>
          <DotsContainer>{renderIcons()}</DotsContainer>
          <PrevBtn>
            <Icon className="fa-solid fa-angle-left" />
            <Icon className="fa-solid fa-angle-left" />
            &nbsp; Prev
          </PrevBtn>
          <NextBtn>
            Next &nbsp;
            <Icon className="fa-solid fa-angle-right" />
            <Icon className="fa-solid fa-angle-right" />
          </NextBtn>
        </TestimonialsDiv>

        <DotsContainer
          css={css`
            & > span[data-quote="${active}"]::before {
              background-color: rgb(214, 151, 70);
            }

            // background-color: red;
          `}
        ></DotsContainer>
        <TestimonialLink to="/" border="true" hovershadow="true" color="true">
          VIEW MORE
        </TestimonialLink>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
