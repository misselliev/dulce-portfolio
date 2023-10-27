import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubWhite from "../assets/img/githubWhite.svg";
import mailIcon from "../assets/img/mailIcon.png";
// import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} className="text-center">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/elivillalejos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Linkedin Icon" />
              </a>
              <a
                href="https://github.com/misselliev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubWhite} alt="Github Icon" />
              </a>
              <a href="mailto:elizabeth.villalejos@gmail.com?subject=Lets%20Connect">
                <img src={mailIcon} alt="Compose Email Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
