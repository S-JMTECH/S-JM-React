import { Accordion, Container, Row, Col } from "react-bootstrap";
import whyUsImage from "../../assets/img/why-us.png";
import "./WhyUs.css";

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section-bg">
      <Container fluid data-aos="fade-up">
        <Row>
          <Col className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>
                En S-JM <strong>¿Qué hacemos?</strong>
              </h3>
              <p>
                Buscamos constantemente nuevas tecnologías y metodologías para
                ofrecer soluciones a la vanguardia del mercado, nos
                comprometemos con la entrega de soluciones de alta calidad que
                satisfagan y superen las expectativas de nuestros clientes y
                establecemos relaciones duraderas con nuestros clientes basadas
                en la confianza mutua y el trabajo en equipo.
              </p>
            </div>

            <Accordion className="accordion-list" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiong-list-1"
                  >
                    <span>01</span> Desarrollo de software personalizado{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                </Accordion.Header>
                <Accordion.Body
                  id="accordion-list-1"
                  className="collapse show"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Diseñamos y desarrollamos soluciones de software a medida,
                    adaptadas a las necesidades específicas de cada cliente.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                  >
                    <span>02</span> Aplicaciones móviles y web{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                </Accordion.Header>
                <Accordion.Body
                  id="accordion-list-2"
                  className="collapse show"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Creamos aplicaciones móviles y sitios web innovadores que
                    destacan por su funcionalidad, diseño intuitivo y
                    rendimiento excepcional.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                  >
                    <span>03</span> Mantenimiento y soporte{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                </Accordion.Header>
                <Accordion.Body
                  id="acordion-list-3"
                  className="collapse show"
                  data-bs-parent=".accordion-list"
                >
                  <p>
                    Ofrecemos servicios de mantenimiento continuo y soporte
                    técnico para garantizar el rendimiento y la confiabilidad de
                    las soluciones desarrolladas por S-JM.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: `url(${whyUsImage})` }}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            &nbsp;
          </div>
        </Row>
      </Container>
    </section>
  );
}
