import React from "react";
import quiz from "../images/quizapp.jpeg"
import fb from "../images/fb.png"
import { IntroLine } from "../styles/IntroStyles";
import { EachTech, ExpImg, TechDisplay, TechP } from "../styles/TechStack";

const techarr = [
    {
      imgsrc: quiz,
      para: " Design and implementation of fun games on the web to make learning fun while working with React, Redux, Git.",
    },
    {
      imgsrc:  fb,
      para: "Built a social web app with features to sign-in, register, post/ upload images while working with React, Material UI, Firebase.",
    },
    
  ];
const Experience = () => {
    return (
        <>
          <div style={{ margin: "auto", width: "80%" }}>
            {" "}
            <IntroLine >Experience</IntroLine>
          </div>
          <TechDisplay style={{flexDirection: 'column'}} >
            {techarr.map((item, index) => (
              <EachTech style={{borderRadius: '0px', padding: 0}}>
                <TechP style={{fontSize: '20px'}}>{item.para}</TechP>
                <ExpImg  src={item.imgsrc} alt="coder" />
              </EachTech>
            ))}
          </TechDisplay>
        </>
      );
}

export default Experience