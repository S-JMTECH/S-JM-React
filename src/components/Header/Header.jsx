import { useState, useEffect } from 'react';
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgURL from "../../assets/img/innovacode202.png";
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'contact'];
      let current;
    
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 200) {
          current = id;
        }
      });
    
      setActiveLink(current);
    };
    

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('scroll', handleScroll);
    checkScroll(); // check immediately on mount
    handleScroll(); // check immediately on mount

    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`fixed-top ${isScrolled ? 'header-scrolled' : ''}`}>
      <Container className="d-flex align-items-center">
        <Image 
          src={imgURL}
          alt="S-JM Logo"
          fluid
          className="logo me-auto"
        />
        <Navbar id="navbar" className="navbar">
          <Nav>
            <Nav.Link as={Link} to="#hero" className={activeLink === 'hero' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link as={Link} to="#about" className={activeLink === 'about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link as={Link} to="#services" className={activeLink === 'services' ? 'active' : ''}>Services</Nav.Link>
            <Nav.Link as={Link} to="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact Us</Nav.Link>
          </Nav>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </Navbar>
      </Container>
    </header>
  );
}
