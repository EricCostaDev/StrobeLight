import React from 'react'
import {ButtonContainer} from './styles'

interface IButtonProps{
  children?: any;
  width?: number;
  color?: string;
  type?: string;
  onClick?: any;
}


const Button = (props: IButtonProps) => {

  const { children, width, color, type, onClick } = props;

  return type === 'speed' ? (
  <ButtonContainer>
      <button className="btn btn-speed" onClick={onClick}>
      {children}
    </button>
  </ButtonContainer> 
  ):(
    <ButtonContainer>
        <button className="btn" onClick={onClick}>
        {children}
      </button>
    </ButtonContainer>
  )
}

export default Button
