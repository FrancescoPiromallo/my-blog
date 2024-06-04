import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout>
    <h1>Chi sono</h1>
    <p>Ciao! Sono Francesco, uno sviluppatore Full Stack appassionato di tecnologia e programmazione. Mi piace creare soluzioni innovative e condividere la mia conoscenza con gli altri.</p>
    <Link to="/">Torna alla Home</Link>
  </Layout>
);

export default AboutPage;
