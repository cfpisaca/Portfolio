import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import Resume from "../assets/docs/resume.pdf";
import './Navbar.css';

function PortfolioNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="portfolio-navbar">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Carlo Pisacane
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#thesis">Thesis</Nav.Link> 
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href={Resume} target="_blank" className="resume-link">
              <FaFilePdf className="pdf-icon" /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
