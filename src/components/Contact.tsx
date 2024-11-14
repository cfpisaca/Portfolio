// Contact.js
import { Container, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <Container id="contact">
        <h2 className="text-center">Contact Me</h2>
        <p className="text-center contact-info">
          Email: cfpisaca@syr.edu • cfpisaca@gmail.com<br />
          Phone: 917-769-1809<br />
          Or just fill out this form
        </p>
        <Form className="contact-form">
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Your Name *" />
          </Form.Group>
          <Form.Group controlId="email" className="form-spacing">
            <Form.Control type="email" placeholder="Your Email *" />
          </Form.Group>
          <Form.Group controlId="phone" className="form-spacing">
            <Form.Control type="text" placeholder="Your Phone" />
          </Form.Group>
          <Form.Group controlId="message" className="form-spacing">
            <Form.Control as="textarea" placeholder="Your Message *" rows={3} />
          </Form.Group>
          <Button type="submit" variant="primary" className="submit-button">Send Message</Button>
        </Form>
      </Container>

      <footer className="contact-footer">
        <p><strong>Carlo Pisacane</strong></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/carlopisa/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/cfpisaca" target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub />
          </a>
        </div>
        <p>&copy; Carlo Pisacane 2024</p>
      </footer>
    </div>
  );
}

export default Contact;
