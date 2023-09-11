import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Work from "../components/Work"

const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PROJECTS." text="Some of my project works." />
      <Work />
      <Footer />
    </div>
  );
};

export default project;
