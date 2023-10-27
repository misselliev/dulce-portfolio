/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ExtraAbout = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Frontend Engineer",
    "React Engineer",
    "Fullstack Web Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5} className="banner-img">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  <h1>
                    {/* {`Hi! I'm Eli`} <br /> */}
                    {/* <span
                      className="txt-rotate"
                      dataperiod="700"
                      data-rotate="[✨Superpowers ✨]"
                    > */}
                    <span className="wrap">✨Superpowers ✨</span>
                    {/* </span> */}
                  </h1>
                  <p>
                    ✅Proficient in React.js, JavaScript, and Redux for building
                    dynamic, responsive user interfaces.
                    <br /> ✅Experienced in Scrum for agile project
                    collaboration and effective software development. <br />
                    ✅Dedicated to maintaining code quality through Unit Testing
                    and continuous refactoring. <br />
                    ✅Skilled in UI design using modern CSS frameworks like
                    Tailwind CSS, Material-UI and custom CSS, ensuring
                    pixel-perfect, mobile-first designs. <br />
                    ✅Responsive Web Design expertise for optimal cross-device
                    user experiences. <br />
                    ✅Proficient in Git and version control for efficient code
                    management and collaboration. <br />
                    ✅Strong command of NodeJS, NextJS, and Express to create
                    efficient and scalable web applications.
                    <br />
                    ✅Extensive knowledge of web development, including modern
                    technologies and best practices. <br />✅ Quick and
                    enthusiastic learner, adept at rapidly assimilating new
                    technologies and best practices to stay at the forefront of
                    web development trends.
                  </p>
                  <a href="mailto:elizabeth.villalejos@gmail.com?subject=Lets%20Connect">
                    Download my CV <FaRegArrowAltCircleRight size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExtraAbout;
