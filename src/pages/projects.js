import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const ProjectsPage = () => (
  <Layout>
    <h1>I miei progetti</h1>
    <p>Ecco alcuni dei progetti su cui ho lavorato:</p>
    <ul>
      <li><strong>Progetto 1:</strong> Descrizione del progetto 1.</li>
      <li><strong>Progetto 2:</strong> Descrizione del progetto 2.</li>
      <li><strong>Progetto 3:</strong> Descrizione del progetto 3.</li>
    </ul>
    <Link to="/">Torna alla Home</Link>
  </Layout>
);

export default ProjectsPage;
