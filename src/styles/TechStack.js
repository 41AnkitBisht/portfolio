import styled from "styled-components";


export const EachTech = styled.div`
display: flex;
flex: 1;
min-width : 300px;
border: 3px solid black;
border-radius : 10px;
padding: 10px;
@media (max-width : 768px){
    flex-direction : column;
}

`

export const TechHeading = styled.h1`
font-family: 'Khula';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
text-align: center;
`

export const TechImg = styled.div`
font-size: 30px;
`
export const TechP = styled.p`
font-family: 'Khula';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 25px;
/* identical to box height */



`
export const ExpImg = styled.img`
flex :1;
width : 100%;
object-fit : cover;
height : 200px;
`
export const TechDisplay = styled.div`
display: flex;
    gap: 10px;
    width: 80%;
    margin: auto;
    overflow: scroll;   
    @media (min-width: 768px){
    ${EachTech}:nth-child(even) ${TechP}{
        order : 2;
    } 
    ${EachTech}:nth-child(even) ${ExpImg}{
        order : 1;
    } 
}
`