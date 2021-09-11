import styled from "styled-components"


interface IInputProps {
  width?: number;
  color?: string;
}

export const InputContainer = styled.div`
  display: flex;
  .input{
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props:IInputProps ) => props.width ? props.width : '32px'};
    height: 32px;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    box-shadow: 0px 0px 1px rgba(0,0,0,0.25);
    margin-left: 5px;

  }

  input[type="color"] {
	-webkit-appearance: none;
	border: none;
	width: 28px;
	height: 28px;
  border-radius: 50%;
}
input[type="color"]::-webkit-color-swatch-wrapper {
	padding: 0;
  border-radius: 50%;
}
input[type="color"]::-webkit-color-swatch {
	border: none;
  border-radius: 50%;
}

  .input::after{
    border-radius: 50%;
  }
`

export const Teste = styled.div`
  display: flex;
`