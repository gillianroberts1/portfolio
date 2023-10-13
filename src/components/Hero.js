import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img2.png";
import "./Hero.css";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Developer",
    "Student",
    "Junior Software Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-centre">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <div className="text-box">
            <h1>
              Hi I'm Gillian,
              <span className="wrap"> {text}</span>
            </h1>
            </div>
            <p>
            Welcome to my portfolio website! I'm here to share my career change journey and how the CodeClan course has been a game-changer for me. Through this experience, I've been picking up new skills and diving into the world of coding. I'm excited to show you what I've been working on, what I've learned, and where I hope to go from here!{" "}
            </p>
            {/* <p>When I qualify and what im looking to do</p> */}
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="hero-img" src={headerImg} alt="Hero Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
