import { Container } from 'react-bootstrap';
import NYCLab from "../assets/images/nyclab.png";
import Syracuse from "../assets/images/s.png";
import Career from "../assets/images/ecs.png";
import ECS from "../assets/images/ecs2.png"
import Honors from "../assets/images/honors.png"
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline-wrapper">
      <Container id="timeline">
        <h2>Timeline</h2>
        <p>Work experience and education history displayed here.</p>
        <div className="timeline-container">
        {/* <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Honors} alt="Honors" />
            </div>
            <div className="timeline-content">
              <h3>May 2025 - Future</h3>
              <h4>Master's Degree / Full-time work
                <br />
                  <span style={{ color: '#333'}}>New York, NY</span>
              </h4>
              <p>Considering my options as a Post-Graduate from Syracsue University.</p> 
            </div>
          </div> */}
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={ECS} alt="ECS" />
            </div>
            <div className="timeline-content">
              <h3>Oct 2024 - Present</h3>
              <h4>
                Multidisciplinary Mixed Reality Research Group
                <br />
                <span style={{ color: '#333'}}>Syracuse, NY</span>
              </h4>
              <p>
              SUMMRR (Syracuse University Multidisciplinary Mixed Reality Research) is a student-led group organized by Professor João Marum to advance AR/VR innovation across disciplines. Current projects include an AR iPad app for Psychomotor Skill Learning, which uses real-time visual feedback through a Digital Twin to enhance upper body movement training. </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Honors} alt="Honors" />
            </div>
            <div className="timeline-content">
              <h3>Sept 2024 - Present</h3>
              <h4>Renée Crown University Honors Thesis
                <br />
                <span style={{ color: '#333'}}>Syracuse, NY</span>
              </h4>
              <p>
                Honors Thesis project advised by Professor Nadeem Ghani to develop a robust, real-time ASL language detection system.
                <a href="#thesis" className="thesis-link">
                  Click here to learn more.
                </a>
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Career} alt="ECS Career Services" />
            </div>
            <div className="timeline-content">
              <h3>Apr 2023 - Present</h3>
              <h4>College of Engineering & Computer Science Career Services
                <br />
                  <span style={{ color: '#333'}}>Syracuse, NY</span>
              </h4>
              <p>As a Career Coach and Peer Leader, I mentor students over 10 hours a week, helping them with resumes, cover letters, LinkedIn, and Handshake profiles. I also organize career fairs and workshops, support ECS Career staff and employers, and lead orientation sessions for new students at Syracuse University.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Syracuse} alt="Syracuse" />
            </div>
            <div className="timeline-content">
              <h3>2021 - Present (May 2025)</h3>
              <h4>Syracuse University
                <br />
                 <span style={{ color: '#333'}}>Syracuse, NY</span>
              </h4>
              <p>As a fourth-year student pursuing a degree in Computer Science at Syracuse University, I continue to take advantage of the diverse learning opportunities and resources the university offers.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={NYCLab} alt="NYC Lab School" />
            </div>
            <div className="timeline-content">
              <h3>2017 - 2021</h3>
              <h4>NYC Lab High School for Collaborative Studies
              <br />
                 <span style={{ color: '#333'}}>New York, NY</span>
              </h4>
              <p>I graduated from NYC Lab High School for Collaborative Studies, eager for new opportunities at Syracuse University. In high school, I was active in the Model UN, West Side Soccer League, Black Student Union, and volunteered at Manhattan's Children Center and NYC Relief Bus.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Timeline;
