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
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={ECS} alt="ECS" />
            </div>
            <div className="timeline-content">
              <h3>Aug 2024 - Present</h3>
              <h4>Multidisciplinary Mixed Reality Research Group, Syracuse, NY</h4>
              <p>Enter info here.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Honors} alt="Honors" />
            </div>
            <div className="timeline-content">
              <h3>Aug 2024 - Present</h3>
              <h4>Renée Crown University Honors Program, Syracuse, NY</h4>
              <p>Enter info here.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Career} alt="ECS Career Services" />
            </div>
            <div className="timeline-content">
              <h3>Apr 2023 - Present</h3>
              <h4>College of Engineering Career Services, Syracuse, NY</h4>
              <p>Enter info here.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={Syracuse} alt="Syracuse" />
            </div>
            <div className="timeline-content">
              <h3>2021 - May 2025</h3>
              <h4>Syracuse University, Syracuse, NY</h4>
              <p>Enter info here.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <img src={NYCLab} alt="NYC Lab School" />
            </div>
            <div className="timeline-content">
              <h3>2017 - 2021</h3>
              <h4>NYC Lab High School for Collaborative Studies, New York, NY</h4>
              <p>Enter info here.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Timeline;
