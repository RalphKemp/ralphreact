import React, { Component } from "react";
import styled from "styled-components";
import { media } from '../helpers/Sizing';
import { fadeCards } from '../helpers/fadeIns';
import bean from '../images/bean2.png';
import CV from '../images/Ralph_Kemp_CV_2018.pdf';

const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  background-image: linear-gradient(#f5efef, #d6e0e6);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Styrene B Web';
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  ${media.mid`
    justify-content: flex-start;
    height: 100vh;
  `};
  ${media.tablet`
    height: 100vh;
  `};
`;

const BeanContainer = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 100%;
  background-image: url(${bean});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 77% 0%;
  ${media.mid`
    background-position: center;
    opacity: 0;
  `};
`;

const CardsContainer = styled.div`
  height: 100vh;
  width: 500px;
  margin-top: 52px;
  z-index: 100;
  ${media.mid`
    height: 500px;
  `};
`;

const Card = styled.div`
  opacity: 0;
  margin: 20px 40px;
  height: auto;
  background-color: #fcfcfc;
  font-size: 13px;
  padding: 18px;
  border-radius: 10px;
  box-shadow: 3px 3px 6px -1px #bab1ba;
  line-height: 1.4;
  a {
    text-decoration: none;
    :visited {
      color: #1622ee;
    }
  }
  ${media.mid`
    width: 495px;
    font-size: 14px;
    margin: 20px 0px 20px 20px;
  `};
`;

class CardsList extends Component {

  componentDidMount() {
    fadeCards();
  }

  render() {
    return (
      <MainContainer>
        <CardsContainer>
          <Card id="card-one">
            Hello, my name's Ralph and I'm a full-stack web developer, music
            producer, and lover of all things creative.
          </Card>
          <Card id="card-two">
            I'm primarily a MERN stack developer, currently working on{" "}
            <a href="https://frgt.io"> <strong>frgt.io</strong></a>.<br/><br/> I have taught at{" "}
            <a href="https://www.lewagon.com"> Le Wagon</a>, and am currently
            working freelance. I've been writing and producing music for the
            past 10 years, mainly using Logic Pro X. I speak Spanish, and am
            studying Korean. I also illustrate and continuously doodle - my
            latest drawings will be on here soon.<br/><br/>
            <a
              href="mailto:ralphk3mp@gmail.com?Subject=A%20Hello"
              target="_top"
            >
              Drop me an message,
             </a> see my
            <a href="https://www.linkedin.com/in/ralphkemp"> LinkedIn</a> or take
            a look at my <a href={CV} target="">CV</a>.
          </Card>
        </CardsContainer>
        <BeanContainer id="bean-div" />
      </MainContainer>
    );
  }
}

export default CardsList;
