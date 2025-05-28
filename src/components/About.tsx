import { Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import ProfilePic from "../assets/images/profilepic.png";
import Resume from "../assets/docs/resume.pdf";
import './About.css';

function About() {
  return (
    <div id="about">
      <div className="about-content">
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
            <div className="about-social-icons">
              <a href="https://github.com/cfpisaca" target="_blank" rel="noopener noreferrer">
                <FaGithub className="about-icon" />
              </a>
              <a href="https://linkedin.com/in/carlopisa" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="about-icon" />
              </a>
            </div>
          </Col>
          <Col md={8}>
            <h2>Carlo Pisacane</h2>
            <p className="sub-heading">Syracuse '25, B.S. Computer Science Graduate</p>
            <p className="about-education">
              <strong>Syracuse University College of Engineering and Computer Science (ECS)</strong>
              <ul>
                <li>Bachelor of Science (B.S.) in Computer Science </li>
                <li>Renée Crown University Honors Program</li>
                <li>1870 Scholarship: The highest recognition by the Office of Admissions; 4-year full tuition for academic excellence</li>
              </ul>
            </p>
            <p className="about-description">
            Hi, I'm Carlo, an Honors graduate in Computer Science. I am interested in computer vision, virtual reality, and machine learning. My academic journey is highlighted by a thesis on ASL recognition, aiming to bridge communication gaps with technology. 
              <br /><br />
              I envision my career path in software engineering, where I am committed to continual learning and application of my skills to solve real-world problems.
            </p>
          </Col>
        </Row>
        <h3 style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '1.5rem' }}>Explore my:</h3>
        <div className="buttons-container">
          <a href="#skills" className="info-button">Skills</a>
          <a href="#projects" className="info-button">Projects</a>
          <a href="#thesis" className="info-button">Thesis</a>
          <a href="#timeline" className="info-button">Work Experience</a>
          <a href={Resume} target="_blank" className="info-button with-icon">
            <FaFilePdf /> Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;