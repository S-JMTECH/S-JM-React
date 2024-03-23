import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgURL from "../../assets/img/innovacode202.png";
import './Header.css';


export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <Container className="d-flex align-items-center">
        <Image 
          src={imgURL}
          alt="S-JM Logo"
          fluid
          className="logo me-auto"
        />

        <Navbar id="navbar" className="navbar">
          <Nav>
            <Nav.Link as={Link} to="#hero">Home</Nav.Link>
            <Nav.Link as={Link} to="#about">About</Nav.Link>
            <Nav.Link as={Link} to="#services">Services</Nav.Link>
            <Nav.Link as={Link} to="#contact">Contact Us</Nav.Link>
          </Nav>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </Navbar>
      </Container>
    </header>
  );
}
