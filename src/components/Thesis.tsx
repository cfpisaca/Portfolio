import { Container } from 'react-bootstrap';
import './Thesis.css';

function Thesis() {
  return (
    <Container fluid id="thesis" className="no-padding">
      <h2>ASL Recognition Thesis</h2>
      <p>
        This thesis focuses on developing a robust, real-time ASL language detection system
        using TensorFlow, MediaPipe, and OpenCV in Python. The project explores various
        neural network architectures to determine the most effective approach for accurate
        gesture recognition, contributing to the advancement of accessibility for Deaf and
        Hard-of-Hearing communities through AI-driven communication tools.
      </p>
      <p style={{ marginTop: '20px' }}>
        <strong>Note:</strong> The thesis is still in development and is expected to be completed by April 2025.
      </p>
    </Container>
  );
}

export default Thesis;
