/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
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
                    {`Hi! I'm Eli`} <br />
                    <span
                      className="txt-rotate"
                      dataperiod="700"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Bienvenidos! 🌟 As a bilingual frontend engineer with 5+
                    years of experience, I thrive in the world of web
                    development by building user-centric applications. My
                    passion lies in leveraging the power of React to create
                    intuitive, responsive, and scalable interfaces. <br />
                    <br />
                    {/* I&apos;ve honed my skills working collaboratively with
                    distributed teams across different time zones, making
                    asynchronous communication and project coordination second
                    nature. This experience has taught me the importance of
                    clear communication and adaptability, both essential
                    qualities for thriving in a dynamic tech environment.
                    <br /> */}
                    Whether it&apos;s crafting elegant user interfaces,
                    optimizing performance, or ensuring seamless cross-cultural
                    collaboration, I&apos;m dedicated to delivering high-quality
                    solutions.
                    {/* If you&apos;re looking for a versatile engineer
                    who bridges the gap between technology and global markets,
                    let&apos;s connect and explore how I can contribute to your
                    team&apos;s success.  */}
                    <br />
                    <br />
                    ¡Hablemos y trabajemos juntos! 💻🚀
                  </p>
                  <a href="mailto:elizabeth.villalejos@gmail.com?subject=Lets%20Connect">
                    Let’s Connect <FaRegArrowAltCircleRight size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
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
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
