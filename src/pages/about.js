import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `A Construtora Sakara é especializada nas áreas de Arquitetura e Construção, atuando há mais de 35 anos, tendo projetado e executado obras de habitação individual, coletiva, comerciais, industriais, hotelaria e outras.`,
    `Além de elaboração de projetos e obras, nossa experiência está na execução de empreendimentos próprios, conseguindo êxito nestes ambientes, o que nos da confiabilidade e certeza nos negócios.`,
    `Atualmente são poucas as tendências arquitetônicas, e as que permanecem simbolizam o aprimoramento cultural, tecnológico, tornando-se excelência, ou seja, na valorização do concreto aparente, pois o concreto armado serve não só como sistema estrutural e sim decisório no projeto, como manifestação estética e plástica do concreto armado (grandes vãos, estruturas suspensas, pretendidos, jardins internos, pré-moldados).`,
  ]
  return (
    <section id="about">
      <PageHeader title="Sobre" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Missão">
                <p>
                  A <strong>{fullTitle}</strong> busca construir e comercializar imóveis
                  visando sempre a excelência e o pleno atendimento às necessidades e
                  expectativas de nossos clientes.</p>
                <p>Nossas missões diárias</p>
                <ol>
                  <li>Fornecer atendimento incrível para nossos clientes.</li>
                  <li>Fornecer uma combinação de serviços para uma variedade de setores e localizações geográficas.</li>
                  <li>Melhorar continuamente a comunicação com nossos clientes e entre departamentos.</li>
                  <li>Fornecer treinamento para aprimoramento de pessoal.</li>
                  <li>Recrutar e contratar apenas aqueles que compartilham de nossa visão.</li>
                </ol>
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Visão">
                <p>
                  Ser cada vez mais conhecida pela confiabilidade, qualidade e
                  inovação na construção e comercialização de imóveis.
                </p>
              </AboutCard>
              <AboutCard title="Valores">
                <p>
                  Após vários anos, conseguimos ter uma diretriz que evoluiu a nossa postura profissional
                  além da técnica e qualidade, até conseguimos definir uma <strong>TENDÊNCIA</strong>.
                </p>
                <ul>
                  <li>Profissionalismo</li>
                  <li>Comprometimento</li>
                  <li>Integridade</li>
                </ul>
              </AboutCard>
            </Col>
          </Row>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
