import { useState } from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import Collection from "../assets/images/collection.png";
import Geography from "../assets/images/geography.png";
import App from "../assets/images/app.png"
import Binary from "../assets/images/binary.png"
import TicTacToe from "../assets/images/tic.png"
import Bot from "../assets/images/bot.png"
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
    { title: "Collection Tracker", description: "E-marketplace web application.", img: Collection },
    { title: "Geography3D", description: "A Meta Quest 2 game.", img: Geography },
    { title: "Portfolio", description: "Carlo Pisacane's portfolio.", img: App },
    { title: "Encode and Decode", description: "Binary encoder and decoder.", img: Binary },
    { title: "Tic-Tac-Toe", description: "Classic Tic-Tac-Toe.", img: TicTacToe },
    { title: "Simple Chat Bot", description: "First java project, simple chat bot.", img: Bot }
  ]; 

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <Container id="projects" className="text-center">
      <div className="project-header">
        <h2 className="project-title">Personal Projects</h2>
        <p className="project-subtitle">Here you can see some of the projects I've developed on my own time.</p>
      </div>

      <Row className="gx-0 gy-0">
        {projects.map((project, index) => (
          <Col md={4} key={index} className="p-0 m-0">
            <Card 
              onClick={() => handleOpenModal(project)} 
              className="project-card" 
              style={{ borderRadius: 0 }}
            >
              <Card.Img variant="top" src={project.img} style={{ borderRadius: 0 }} />
              <div className="project-overlay">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </div>
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

      <div className="github-section">
        <p>I am continuing to develop personal projects and have many ideas waiting to be realized.</p>
        <p style={{ fontSize: "1.5rem" }}><strong>To see more of my projects...</strong></p>
        <Button
          href="https://github.com/cfpisaca"
          target="_blank"
          rel="noopener noreferrer"
          variant="dark"
          className="github-button"
        >
          Visit My GitHub &nbsp;<FaGithub />
        </Button>
      </div>
    </Container>
  );
}

export default Portfolio;
