import * as React from "react";
import Navbar from "../components/navbar";
import IntroBlock from "../components/introBlock";
import FeaturedImage from "../components/featuredImage";
import "../sass/basics.scss";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <IntroBlock />
      <FeaturedImage />
    </>
  );
};

export default IndexPage;
