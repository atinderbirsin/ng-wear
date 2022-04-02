import React from "react";

const CardsContainer = () => {
  return (
    <>
      <CardsSection>
        <Container>
          <CardsSubHeading></CardsSubHeading>
          <CardsText></CardsText>

          <CardsGridContainer>
            <Card>
              <CardImg />
              <ProductName></ProductName>
              <Rating></Rating>
              <Reveiws></Reveiws>
              <Price>
                <StrikeThrough></StrikeThrough>
              </Price>
            </Card>
            <Card>
              <CardImg />
              <ProductName></ProductName>
              <Rating></Rating>
              <Reveiws></Reveiws>
              <Price>
                <StrikeThrough></StrikeThrough>
              </Price>
            </Card>
            <Card>
              <CardImg />
              <ProductName></ProductName>
              <Rating></Rating>
              <Reveiws></Reveiws>
              <Price>
                <StrikeThrough></StrikeThrough>
              </Price>
            </Card>
          </CardsGridContainer>
        </Container>
      </CardsSection>
    </>
  );
};

export default CardsContainer;
