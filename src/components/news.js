import React from "react"
import { Container, Row, Col } from "reactstrap"

import NewsCard from "./newsCard"

import imgBuilding from "../images/news/building.jpg"
import imgSeminar from "../images/news/seminar.jpg"
import imgTeamBuilding from "../images/news/team-building.jpg"

const companyNews = [
  {
    title: `Seminário ISO 2019`,
    date: `Mar. 23, 2016`,
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque debitis quis corporis magni cupiditate aperiam autem. Nostrum, fugit dolor.`,
    img: imgSeminar,
    slug: `iso-seminars-2019`,
  },
  {
    title: `Acompanhamento de Obras`,
    date: `May. 19, 2019`,
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorem, magnam praesentium dignissimos repellendus eveniet!`,
    img: imgBuilding,
    slug: `tpcenter-construction`,
  },
  {
    title: `Formação de equipes 2018`,
    date: `August. 5, 2019`,
    about: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quibusdam similique provident quo vitae odio suscipit dicta cupiditate?`,
    img: imgTeamBuilding,
    slug: `company-teambuilding2019`,
  },
]

const Atividades = () => {
  return (
    <div className="news section-lg bg-light-gray">
      <Container>
        <h2 className="header-title font-weight-bold text-center text-uppercase">
          Atividades
        </h2>
        <Row>
          {companyNews.map(news => {
            return (
              <Col lg="4" md="6" sm="12">
                <NewsCard news={news} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Atividades
