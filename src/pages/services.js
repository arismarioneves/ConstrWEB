import React from "react"
import { Container, Row, Col } from "reactstrap"

import PageHeader from "../components/pageHeader"
import Service from "../components/service"

import Bulldozer from "../images/icons/icon-bulldozer-74x74.png"
import Tassels from "../images/icons/icon-tassels-70x70.png"
import Ruler from "../images/icons/icon-ruler-45x71.png"
import Suitcase from "../images/icons/icon-suitcase-73x57.png"
import Relues from "../images/icons/icon-relues-63x64.png"
import Helmet from "../images/icons/icon-helmet-67x65.png"

const ServicesPage = () => {
  const card = [
    {
      title: `Construção`,
      icon: Bulldozer,
      description: `Fornecemos serviços de construção de alta qualidade para os mercados de energia, água e telecomunicações.`,
    },
    {
      title: `Contratante`,
      icon: Suitcase,
      description: `O contratante pode gerenciar e contratar subcontratados enquanto atua como o principal contato com os clientes de construção.`,
    },
    {
      title: `Pré-construção`,
      icon: Relues,
      description: `A pré-construção envolve a execução de um planejamento preliminar e engenharia para definir o projeto.`,
    }
  ]
  return (
    <section id="services">
      <PageHeader title="Serviços" />
      <section className="services">
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
      </section>
    </section>
  )
}

export default ServicesPage
