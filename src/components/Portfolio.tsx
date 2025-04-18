import { useState, useEffect } from 'react';
import { Modal, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaTimes } from 'react-icons/fa';
import Collection from "../assets/images/collection.png";
import Geography from "../assets/images/geography.png";
import App from "../assets/images/app.png";
import Binary from "../assets/images/binary.png";
import TicTacToe from "../assets/images/tic.png";
// import Bot from "../assets/images/bot.png";
import Thrift from "../assets/images/thift.png";
import Brain from "../assets/images/brain.png";
import MediaPipe from "../assets/images/mediapipe.png";
import Climate from "../assets/images/climate.png";
import './Portfolio.css';

interface Project {
  title: string;
  description: string;
  img: string;
  bio: string;
  repoLink: string;
  linkLabel?: string;
}

function Portfolio() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "CollectionTracker",
      description: "E-marketplace web application",
      img: Collection,
      bio: "A project that manages collections in an online marketplace.",
      repoLink: "https://github.com/cfpisaca/CollectionTracker"
    },
    {
      title: "Geography3D",
      description: "A Meta Quest 2 game",
      img: Geography,
      bio: "An immersive VR game exploring global geography in 3D.",
      repoLink: "https://github.com/cfpisaca/Geography3D"
    },
    {
      title: "Portfolio",
      description: "Carlo Pisacane's portfolio",
      img: App,
      bio: "A personal portfolio showcasing Carlo's projects and skills.",
      repoLink: "https://github.com/cfpisaca/Portfolio"
    },
    {
      title: "EncodeDecode",
      description: "Binary encoder and decoder",
      img: Binary,
      bio: "A tool to encode and decode messages in binary format.",
      repoLink: "https://github.com/cfpisaca/EncodeDecode"
    },
    {
      title: "PsychomotorSkillLearning",
      description: "AR iPad app",
      img: MediaPipe,
      bio: "Augmented Reality project for Psychomotor Skill Learning. This app is for SUMMRR (Syracuse University Multidisciplinary Mixed Reality Research).",
      repoLink: "https://github.com/5ALin/Real-Time-Full-Body-Pose-and-Gesture-Replication-System?tab=readme-ov-file"
    },
    {
      title: "SecondHandStoreApp",
      description: "Multiplatform thrift store inventory",
      img: Thrift,
      bio: "A Flutter-based application for managing second-hand store inventory.",
      repoLink: "https://github.com/aidandegooyer/SecondHandStoreApp"
    },
    {
      title: "ClimateChange",
      description: "Data visualization project",
      img: Climate,
      bio: "Data visualizations of climate change data.",
      repoLink: "https://observablehq.com/@cis-400-data-visualization/project-climate",
      linkLabel: "View this project on Observable"
    },
    {
      title: "AlzheimersML",
      description: "Machine learning + Alzheimer's data",
      img: Brain,
      bio: "Built Alzheimer’s disease prediction models using Backpropagation, Evolution Strategies, Genetic Algorithms, Neural Architecture Search, and Particle Swarm Optimization on a real-world clinical dataset.",
      repoLink: "https://github.com/cfpisaca/AlzheimersML"
    },
    {
      title: "TicTacToe",
      description: "Classic Tic-Tac-Toe",
      img: TicTacToe,
      bio: "A digital rendition of the classic Tic-Tac-Toe game.",
      repoLink: "https://github.com/cfpisaca/TicTacToe"
    }
  ];

  useEffect(() => {
    const handler = (e: Event) => {
      const projectTitle = (e as CustomEvent).detail as string;
      const proj = projects.find(p => p.title === projectTitle);
      if (proj) {
        setActiveProject(proj);
        setShowModal(true);
      }
    };
    window.addEventListener("openProjectModal", handler);
    return () => {
      window.removeEventListener("openProjectModal", handler);
    };
  }, [projects]);

  const handleOpenModal = (project: Project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <Container id="projects" className="text-center">
      <div className="project-header">
        <h2 className="project-title">Personal Projects</h2>
        <p className="project-subtitle">
          Here you can see some of the projects I've developed on my own time.
        </p>
      </div>

      <Row className="gx-0 gy-0">
        {projects.map((project, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="p-0 m-0">
            <Card
              onClick={() => handleOpenModal(project)}
              className="project-card"
              style={{ borderRadius: 0 }}
            >
              <Card.Img
                variant="top"
                src={project.img}
                loading="lazy"
                style={{ borderRadius: 0 }}
              />
              <div className="project-overlay">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {showModal && activeProject && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
          className="custom-modal"
        >
          <Modal.Header className="border-0">
            <Modal.Title className="modal-title">
              {activeProject.title}
            </Modal.Title>
            <Button
              variant="link"
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </Button>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p className="modal-description">
              {activeProject.description}
            </p>
            <p className="modal-bio">{activeProject.bio}</p>
            <p className="modal-github-text">
              {activeProject.linkLabel || "View this project on GitHub"}:{" "}
              <a
                href={activeProject.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                {activeProject.repoLink}
              </a>
            </p>
          </Modal.Body>
        </Modal>
      )}

      <div className="github-section">
        <p>I am continuing to develop personal projects and have many ideas waiting to be realized.</p>
        <p style={{ fontSize: "1.5rem" }}>
          <strong>To see more of my projects...</strong>
        </p>
        <Button
          aria-label="Visit my GitHub profile"
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
