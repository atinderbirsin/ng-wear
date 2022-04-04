import React from "react";
import { Icon } from "../NavBar/NavbarElements";
import Form from "./Form";
import {
  Div,
  InnerDiv,
  FormHeading,
  FormText,
  FormContainer,
  Button,
  FormButton,
} from "./SubscribeElements";

function Subscribe() {
  const submit = (formValues) => {
    console.log(formValues);
  };

  return (
    <>
      <Div>
        <InnerDiv>
          <FormHeading>BE THE FIRST ONE TO KNOW</FormHeading>
          <FormText>
            OUR LATEST OFFERS, NEWEST PRODUCTS ETC. INDIA’S FIRST SWEAT PROOF
            TEES GUARANTEED TO BLOCK 100% OF UNDERARM SWEAT!
          </FormText>
          <FormContainer>
            <Form onSubmit={submit} />
            <Button>
              <FormButton
                to="/"
                color="true"
                border="true"
                bordercolor="true"
                width="true"
              >
                SUBSCRIBE
                <Icon className="fa-solid fa-chevron-right" />
              </FormButton>
            </Button>
          </FormContainer>
        </InnerDiv>
      </Div>
    </>
  );
}

export default Subscribe;
