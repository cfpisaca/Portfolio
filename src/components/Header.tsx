import { Container, Button } from 'react-bootstrap';

function Header() {
  return (
    <header className="masthead d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#333', color: '#fff' }}>
      <Container className="text-center">
        <h1 className="mb-3">Carlo Pisacane</h1>
        <p className="lead mb-4">Software Engineer @ Syracuse University</p>
        <Button variant="light" href="#about" className="js-scroll-trigger">Enter Portfolio</Button>
      </Container>
    </header>
  );
}

export default Header;
