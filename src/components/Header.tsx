import { Container, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <>
      <header className="masthead d-flex align-items-center justify-content-center">
        <Container className="text-center">
          <h1 className="header-title mb-3"><strong>Carlo Pisacane</strong></h1>
          <p className="header-subtitle lead mb-4">Computer Science Student at Syracuse University</p>
          <div className="development-banner">
            This portfolio is still under development.
          </div>
          <Button 
            variant="light" 
            href="#about" 
            className="js-scroll-trigger"
            aria-label="Enter Portfolio"
          >
            Enter Portfolio
          </Button>
        </Container>
      </header>
    </>
  );
}

export default Header;
