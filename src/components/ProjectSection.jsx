import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard2";
import projectsData from "../assets/data/projects";
function ProjectSection() {
  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {console.log(projectsData)}
          {projectsData.map((item, idx) => (
            <Col key={idx}>
              <ProjectCard project={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProjectSection;
