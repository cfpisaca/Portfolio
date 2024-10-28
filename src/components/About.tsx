import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from "../assets/images/profilepic.jpg";

function About() {
  return (
    <Container id="about" className="content-section text-center my-5">
      <h2>About Me</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <img src={ProfilePic} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px' }} />
          <p>Fourth-year Honors Computer Science student with a passion for Computer Vision, Virtual Reality, and ML</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
