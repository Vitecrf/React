import React from "react";


type Props = {
    timeZones: any[],
    injectTimeZone: (timeZone: string) => void
    injectColor: (color: string)=> void
}
let selectElem: any;
let colorElem: any;
const InputData: React.FC<Props> = ({timeZones, injectTimeZone, injectColor}) =>{
    const [color, setColor] = React.useState('');
    function onSelect(){
        injectTimeZone(selectElem.value)
    }
    function onSelectColor(){
        injectColor(colorElem.value)
        setColor(colorElem.value)
    }
    React.useEffect(() =>{
        selectElem = document.getElementById('selectInputData');
    }, [])
    React.useEffect(()=>{
        colorElem = document.getElementById('color');
    }, [])

    return(
        <div >
            <select style={{height: '50px'}} id="selectInputData">
                {timeZones.map(tz => <option value={tz.name}>
                    {tz.name}
                </option>)}
            </select>
            <button onClick={onSelect} style={{width: '70px', height: '50px'}}>Go</button>
        <div style={{marginLeft: '20px', display: 'flex'}}>
            <input style={{height: '50px'}} type="color" id="color" />
            <button style={{width: '70px', height: '50px', fontSize: '16px', color: color}} onClick={onSelectColor}>Color</button>
            <div>{color}</div>
        </div>

        </div>
    )
}

export default InputData;
