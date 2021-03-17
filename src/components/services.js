import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./service"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"

const Servicos = () => {
  const card = [
	{
      title: `Construção`,
      icon: Bulldozer,
      description: `Fornecemos serviços de construção de alta qualidade para os mercados de energia, água e telecomunicações.`,
    }
  ]
  return (
    <div className="services" id="services">
      <Container>
        <Row className="justify-content-center">
          {card.map(service => {
            return (
              <Col md="6" lg="4">
                <Service services={service} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Servicos
