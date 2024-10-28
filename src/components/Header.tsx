import { Container, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header className="masthead d-flex align-items-center justify-content-center">
      <Container className="text-center">
        <h1 className="header-title mb-3">Carlo Pisacane</h1>
        <p className="header-subtitle lead mb-4">Software Engineer @ Syracuse University</p>
        <Button variant="light" href="#about" className="js-scroll-trigger">Enter Portfolio</Button>
      </Container>
    </header>
  );
}

export default Header;
