import React from "react";
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
} from "./TestimonialElements";

const Testimonials = () => {
  const data = [
    {
      heading: "My profuse sweating has stopped",
      text: "I’m a medical doctor and as a result of my excessive sweating, all my shirts started bringing out yellowy colour within my armpit region. However, since I ordered for your sweatproof undershirt and started using it, my profuse sweating doesn’t show through my shirt and also there are no yellow stains on my shirts. I will definitely order again, thank you very much.",
      author: "M.V Pitava",
      slide: 0,
    },
    {
      heading: "This shirt works as claimed!",
      text: "Guys, the deep V-neck prevents sweat to a great extent.",
      author: "Rakesh Jain",
      slide: 1,
    },
    {
      heading: "The slim fit-crewneck has changed my life",
      text: "I’m a medical doctor and as a result of my excessive sweating, all my shirts started bringing out yellowy colour within my armpit region. However, since I ordered for your sweatproof undershirt and started using it, my profuse sweating doesn’t show through my shirt and also there are no yellow stains on my shirts. I will definitely order again, thank you very much",
      author: "Gupta P. A",
      slide: 2,
    },
  ];

  const renderTestimonial = () => {
    return (
      <>
        {data.map((d) => {
          return (
            <Testimonial
              key={d.slide}
              data-slide={d.slide}
              heading={d.heading}
              text={d.text}
              author={d.author}
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
          {renderTestimonial()}
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

        <DotsContainer></DotsContainer>
        <TestimonialLink to="/" border="true" hovershadow="true" color="true">
          VIEW MORE
        </TestimonialLink>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
