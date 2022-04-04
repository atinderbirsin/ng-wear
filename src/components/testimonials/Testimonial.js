import React from "react";
import { ButtonLink } from "../BannerContainer/BannerElements";
import { Icon } from "../NavBar/NavbarElements";
import { Div, TestimonialHeading, Text, Author } from "./TestimonialElements";

const Testimonial = ({ heading, text, author }) => {
  return (
    <>
      <Div>
        <TestimonialHeading>{heading}</TestimonialHeading>

        <Text>
          {text} &nbsp; <ButtonLink to="/">(view more)</ButtonLink>
        </Text>

        <Author>{author}</Author>

        <Icon className="fa-solid fa-star" />
        <Icon className="fa-solid fa-star" />
        <Icon className="fa-solid fa-star" />
        <Icon className="fa-solid fa-star" />
        <Icon className="fa-solid fa-star" />
      </Div>
    </>
  );
};

export default Testimonial;
