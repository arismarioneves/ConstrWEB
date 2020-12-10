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
    },
    {
      title: `Remodelação`,
      icon: Tassels,
      description: `Nossa equipe de especialistas tem anos de experiência na reforma de casas, incluindo cozinhas, porões etc.`,
    },
    {
      title: `Design de interiores`,
      icon: Ruler,
      description: `Nossos serviços de design de interiores são a melhor maneira de obter um design de casa que se adapte completamente a você.`,
    }
  ]
  return (
    <div className="services" id="services">
      <Container>
        <Row>
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
