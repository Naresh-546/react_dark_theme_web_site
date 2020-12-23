import React from "react";
import Common from "./Common";
import team2 from "../src/images/team2.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome To The About Page"
        imgsrc={team2}
        visit="/Contact"s
        btname="Contact Here"
      />
    </>
  );
};

export default About;
