import { Container, Row, Col } from 'react-bootstrap';
import ProfilePic from "../assets/images/profilepic.jpg";
import './About.css';

function About() {
  return (
    <Container id="about">
      <h2>About Me</h2>
      <Row className="justify-content-center">
        <Col md={4} className="text-center">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
          <p className="about-description">
            Fourth-year Honors Computer Science student with a passion for Computer Vision, Virtual Reality, and ML
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
