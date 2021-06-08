import React from "react";
import { image } from "/home/smsguy927/phase2/components-props/react-hooks-import-export-lab/src/data/user.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
export default About;
