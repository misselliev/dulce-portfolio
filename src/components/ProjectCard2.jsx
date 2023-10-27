/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function ProjectCard(project) {
  // console.log(project);
  const { title, image, subtitle, stack, link, live } = project.project;
  console.log(project);
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>{subtitle}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{stack}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="project-links">
        <Card.Link href={live}>Demo Link</Card.Link>
        <Card.Link href={link}>Source Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
