import React from "react";
import Connected from "../components/Connected";
import AboutMain from "../components/AboutMain";
import AboutStory from "../components/AboutStory";
import AboutCard from "../components/AboutCard";
import AboutCardHead from "../components/AboutCardHead";
import AboutCounter from "../components/AboutCounter";

const AboutPage = () => {
  return (
    <div>
      <AboutMain />
      <AboutStory />
      <AboutCardHead />
      <AboutCard />
      <AboutCounter/>
    </div>
  );
};

export default AboutPage;
