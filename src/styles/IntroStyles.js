import styled from "styled-components";

export const IntroLine = styled.h1`
font-family: 'Khula';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 50px;
text-align : left;
@media (max-width : 768px){
    width : 100%;
    text-align : center;
}
`

export const IntroImgStyled = styled.img`
width : 100%;
object-fit : contain;
height: 500px;
@media (max-width : 450px){
    height: 300px;
}
`;