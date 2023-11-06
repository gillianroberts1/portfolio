import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img2.png";
import "./Hero.css";
import { sendEmail } from "../helpers";
import "animate.css";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
  // const [isMoreExpanded, setIsMoreExpanded] = useState(false);

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

  const toggleJourneyExpanded = () => {
    setIsJourneyExpanded(!isJourneyExpanded);
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
            <div className="aboutme">
              <p>
                Welcome to my portfolio website! I'm here to share my career
                change journey and how the CodeClan course has been a
                game-changer for me. Through this experience, I've been picking
                up new skills and diving into the world of coding. I'm excited
                to show you what I've been working on, what I've learned, and
                where I hope to go from here!{" "}
              </p>
            </div>
            <div className="journey-container">
              <p className="journey-title"> My Journey so far...</p>
              <button className="expand-button" onClick={toggleJourneyExpanded}>
                {isJourneyExpanded ? "-" : "+"}
              </button>
            </div>
            {/* <hr></hr> */}

            {isJourneyExpanded && (
              <div className="journey-box">
                <div className="journey-card">
                  <p className="journey-text">
                    My journey began with a departure from school, followed by
                    enrollment in college to explore the realm of computing
                    studies. Life's winding path then led me through a series of
                    sales roles, starting with clothes, household electrical
                    goods, furniture, and mobile phones. Gradually, I
                    transitioned to more significant undertakings, like
                    assisting individuals in finding their dream homes.
                  </p>

                  <p className="journey-text">
                    Throughout this journey, I've been recognised for my
                    unwavering determination and my commitment to giving my all.
                    In any field, within time, I've consistently found myself
                    naturally excelling in understanding my product, with an
                    inherent ability to retain knowledge and become as
                    proficient as possible.
                  </p>
                  <p className="journey-text">
                    For the past two decades, I've been deeply involved in the
                    field of selling new homes. I began as a Salesperson, worked
                    my way up to become a Sales Manager, and eventually achieved
                    the position of Head of Sales. It's safe to say I've made
                    significant progress in my career.
                  </p>
                  <p className="journey-text">
                    Yet, the allure of a career in the tech industry always
                    remained elusive...
                  </p>

                  <p className="journey-text">
                    In July 2023, I took a leap of faith and enrolled in a
                    16-week Professional Software Development bootcamp with
                    CodeClan. I thrived in this new environment, embracing every
                    moment with enthusiasm. It was during this time that I
                    realised a career in tech wasn't just an option – it was my
                    true calling.
                  </p>

                  <p className="journey-text">
                    Then came an unexpected twist. In week 2 of the course,
                    CodeClan faced liquidation, and it was announced that our
                    coursework would cease immediately. However, thanks to our
                    incredible instructors, we persevered. For the next two
                    weeks, we continued our studies remotely, with our
                    instructors generously delivering the course pro bono.
                    Behind the scenes, the remarkable tech community rallied
                    around to support the students, and within three weeks, we
                    were back in a classroom setting, continuing under the
                    leadership of CodeBase.
                  </p>

                  <p className="journey-text">
                    Once again, my grit and determination was put to the test.
                    But not for a moment did I consider giving up.
                  </p>

                  <p className="journey-text">
                    As I near the end of the course, armed with personal and
                    group projects under my belt, and a whole new toolkit, I am
                    now excited to embark on a new chapter.
                  </p>
                  <p className="journey-closing">
                    I'm actively seeking Junior Software Developer roles where I
                    can apply my newfound skills and unwavering commitment.
                  </p>

                  <p className="journey-closing">Graduating November 2023</p>
                </div>
              </div>
            )}

            <button className="lets-connect-button" onClick={sendEmail}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            className="animate__animated animate__zoomInUp"
          >
            <img className="hero-img" src={headerImg} alt="Hero Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
