import styled from "styled-components";

export const ExclusiveContainer = styled.div`
  width: 100%;
  background-color: #bcdbf5;
  position: relative;
`;

export const ExclusiveTextContainer = styled.div`
  max-width: 108rem;
  padding: 2.7rem 0;
  margin: 0 auto;
`;

export const ExclusiveTextDiv = styled.div`
  width: 100%;
`;

export const ExclusiveHeading = styled.h2`
  font-weight: 700;
  font-size: 5.2rem;
  color: #333;
  padding-bottom: 1rem;
  line-height: 5.2rem;
`;

export const ExclusiveSpan = styled.span`
  padding-top: 1rem;
  display: inline-block;
`;

export const ExclusiveText = styled.p`
  font-weight: 600;
  font-size: 3rem;
  color: #333;

  &.first-para {
    line-height: 3rem;
    padding-bottom: 1rem;
  }
`;

export const ExclusiveTopCrossRibbon = styled.div`
  background-color: #ea4335;
  padding: 0.7rem 5rem;
  color: #fff;
  border: 1px dashed #fff;
  box-shadow: 0 0 0 3px #ea4335;
  font-size: 1.4rem;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 4rem;
  transform: rotate(45deg);
  margin: 3rem;
`;
