import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css';

function Skills() {
  const skills = [
    { title: "Python", description: "Encode and Decode" },
    { title: "Java", description: "Backend for Collection Tracker" },
    { title: "JavaScript, HTML, CSS", description: "Portfolio & Collection Tracker" },
  ];

  return (
    <Container id="skills">
      <h2>Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Body>
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
