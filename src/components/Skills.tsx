import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPython, FaJava, FaCode, FaReact, FaBook, FaEye } from 'react-icons/fa';
//  FaBullseye, FaBrain, FaLaptop
import './Skills.css';

function Skills() {
  const skills = [
    // Python
    { 
      title: "Python", 
      icon: <FaPython />, 
      description: "Experienced in Python; developed a Binary Encoder and Decoder application. Solid understanding of Python fundamentals, applied across projects and in my ASL recognition thesis."
    },
  
    // Virtual Reality
    { 
      title: "Virtual Reality", 
      icon: <FaEye />, 
      description: "Designed and developed VR experiences in C# and Unity, including Geography3D for the Meta Quest 2. Leveraged motion tracking and head tracking to create a highly immersive gameplay experience, allowing users to explore a 3D world map and interact dynamically with a virtual environment." 
    },

    // Java
    { 
      title: "Java", 
      icon: <FaJava />, 
      description: "Fundamentals in Java, demonstrated through coursework and projects like Collection Tracker. Strong understanding of data structures, object-oriented programming principles, and backend development. Demonstrated Java fundamentals in Tic-Tac-Toe and Simple Chat Bot projects." 
    },


    // Front-End Development
    { 
      title: "JavaScript, HTML, CSS", 
      icon: <FaCode />, 
      description: "Front-end and mobile development, used in projects like Collection Tracker and my Portfolio. Knowledgeable in building interactive UIs and developing Android and multi-platform applications." 
    },

    // Frameworks and Libraries
    { 
      title: "React, Spring, Bootstrap, Vue, Flutter, PostgreSQL", 
      icon: <FaReact />, 
      description: "Developed full-stack and mobile applications, leveraging these frameworks, libraries, and backend data management. Applied in projects like Collection Tracker to build robust, responsive, and user-friendly applications." 
    },

    // Machine Learning and AI (
    // { 
    //   title: "Machine Learning, Artificial Intelligence", 
    //   icon: <FaBrain />, 
    //   description: "Skilled in TensorFlow and MediaPipe, applied in ASL recognition projects involving LSTMs for enhanced communication accessibility. Strong knowledge of AI/ML principles through thesis work." 
    // },

    // Computer Vision 
    // { 
    //   title: "Computer Vision", 
    //   icon: <FaBullseye />, 
    //   description: "Expertise with OpenCV, utilized in thesis research to analyze video data and enhance ASL recognition system performance, integrating ML techniques for complex visual tasks." 
    // },

    // C++ 
    // { 
    //   title: "C++", 
    //   icon: <FaLaptop />, 
    //   description: "Solid foundation in C++ through coursework, covering essential programming concepts, data structures, and object-oriented programming techniques." 
    // },

    // Software Development 
    { 
      title: "Software Development", 
      icon: <FaBook />, 
      description: "Skilled in Agile methodologies with tools like Jira and Visual Paradigm, effectively applied in collaborative projects like Collection Tracker, optimizing productivity through sprint planning and backlog management." 
    }
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
