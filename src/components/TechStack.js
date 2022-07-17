import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTsnode } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import {
  EachTech,
  TechDisplay,
  TechHeading,
  TechImg,
  TechP,
} from "../styles/TechStack";
import { IntroLine } from "../styles/IntroStyles";

const techarr = [
  {
    heading: "ReactJS",
    imgsrc: <FaReact />,
    para: " React is a free and open-source front-end JavaScript library forbuilding user interfaces based on UI components.",
  },
  {
    heading: "CSS",
    imgsrc: <FaCss3Alt />,
    para: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. ",
  },
  {
    heading: "TypeScript",
    imgsrc: <SiTsnode />,
    para: "TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. ",
  },
  {
    heading: "NodeJS",
    imgsrc: <FaNodeJs />,
    para: "Node.js is a cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
  },
  {
    heading: "AWS",
    imgsrc: <FaAws />,
    para: "Amazon Web Services provides on-demand cloud computing platforms and APIs .",
  },
  
];

const TechStack = () => {
  return (
    <>
      <div style={{ margin: "auto", width: "80%" }}>
        {" "}
        <IntroLine >Tech Stack</IntroLine>
      </div>
      <TechDisplay>
        {techarr.map((item, index) => (
          <>
          <EachTech style={{display: 'flex', flexDirection : 'column'}}>
            <TechHeading> {item.heading}</TechHeading>
            <TechImg> {item.imgsrc}</TechImg>
            <TechP>{item.para}</TechP>
          </EachTech>
          
          </>
        ))}
      </TechDisplay>
    </>
  );
};

export default TechStack;
