import React from "react"
import { Container } from "reactstrap"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import "./principal.scss"

const Hero = ({ title, description }) => {
  return (
    <div className="principal" id="principal">
      <section className="h-100 d-flex align-items-center text-center bg-dark-40">
        <Container>
          <main className="principal-content">
            <h1 className="title">{title}</h1>
            <hr className="h-separator" />
            <p className="principal-description">{description}</p>
            <section className="principal-buttons">
              <Button href="#services">Conheça-nos</Button>
              <Link to="projects/#project">
                <Button outline>Projetos</Button>
              </Link>
            </section>
          </main>
        </Container>
      </section>
    </div>
  )
}

export default Hero
