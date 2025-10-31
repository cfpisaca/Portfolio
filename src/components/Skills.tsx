import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaPython,
  FaJava,
  FaCode,
  FaReact,
  FaBook,
  FaEye,
  FaBrain,
  FaBullseye,
  FaLaptop
} from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const openProject = (title: string) =>
    window.dispatchEvent(new CustomEvent("openProjectModal", { detail: title }));

  const skills = [
    {
      title: "Python",
      icon: <FaPython />,
      description: (
        <>
          Experienced in Python; developed a&nbsp;
          <span
            className="skill-link"
            onClick={() => openProject("EncodeDecode")}
          >
            Binary Encoder and Decoder
          </span>.
          Solid understanding of Python fundamentals, applied across projects and in my ASL recognition thesis.
        </>
      )
    },
    {
      title: "Machine Learning & Artificial Intelligence",
      icon: <FaBrain />,
      description: (
        <>
          Developed and trained machine learning models using TensorFlow for real-time ASL language detection and Alzheimer’s disease prediction (
          <span
            className="skill-link"
            onClick={() => openProject("AlzheimersML")}
          >
            AlzheimersML
          </span>
          ). Compared neural network architectures for gesture recognition and clinical classification accuracy.
        </>
      )
    },
    {
      title: "Virtual Reality",
      icon: <FaEye />,
      description: (
        <>
          Created VR experiences in C# and Unity, including&nbsp;
          <span
            className="skill-link"
            onClick={() => openProject("Geography3D")}
          >
            Geography3D
          </span>{" "}
          for the Meta Quest 2. Used motion tracking and head tracking to create immersive gameplay in a 3D world map.
        </>
      )
    },
    {
      title: "Java",
      icon: <FaJava />,
      description: (
        <>
          Fundamentals in Java, demonstrated through coursework and projects like{" "}
          <span
            className="skill-link"
            onClick={() => openProject("CollectionTracker")}
          >
            Collection Tracker
          </span>
          . Strong understanding of data structures, OOP principles, and backend development. Demonstrated Java fundamentals in{" "}
          <span
            className="skill-link"
            onClick={() => openProject("TicTacToe")}
          >
            Tic‑Tac‑Toe
          </span>{" "}
          projects.
        </>
      )
    },
    {
      title: "React, Spring, Bootstrap, Vue, Flutter, PostgreSQL",
      icon: <FaReact />,
      description: (
        <>
          Developed full-stack and mobile applications, leveraging these frameworks and backend data management. Applied in projects like{" "}
          <span
            className="skill-link"
            onClick={() => openProject("CollectionTracker")}
          >
            Collection Tracker
          </span>{" "}
          and my{" "}
          <span
            className="skill-link"
            onClick={() => openProject("Portfolio")}
          >
            Portfolio
          </span>{" "}
          to build robust, responsive, and user-friendly apps.
        </>
      )
    },
    {
      title: "Computer Vision",
      icon: <FaBullseye />,
      description: (
        <>
          Leveraged OpenCV and MediaPipe for hand/body tracking in my ASL recognition thesis and in an AR iPad app for{" "}
          <span
            className="skill-link"
            onClick={() => openProject("PsychomotorSkillLearning")}
          >
            Psychomotor Skill Learning
          </span>{" "}
          (SUMMRR).
        </>
      )
    },
    {
      title: "JavaScript, HTML, CSS",
      icon: <FaCode />,
      description: (
        <>
          Front-end and mobile development, used in projects like{" "}
          <span
            className="skill-link"
            onClick={() => openProject("CollectionTracker")}
          >
            Collection Tracker
          </span>
          ,{" "}
          <span
            className="skill-link"
            onClick={() => openProject("Portfolio")}
          >
            Portfolio
          </span>
          , and{" "}
          <span
            className="skill-link"
            onClick={() => openProject("ClimateChange")}
          >
            ClimateChange
          </span>
          . Experienced in building interactive UIs and data visualizations with Observable and VegaLite.
        </>
      )
    },
    {
      title: "C++",
      icon: <FaLaptop />,
      description:
        "Solid foundation in C++ through coursework, covering essential programming concepts, data structures, and OOP techniques."
    },
    {
      title: "Software Development",
      icon: <FaBook />,
      description: (
        <>
          Skilled in Agile methodologies with tools like Jira and Visual Paradigm, and experienced in designing scalable applications and CI/CD workflows. Effectively applied these skills in collaborative projects like{" "}
          <span
            className="skill-link"
            onClick={() => openProject("CollectionTracker")}
          >
            Collection Tracker
          </span>
          , optimizing productivity through sprint planning and backlog management.
        </>
      )
    }
  ];

  return (
    <Container fluid id="skills">
      <h2><strong>Skills</strong></h2>
      <p>Skills I've built over the years... Need to learn more.</p>
      <Row>
        {skills.map((skill, idx) => (
          <Col md={4} sm={12} xs={12} key={idx}>
            <Card className="mb-4">
              <Card.Body>
                <div className="icon">{skill.icon}</div>
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
