import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import PhotoViewer from "../components/photoViewer"
import List1 from "../components/list1"

import User from "../assets/svg/solid/user.svg"
import Pin from "../assets/svg/solid/map-marker-alt.svg"
import Calendar from "../assets/svg/solid/calendar-alt.svg"
import Bill from "../assets/svg/solid/money-bill-wave.svg"
import CalendarCheck from "../assets/svg/solid/calendar-check.svg"
import Hardhat from "../assets/svg/solid/hard-hat.svg"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      category
      description
      img {
        src
        orig
        author
      }
      completionDate
      duration
      owner
      address
    }
  }
`

const SingeProject = props => {
  const {
    title,
    category,
    description,
    img,
    completionDate,
    owner,
    address,
  } = props.data.projectsJson

  return (
    <main className="singe-project section-lg" id="single-project">
      <Container>
        <Row>
          <Col lg="5" className="proj-details">
            <h2 className="header-title text-center text-capitalize">
              {title}
            </h2>
            <p className="description text-secondary">{description}</p>
            <section className="details mt-5 mb-5">
              <List1
                className="font-size-120"
                svg={<User />}
                title="Proprietário"
                value={owner}
              />
              <hr />
              <List1
                className="font-size-120"
                svg={<Pin />}
                title="Localização"
                value={address}
              />
              <hr />
              <List1
                className="font-size-120"
                svg={<Hardhat />}
                title="Escopo"
                value={category.map((cat, index, category) =>
                  index === category.length - 1 ? cat : cat + ", "
                )}
              />
              <hr />
              <List1
                className="font-size-120"
                svg={<CalendarCheck />}
                title="Conclusão"
                value={completionDate}
              />
            </section>
          </Col>
          <Col lg="7" className="proj-photos">
            <PhotoViewer list={img} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default SingeProject
