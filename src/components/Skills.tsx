import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  const skills = [
    { title: "Python", description: "Encode and Decode" },
    { title: "Java", description: "Backend for Collection Tracker" },
    { title: "JavaScript, HTML, CSS", description: "Portfolio & Collection Tracker" },
  ];

  return (
    <Container id="skills" className="bg-primary text-white text-center py-5">
      <h2>Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="text-center bg-secondary text-light">
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
