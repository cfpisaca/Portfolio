import { Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePic from "../assets/images/profilepic1.png";
import './About.css';

function About() {
  return (
    <div id="about">
      <div className="about-content">
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
            <div className="social-icons">
              <a href="https://github.com/cfpisaca" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
              <a href="https://linkedin.com/in/carlopisa" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </Col>
          <Col md={8}>
            <h2>Carlo Pisacane</h2>
            <p className="sub-heading">Syracuse '25, B.S. Computer Science Student, Software Engineer, and Honors Thesis Student</p>
            <p className="about-description">
              I'm a Honors Computer Science student of Syracuse's Class of 2025 and my passion is Computer Science. My interests include software design and development, machine learning, computer vision, and virtual reality.
              <br /><br />
              I'm currently a fourth-year student working towards getting a full-time job in Computer Science.
            </p>
            <p className="about-education">
              <strong>Syracuse University College of Engineering and Computer Science (ECS)</strong>
              <ul>
                <li>Bachelor's of Science in Computer Science</li>
                <li>Renée Crown University Honors Program</li>
                <li>1870 Scholarship: The highest recognition by the Office of Admissions; 4/5-year full tuition for academic excellence</li>
              </ul>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
