import { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';

interface Project {
  title: string;
  description: string;
  img: string;
}

function Portfolio() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { title: "Collection Tracker", description: "E-marketplace website", img: "/assets/images/collection.png" },
  ];

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <Container id="projects" className="my-5 text-center">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card onClick={() => handleOpenModal(project)}>
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
