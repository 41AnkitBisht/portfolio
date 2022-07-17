import styled from "styled-components";

export const Styleddisplayflex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  @media (max-width : 768px){
    flex-direction : column;
    width :90%;
  }
`;

export const Styledheader = styled.h1`
  font-family: "Khula";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 45px;
  /* or 132% */

  color: #0b1827;
  flex: 1;
  text-align: left;
  @media (max-width : 768px){
    width : 100%;
    text-align : center;
}
`;

export const StyledNavigation = styled.div`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  color: #4d4d4d;
`;

export const Styleddisplaynav = styled.div`
flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`