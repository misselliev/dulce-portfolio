import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubWhite from "../assets/img/githubWhite.svg";
import mailIcon from "../assets/img/mailIcon.png";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
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
              <a
                href="https://github.com/elivillalejos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubWhite} alt="Github Icon" />
              </a>
              <a href="mailto:elizabeth.villalejos@gmail.com?subject=Lets%20Connect">
                <img src={mailIcon} alt="Compose Email Icon" />
              </a>
            </div>
            <p>
              Built with
              <svg
                fill="#e53e3e"
                viewBox="0 0 24 24"
                className="w-5 h-5 mx-1 pt-px text-red-600"
                stroke="e53e3e"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              by Elizabeth Villalejos© {year}.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
