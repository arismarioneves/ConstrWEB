import React from "react"
import { graphql } from "gatsby"

import Project from "../components/project"
import Servicos from "../components/services"

const ProjectPage = ({ data }) => {
  return (
    <>
      <Project
        title="Completed Projects"
        projects={data.allProjectsJson.edges}
      />
      <Servicos />
    </>
  )
}
export const projectsQuery = graphql`
  query AllProjectsQuery {
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
        }
      }
    }
  }
`
export default ProjectPage
