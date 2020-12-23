import React from "react" 
import Common from "./Common";
import team from "../src/images/team.webp";

const Home = () => {
  return (
    <>
     <Common 
      name="Grow Your Business With "
      imgsrc={team}
      visit="/Service"
      btname="Let's Start" />  
    </>
  );
};

export default Home;
