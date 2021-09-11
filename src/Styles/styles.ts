import styled, { css, keyframes } from 'styled-components'

interface MyProps{
  colors: Array<string>,
  time: string,
}

export const TabWrapper = styled.div`
 background-color: white;
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 animation: teste ${(props: MyProps) => props.time} linear 0s infinite alternate;
 background-color: ${(props: MyProps) => props.colors[0]};
  
 @keyframes teste {
  0% {background-color: ${(props: MyProps) => props.colors[0]};}
 25%  {background-color: ${(props: MyProps) => props.colors[1]};}
 50%  {background-color: ${(props: MyProps) => props.colors[2]};}
 100% {background-color: ${(props: MyProps) => props.colors[3]};}
 }

`;
 
export const ControlContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  padding: 20px;
`;

export const SpeedContainer = styled.div`
  display: flex;
  
`


