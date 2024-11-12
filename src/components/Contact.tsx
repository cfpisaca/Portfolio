import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <Container id="contact">
        <h2 className="text-center">Contact Me</h2>
        <Form className="contact-form">
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group controlId="email" className="form-spacing">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group controlId="message" className="form-spacing">
            <Form.Control as="textarea" placeholder="Your Message" rows={3} />
          </Form.Group>
          <Button type="submit" variant="primary" className="submit-button">Send Message</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
