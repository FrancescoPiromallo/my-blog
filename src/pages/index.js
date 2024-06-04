import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Benvenuto nel mio Blog</h1>
    <p>Questo è un blog creato con Gatsby e React. Usa i link sopra per navigare tra le pagine.</p>
    <ul>
      <li>
        <Link to="/about">Chi sono</Link>
      </li>
      <li>
        <Link to="/projects">I miei progetti</Link>
      </li>
      <li>
        <Link to="/contact">Contatti</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
