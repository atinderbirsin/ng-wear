import styled from "styled-components";

export const ServicesSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45rem 1fr;
`;

export const SevicesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceContainer = styled.div`
  padding: 3rem;
  display: flex;
  gap: 1.5rem;

  &.container-1 {
    background-color: #0466a2;
  }

  &.container-2 {
    background-color: #035587;
  }

  &.container-3 {
    background-color: #02446c;
  }
`;

export const IconContainer = styled.div`
  font-size: 2.4rem;
  color: #fff;
`;

export const FreeShippingText = styled.div``;
export const SecurePaymentText = styled.div``;
export const MoneyBackText = styled.div``;

export const Heading = styled.h3`
  font-size: 1.8rem;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #fff;
  padding-bottom: 1.4rem;
  padding-top: 1.4rem;
`;

export const ProductProsDiv = styled.div`
  background-color: #333;
  color: #fff;
`;
export const SubHeading = styled.div`
  font-size: 2.2rem;
  padding-bottom: 1rem;
`;

export const ProductProsHeading = styled.h3`
  font-size: 4rem;
  font-weight: 700;
  padding-bottom: 1rem;
  text-align: center;
`;
