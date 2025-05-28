import { Container, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(`Error: ${result.message || "Unable to send message"}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-wrapper">
      <Container id="contact">
        <h2 className="text-center">Contact Me</h2>
        <p className="text-center contact-info">
          Email: <a href="mailto:cfpisaca@gmail.com" className="email-link">cfpisaca@gmail.com</a><br />
          Phone: <a href="tel:9177691809" className="phone-link">917-769-1809</a><br />
          Or just fill out this form
        </p>
        <Form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="49cb5a32-e81e-4e3b-bc68-c96af2518147" />
          <Form.Group controlId="name">
            <Form.Control type="text" name="name" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group controlId="email" className="form-spacing">
            <Form.Control type="email" name="email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group controlId="message" className="form-spacing">
            <Form.Control as="textarea" name="message" placeholder="Your Message" rows={3} required />
          </Form.Group>
          <Button type="submit" variant="primary" className="submit-button">Send Message</Button>
        </Form>
        {status && <p className="status-message">{status}</p>}
      </Container>

      <footer className="contact-footer">
        <p><strong>Portfolio ends here.</strong></p>
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
