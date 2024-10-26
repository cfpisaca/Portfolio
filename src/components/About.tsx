import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container id="about" className="content-section text-center my-5">
      <h2>About Me</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <img src="/assets/images/profile_pic.jpg" alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px' }} />
          <p>Fourth-year Honors Computer Science student with a passion for Computer Vision, Virtual Reality, and ML</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
