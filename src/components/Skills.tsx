import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaJava, FaCode, FaReact, FaBullseye, FaBrain, FaBook, FaEye, FaLaptop  } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { title: "Java", icon: <FaJava />, description: "" },
    { title: "Python", icon: <FaPython />, description: "" },
    { title: "Machine Learning, Artificial Intelligence", icon: <FaBrain />, description: "" },
    { title: "Computer Vision", icon: <FaBullseye />, description: "" },
    { title: "VR", icon: <FaEye />, description: "" },
    { title: "JavaScript, HTML, CSS", icon: <FaCode />, description: "" },
    { title: "React, Spring, Bootstrap, Vue", icon: <FaReact />, description: "" },
    { title: "C++", icon: <FaLaptop />, description: "" },
    { title: "Software Development", icon: <FaBook />, description: "" }
  ];

  return (
    <Container fluid id="skills"> 
      <h2><strong>Skills</strong></h2>
      <p>Here are some of my skills, I'm looking to learn and discover.</p>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <Card>
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
