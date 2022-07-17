import React from "react";
import toptech from "../images/toptech.jpg"
import travelling from "../images/travel.jpg"
import cycling from "../images/cycling.jpg"
import { IntroLine } from "../styles/IntroStyles";
import {  TechDisplay, TechP } from "../styles/TechStack";

const techarr = [
    {
      imgsrc: toptech,
      para: "Keen to learn about all the new technology, interested in knowing what new doors do they open, curious to learn how they work. ",
    },
    {
      imgsrc:  travelling,
      para: "New places, new people i'm all up for it. Travelling opens up new creative ideas, makes me understand that there is more to explore. ",
    },
    {
      imgsrc:  cycling,
      para: "Always ready for a ride whether it be a cycle or a bike. Cycling might be the most effcient way to travel while being in your fittest form.",
    },
   
  ];
const Hobbies = () => {
    return (
        <>
          <div style={{ margin: "auto", width: "80%" }}>
            {" "}
            <IntroLine >When i am not coding...</IntroLine>
          </div>
          <TechDisplay style={{flexWrap: 'wrap'}}>
            {techarr.map((item, index) => (
              <div style={{width: 371, border: '3px solid black'}}>
                <img style={{width : '100%', height : '200px'}} src={item.imgsrc} alt="coder" />
                <TechP style={{fontSize: '20px', padding: 10}}>{item.para}</TechP>
              </div>
            ))}
          </TechDisplay>
        </>
      );
}

export default Hobbies