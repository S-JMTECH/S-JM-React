import { Col, Container, Row } from "react-bootstrap";
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about">
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <Row className="row content">
          <Col className="col-lg-6">
            <p>
              Somos una empresa de desarrollo de software especializada en
              impulsar la innovación y transformación digital en tu negocio.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i>
                  Software a medida para tus necesidades.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Automatización de tareas repetitivas.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Integración de diferentes sistemas.
              </li>
              <li>
                <i className="ri-check-double-line"></i>
                Apliaciones web y móviles intuitivas.
              </li>
            </ul>
          </Col>
          <Col className="col-lg-6 pt-4 pt-lg-0">
            <p>
              En Innovacode, nos regimos por principios fundamentales de
              innovación, calidad y compromiso. Valoramos la colaboración
              estrecha de nuestros clientes, fomentando relaciones duraderas
              basadas en la confianza mutua. Nuestra misión es ser impulsores
              de la excelencia tecnológica, proporcionando soluciones que no
              solo cumplan, sino que superen las expectativas de nuestros
              clientes.
            </p>
            {/* en caso de mas informacion ejemplo: fotos e informacion de los integrantes */}
            {/* <a href="#" class="btn-learn-more">Learn More</a> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
