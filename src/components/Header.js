import React from "react";
import {
  Styleddisplayflex,
  Styleddisplaynav,
  Styledheader,
  StyledNavigation,
} from "../styles/Headerstyles";

const navigationitem = ["TechStack", "Experience", "Hobbies", "Contact"];

const Header = () => {
  return (
    <Styleddisplayflex>
      <Styledheader>Bugsy</Styledheader>
      <Styleddisplaynav>
        {navigationitem.map((item, index) => (
          <StyledNavigation key={index}>{item}</StyledNavigation>
        ))}
      </Styleddisplaynav>
    </Styleddisplayflex>
  );
};

export default Header;
