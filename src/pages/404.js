import React from "react"
import { Container } from "reactstrap"

const NotFoundPage = () => (
  <section className="page-404 section-lg">
    <Container>
      <header>
        <h1>404</h1>
        <h2>NÃO ENCONTRADO</h2>
      </header>
      <p>Você acabou de pegar um caminho que não existe... a tristeza.</p>
    </Container>
  </section>
)

export default NotFoundPage
