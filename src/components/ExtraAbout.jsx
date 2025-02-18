/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UFO from "../assets/img/UFO.svg";
import { FaFilePdf } from "react-icons/fa";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useResponsiveRender } from "../utils/useResponsiveRender";

export const ExtraAbout = () => {
  const { renderMobile } = useResponsiveRender({ breakpoint: 767 });

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
    <section className="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={UFO} alt="About Img" />
                </div>
              )}
            </TrackVisibility>
            {!renderMobile && (
              <div className="about-btn">
                <a
                  href="https://drive.google.com/file/d/1VY2-QTCQ3bvU-OKeyHgcdA6Xt6CO9HV4/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-light">
                    Download my CV
                    <FaFilePdf size={25} />
                  </Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1Hxr1zkIIntRzVSyCQYVh6cT7C_bFHNog/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-light">
                    Review my last recommendation
                    <FaFilePdf size={25} />
                  </Button>
                </a>
              </div>
            )}
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>Superpowers ✨</h1>
                  {/* <h1>Superpowers</h1> */}
                  <ul>
                    <li>
                      ✅Proficient in React.js, JavaScript, and Redux for
                      building dynamic, responsive user interfaces.
                    </li>
                    <li>
                      ✅Experienced in Scrum for agile project collaboration and
                      effective software development.
                    </li>
                    <li>
                      ✅Dedicated to maintaining code quality through Unit
                      Testing and continuous refactoring.
                    </li>
                    <li>
                      ✅Skilled in UI design using modern CSS frameworks like
                      Tailwind CSS, Material-UI and custom CSS, ensuring
                      pixel-perfect, mobile-first designs.
                    </li>
                    <li>
                      ✅Responsive Web Design expertise for optimal cross-device
                      user experiences.
                    </li>
                    <li>
                      ✅Proficient in Git and version control for efficient code
                      management and collaboration.
                    </li>
                    <li>
                      ✅Strong command of NodeJS, NextJS, and Express to create
                      efficient and scalable web applications.
                    </li>
                    <li>
                      ✅Extensive knowledge of web development, including modern
                      technologies and best practices.
                    </li>
                    <li>
                      ✅ Quick and enthusiastic learner, adept at rapidly
                      assimilating new technologies and best practices to stay
                      at the forefront of web development trends.
                    </li>
                  </ul>
                  {renderMobile && (
                    <div className="about-btn">
                      <a
                        href="https://drive.google.com/file/d/1Qisf0TDfFBeQQQCy5mWbQzTgoQ6CLqnR/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline-light">
                          Download my CV
                          <FaFilePdf size={25} />
                        </Button>
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1Hxr1zkIIntRzVSyCQYVh6cT7C_bFHNog/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline-light">
                          Review my last recommendation
                          <FaFilePdf size={25} />
                        </Button>
                      </a>
                    </div>
                  )}
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
