import { Container, Row, Col } from 'react-bootstrap';
import './Timeline.css';

function Timeline() {
  return (
    <Container id="timeline">
      <h2>Timeline</h2>
      <p>Work experience and education history displayed here.</p>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-icon">
            <img src="path/to/google-logo.png" alt="Google" />
          </div>
          <div className="timeline-content">
            <h3>2019 - Present</h3>
            <h4>Company</h4>
            <p>Currently working as blah blah blah.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">
            <img src="path/to/mit-media-lab-logo.png" alt="MIT Media Lab" />
          </div>
          <div className="timeline-content">
            <h3>2018 - Present</h3>
            <h4>Research</h4>
            <p>Research on the X project, presented at the office, focuses on...</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Timeline;
