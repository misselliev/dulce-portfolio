/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function ProjectCard(project) {
  const { title, image, subtitle, stack, link, live } = project.project;
  return (
    <Card border="dark" bg="light" text="dark" className="shadow p-3 mb-3">
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{stack}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="project-links">
        <Card.Link href={live} target="_blank" rel="noopener noreferrer">
          Demo Link
        </Card.Link>
        <Card.Link href={link} target="_blank" rel="noopener noreferrer">
          Source Link
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
