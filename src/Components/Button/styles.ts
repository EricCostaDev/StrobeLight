import styled from "styled-components"


interface IBtnProps {
  width?: number;
  color?: string;
}

export const ButtonContainer = styled.div`
  display: flex;
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props:IBtnProps ) => props.width ? props.width : '100px'};
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: ${(props:IBtnProps ) => props.color ? props.color : 'grey'};
    color: white;
    cursor: pointer;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.25);
  }
  .btn-speed{
    height: 32px;
    width: 20px;
    padding: 0;
    border-radius: 0;
  }

  .btn:hover{
    opacity: 0.9;
  }

`

export const Teste = styled.div`
  display: flex;
`