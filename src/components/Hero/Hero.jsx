import { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";
import imgURL from '../../assets/img/hero-img.png';
import './Hero.css';


const TypingText = () => {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [text, setText] = useState('');
  const texts = ["Business", "Startup", "Agency"];

  useEffect(() => {
    const typeWriter = () => {
      if (i < texts[j].length) {
        setText(texts[j].slice(0, i + 1));
        setI(i + 1);
      } else {
        setI(0);
        setJ((j + 1) % texts.length);
        setText("");
      }
    };

    const timeoutId = setTimeout(typeWriter, i < texts[j].length ? 75 : 1000);
    return () => clearTimeout(timeoutId); // Limpieza al desmontar o cambiar de estado
  }, [i, j, text]); // Efecto de repetición al cambiar i, j o el texto

  return (
    <div id="typed-text">
      {text}
      <span className='ityped-cursor'>|</span>
    </div>
  );
};

export default function Hero() {
  
  return(
    <section id="hero" className="d-flex align-items-center">
      <Container>
        <Row>
          <Col className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>La Mejor Solución Para Tu {TypingText()}</h1>
            <h2>Somos un equipo de desarrolladores de software con talento que creamos sitios web adaptados a sus necesidades.</h2>
            {/* TO DO "Get Started" */}
          </Col>
          <Col className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <Image src={imgURL} fluid className="animated" alt="Vector image of an stylized man and two women surrounding a big laptop" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
