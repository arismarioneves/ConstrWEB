import React from "react"

import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"

// ---------- Themes colors ----------
import "../themes/green.scss"
import "../themes/orange.scss"

// ---------- Components ----------
import Principal from "../components/principal"
import Servicos from "../components/services"
import Sobre from "../components/about"
import Contato from "../components/quote"
import Projetos from "../components/feature"
import Atividades from "../components/news"

const IndexPage = ({ data }) => {
  const { fullTitle, description, about } = data.site.siteMetadata

  return (
    <div>
      <Principal title={fullTitle} description={description} />
      <Servicos />
      <Sobre about={about} />
      <Projetos
        title="Projetos em Destaque"
        projects={data.allProjectsJson.edges}
      />
      <Contato />
      <Atividades />
    </div>
  )
}

export const projectsQuery = graphql`
  query FeaturedProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          slug
          category
          description
          img {
            src
            orig
            author
          }
          completionDate
          amount
          duration
          owner
          address
          featured
        }
      }
    }
    site {
      siteMetadata {
        fullTitle
        description
        about
      }
    }
  }
`

export default IndexPage
