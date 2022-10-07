import React from "react";
import Benefits from "../../components/benefits/Benefits";
import DiscoverMarket from "../../components/dicoverMarket/DiscoverMarket";
import Feedback from "../../components/feedback/Feedback";
import GetStarted from "../../components/getStarted/GetStarted";
import Hero from "../../components/hero/hero";
import HeroCard from "../../components/heroCard/HeroCard";
import OurBlog from "../../components/ourBlog/OurBlog";
import WithUs from "../../components/withus/WithUs";
import Aboutus from "../about-us/Aboutus";
import CaseStudy from "../case-study/CaseStudy";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroCard />
      <Aboutus />
      <Benefits />
      <DiscoverMarket />
      <Feedback />
      <CaseStudy />
      <WithUs />
      <GetStarted />
      <OurBlog />
    </>
  );
};

export default Home;
