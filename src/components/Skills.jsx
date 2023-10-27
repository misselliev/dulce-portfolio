import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import reactIcon from "../assets/img/reactIcon.svg";
import javascriptIcon from "../assets/img/javascriptIcon.svg";
import bootstrapIcon from "../assets/img/bootstrapIcon.svg";
import html5Icon from "../assets/img/html5Icon.svg";
import css3Icon from "../assets/img/css3Icon.svg";
import nextIcon from "../assets/img/nextIcon.svg";
import nodeIcon from "../assets/img/nodeIcon.svg";
import railsIcon from "../assets/img/railsIcon.svg";
import reduxIcon from "../assets/img/reduxIcon.svg";
import rubyIcon from "../assets/img/rubyIcon.svg";
import sassIcon from "../assets/img/sassIcon.svg";
import semanticIcon from "../assets/img/semanticIcon.svg";
import tailwindIcon from "../assets/img/tailwindIcon.svg";
import materialIcon from "../assets/img/materialIcon.svg";

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactIcon} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={javascriptIcon} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={reduxIcon} alt="Image" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={css3Icon} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={html5Icon} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={sassIcon} alt="Image" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={nextIcon} alt="Image" />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img src={nodeIcon} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={tailwindIcon} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={semanticIcon} alt="Image" />
                  <h5>Semantic UI</h5>
                </div>
                <div className="item">
                  <img src={materialIcon} alt="Image" />
                  <h5>Material UI</h5>
                </div>
                <div className="item">
                  <img src={rubyIcon} alt="Image" />
                  <h5>Ruby</h5>
                </div>
                <div className="item">
                  <img src={railsIcon} alt="Image" />
                  <h5>Rails</h5>
                </div>
                <div className="item">
                  <img src={bootstrapIcon} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
