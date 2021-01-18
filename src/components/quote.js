import React from "react"
import { Container, Button } from "reactstrap"
import { Link } from "gatsby"
import "./quote.scss"

const Contato = () => {
  return (
    <div className="quote" id="quote">
      <section className="parallax-container">
        <div className="theme-wrapper">
          <div className="parallax-content section-lg">
            <Container className="flex-sb">
              <h3>Procurando um construtor de alta qualidade para seu projeto?</h3>
              <Link to="/contato/#contato" className="center">
                <Button>Fale conosco</Button>
              </Link>
            </Container>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
