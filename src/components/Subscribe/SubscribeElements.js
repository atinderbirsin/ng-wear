import styled from "styled-components";
import { ButtonLink } from "../BannerContainer/BannerElements";

export const Div = styled.div`
  width: 100%;
  background-color: #006699;
  padding: 5.4rem;
`;
export const InnerDiv = styled.div`
  max-width: 50.9rem;
  margin: 0 auto;
  padding: 2.7rem 0;
  color: #fff;
  text-align: center;
  width: 100%;
`;

export const FormHeading = styled.h4`
  font-size: 4rem;
  padding-bottom: 1rem;
`;

export const FormText = styled.p`
  padding-bottom: 3rem;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const FormContainer = styled.div`
  padding: 2.5rem;
`;

export const FormButton = styled(ButtonLink)`
  border: none;
  box-shadow: 0px 0px 0px 2px white;
  border-radius: 0.1rem;
`;

export const Button = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  border-radius: 0.1rem;

  &:hover {
    background: #3985ad;
    border-radius: 0.1rem;

    ${FormButton} {
      border: none;
      box-shadow: 0px 0px 0px 3px rgb(57 133 173);
    }
  }
`;
