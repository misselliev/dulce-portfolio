import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard2";
import projectsData from "../assets/data/projects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProjectSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <Container>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="owl-carousel owl-theme project-slider"
        >
          {projectsData.map((item, idx) => (
            <Col key={idx}>
              <ProjectCard project={item} />
            </Col>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default ProjectSection;
