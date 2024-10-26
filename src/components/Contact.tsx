import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container id="contact" className="content-section text-white py-5" style={{ background: '#333' }}>
      <h2 className="text-center">Contact Me</h2>
      <Form className="mt-4">
        <Form.Group controlId="name">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group controlId="email" className="mt-3">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group controlId="message" className="mt-3">
          <Form.Control as="textarea" placeholder="Your Message" rows={3} />
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">Send Message</Button>
      </Form>
    </Container>
  );
}

export default Contact;
