import React from "react";
import { Styleddisplayflex } from "../styles/Headerstyles";
import { IntroImgStyled, IntroLine } from "../styles/IntroStyles";
import coder from "../images/Coder.jpg"



const Intro = () => {
    return<Styleddisplayflex>
        <div style={{display : 'flex', alignItems : 'center', width: '100%'}}>
     <IntroLine >
        Hi 👋, I am Ankit Bisht <br/>
        I do websites for fun 🤔
    </IntroLine>
    </div>
    <IntroImgStyled src={coder} alt="coder" />
    </Styleddisplayflex>
}

export default Intro;