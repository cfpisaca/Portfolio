import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaJava, FaCode, FaReact, FaBook, FaEye } from 'react-icons/fa';
// FaBullseye, FaBrain, FaLaptop
import './Skills.css';

function Skills() {
  const skills = [
    { title: "Java", icon: <FaJava />, description: "Fundamentals in Java, demonstrated through coursework and projects like Collection Tracker. Strong understanding of data structures, object-oriented programming principles, and backend development, with ongoing efforts to deepen Java proficiency." },
    { title: "Virtual Reality", icon: <FaEye />, description: "Designed and developed VR experiences in C# and Unity, including Geography3D for the Meta Quest 2. Leveraged advanced VR technologies such as motion tracking and head tracking to create a highly immersive gameplay experience, allowing users to explore a detailed 3D world map and interact dynamically with virtual environments." },
    { title: "Python", icon: <FaPython />, description: "Experienced in Python, used for developing encoding/decoding applications and in-depth research for my ASL recognition thesis, showcasing skills in data processing and handling." },
    // { title: "Machine Learning, Artificial Intelligence", icon: <FaBrain />, description: "Skilled in TensorFlow and MediaPipe, applied in ASL recognition projects involving LSTMs for enhanced communication accessibility. Strong knowledge of AI/ML principles through thesis work." },
    // { title: "Computer Vision", icon: <FaBullseye />, description: "Expertise with OpenCV, utilized in thesis research to analyze video data and enhance ASL recognition system performance, integrating ML techniques for complex visual tasks." },
    { title: "JavaScript, HTML, CSS", icon: <FaCode />, description: "Front-end and mobile development, used in projects like Collection Tracker and your portfolio. Knowledgeable in building interactive UIs and developing Android applications." },
    { title: "React, Spring, Bootstrap, Vue, Flutter, PostgreSQL", icon: <FaReact />, description: "Developed full-stack and mobile applications, leveraging these frameworks, libraries, and backend data management. Applied in projects like Collection Tracker to build robust, responsive, and user-friendly applications." },
    // { title: "C++", icon: <FaLaptop />, description: "Solid foundation in C++ through coursework, covering essential programming concepts, data structures, and object-oriented programming techniques." },
    { title: "Software Development", icon: <FaBook />, description: "Skilled in Agile methodologies with tools like Jira and Visual Paradigm, effectively applied in collaborative projects like Collection Tracker, optimizing productivity through sprint planning and backlog management." }
  ];

  return (
    <Container fluid id="skills"> 
      <h2><strong>Skills</strong></h2>
      <p>Skills I've built over the years... Need to learn more.</p>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} sm={12} xs={12} key={index}>
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
