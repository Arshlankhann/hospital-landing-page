import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Subscribe from "../components/Subscribe";
import Specialist from "../components/Specialist"
import Contact from "../components/Contact";
import Services from "../components/Services"


const IndexPage = () => {
  return (
    <Layout>
      {/* Each section is a separate component for clarity */}
      <Hero />
      <Services />
      <Specialist />
      <Subscribe />
      <Reviews />
      <Contact/>
    </Layout>
  );
};

export default IndexPage;
