import React from 'react'
import { InputContainer } from './styles';

interface IInputProps{
  width?: string;
  onChange?: any;
}


const Input = (props: IInputProps) => {

  const { width, onChange, ...otherProps } = props;

  return (
    <InputContainer>
      <input type="color" className="input" onChange={onChange} {...otherProps} />
    </InputContainer>
  )
}

export default Input
