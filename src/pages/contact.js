import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const ContactPage = () => (
  <Layout>
    <h1>Contatti</h1>
    <p>Puoi contattarmi via email a: <a href="mailto:tuoemail@example.com">tuoemail@example.com</a></p>
    <p>Oppure seguimi sui social media:</p>
    <ul>
      <li><a href="https://twitter.com/tuoprofilo">Twitter</a></li>
      <li><a href="https://linkedin.com/in/tuoprofilo">LinkedIn</a></li>
    </ul>
    <Link to="/">Torna alla Home</Link>
  </Layout>
);

export default ContactPage;
