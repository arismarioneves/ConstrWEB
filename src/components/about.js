import React from "react"
import { Container, Row, Col, Button } from "reactstrap"
import { Link } from "gatsby"
import List2 from "../components/list2"

import Square from "../assets/svg/solid/square.svg"
import companyThumbnail from "../images/company.jpg"

import "./about.scss"

const Sobre = ({ about }) => {
  return (
    <div className="about section-lg">
      <Container>
        <Row>
          <Col md="6">
            <section className="about-content mx-5">
              <h2 className="header-title font-weight-bold text-uppercase">
                Sobre
              </h2>
              <p className="about-description font-size-90 text-secondary my-2">
                {about}
              </p>
              <ul className="list-unstyled mt-3">
                <li>
                  <List2
                    svg={<Square />}
                    svgSize="sm"
                    value="Equipe Profissional"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    svgSize="sm"
                    value="Relatórios Regulares"
                    className="font-weight-bold my-2"
                  />
                </li>
                <li>
                  <List2
                    svg={<Square />}
                    svgSize="sm"
                    value="Materiais de Qualidade"
                    className="font-weight-bold my-2"
                  />
                </li>
              </ul>
              <Link to="/about/#about" className="about-btn-lnk">
                <Button>Ler mais</Button>
              </Link>
            </section>
          </Col>
          <Col md="6">
            <section className="about-thumbnail">
              <img
                src={companyThumbnail}
                alt="Company Thumbnail"
                className="img-thumbnail"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Sobre
