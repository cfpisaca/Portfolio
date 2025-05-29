import { Container } from 'react-bootstrap';
import './Thesis.css';
import ThesisPaper from "../assets/docs/thesis.pdf";

function Thesis() {
  return (
    <Container fluid id="thesis" className="no-padding">
      <h2>ASL Recognition Thesis</h2>
      <p>
      This honors thesis delivers a real-time American Sign Language (ASL) recognition 
      system that combines MediaPipe hand-landmark extraction with a hybrid Convolutional-Graph Neural Network. 
      After benchmarking four models: a Multilayer Perceptron (MLP), a Convolutional Neural Network (CNN), 
      a Graph Convolutional Network (GCN), and the hybrid CNN-GCN, the hybrid achieved the highest accuracy. 
      The application overlays recognized letters directly on a live webcam feed, demonstrating a practical step 
      toward more accessible communication for Deaf and Hard-of-Hearing communities.

      </p>

      <div className="thesis-links">
        <a
          href="https://github.com/cfpisaca/ASLRecognition"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light m-2"
        >
          View Code on GitHub
        </a>
        <a
          href={ThesisPaper}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light m-2"
        >
          Read Full Thesis (PDF)
        </a>
      </div>

      <p style={{ marginTop: '20px' }}>
        <strong>Completed:</strong> May 2025
      </p>
    </Container>
  );
}

export default Thesis;
