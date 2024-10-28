import { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import ProfilePic from "../assets/images/collection.png";
import './Portfolio.css';

interface Project {
  title: string;
  description: string;
  img: string;
}

function Portfolio() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { title: "Collection Tracker", description: "E-marketplace website", img: ProfilePic },
  ];

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <Container id="projects">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card onClick={() => handleOpenModal(project)} className="project-card">
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {activeProject && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{activeProject.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Portfolio;
