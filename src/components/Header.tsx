import { Container, Button } from 'react-bootstrap';
import ProfilePic from "../assets/images/profilepic2.png";
import './Header.css';

function Header() {
  return (
    <>
      <header className="masthead d-flex align-items-center justify-content-center">
        <Container className="text-center">
          <div className="header-image-wrapper">
            <img 
              src={ProfilePic} 
              alt="Carlo Pisacane" 
              className="header-image mb-3"
            />
          </div>
          <h1 className="header-title mb-3"><strong>Carlo Pisacane</strong></h1>
          <p className="header-subtitle lead mb-4">Honors Computer Science Student @ Syracuse University</p>
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
