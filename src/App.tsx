import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Slider from '@material-ui/core/Slider';
import Teste from './Teste'
import {ControlContainer, SpeedContainer, TabWrapper} from './Styles/styles'
import Button from './Components/Button';
import Inputs from './Components/Inputs';

function App() {

  let [bgColor,setBgColor] = useState('white')
  let [timeFrames, setTime] = useState(1000)
  let [colors, setColors] = useState({0: 'white',1: 'white', 2: 'white'})

  let cont = 0;
  let cores = ['red','green','blue'];

  function colorOne (e:any){
    console.log(e.target.value)
    setColors({...colors, 0 : e.target.value.toString()})
  }
  function colorTwo(e:any) {
    console.log(e.target.value)
    setColors({...colors,1 : e.target.value.toString()})
  }
  function colorThree(e:any) {
    console.log(e.target.value)
    setColors({...colors,2 : e.target.value.toString()})
  }

  let [speed, setSpeed] = useState(1);
  let [blinkSpeed, setBlinkSpeed] = useState(100);

  function setSpeedValue (e: string){
    if (e === 'sum'){
      setSpeed(speed+=1)
    }
    else{
      if (speed === 1){
        setSpeed(1)
      }else{
        setSpeed(speed -= 1)
      }
      
    }
    setBlinkSpeed(speed * blinkSpeed)
    console.log('velocidade: ', speed * blinkSpeed)
  }

  return (
    <TabWrapper className="App-header" time={`${blinkSpeed}ms`} colors={[colors[0], colors[1], colors[2], colors[2]]} >

      <ControlContainer>

          <Button>
            Hide menu
          </Button>

        <Inputs onChange={colorOne}/>
        <Inputs onChange={colorTwo}/>
        <Inputs onChange={colorThree}/>
        

        <SpeedContainer>
          <p>Blink speed</p>
          <Button type="speed" onClick={() => setSpeedValue('minus')}>+</Button>
          <Button type="speed" onClick={() => setSpeedValue('sum')} >-</Button>
        </SpeedContainer>
      </ControlContainer>

    </TabWrapper>
  );
}

export default App;
