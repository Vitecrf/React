import React, {useEffect} from 'react';

import './App.css';
import TimerCL from './components/TimerCL';
import Color from "./components/Color";
import InputData from "./components/InputData";
import timeZones from "./config/time-zones";
type ComponentNames = "input" | "timer" | "color";

function App() {
    const [timeZone, setTimeZone] = React.useState("Asia/Jerusalem")
    const [color, setColor] = React.useState("red");
    const [componentName, setComponentName] = React.useState<ComponentNames>('input');
    const mapComponents: Map<ComponentNames, React.ReactNode> = new Map();

    mapComponents.set("color", <Color color={color}/>);
    mapComponents.set("input", <InputData timeZones={timeZones} injectTimeZone={setTimeZone} injectColor={setColor}/>);
    mapComponents.set("timer", <TimerCL timeZone={timeZone}/>);
  return(
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          {Array.from(mapComponents.keys()).map(k => <button className="button" onClick={() => setComponentName(k)}>{k}</button>)}
          {mapComponents.get(componentName)}
          {/*<Color color={"red"}/>*/}
          {/*<InputData timeZones={timeZones} injectTimeZone={setTimeZone}/>*/}
          {/*<TimerCL interval={1000} timeZone={timeZone}/>*/}
      </div>
  )
}

export default App;
