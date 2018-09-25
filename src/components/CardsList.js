import React, { Component } from "react";
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  background-color: pink;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const CardsContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: red;
`

const Card = styled.div`
  width: 200px;
  height: 150px;
  background-color: purple;
`


class CardsList extends Component {
  render() {
    return (
      <MainContainer>
        <CardsContainer>
          <Card>
            I'm card one
          </Card>
          <Card>
            I'm card two
          </Card>
        </CardsContainer>
      </MainContainer>
    );
  }
}

export default CardsList;
