import React, {useEffect} from "react";
import './timer.css';

type Props = {
    interval?: number,
    locales?: string,
    timeZone?: string
}
const Timer: React.FC<Props> = ({interval, locales, timeZone}) =>{
    const [date, setDate] = React.useState(new Date());
    // const [hours, setHors] = React.useState(date.getHours() * 30);
    // const [minutes, setMinutes] = React.useState(date.getMinutes());
    // const [seconds, setSeconds] = React.useState(date.getSeconds());
    // const day = new Date;
    function tic(): void{
        setDate(new Date());
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            tic();
            return ()=>{
                clearInterval(intervalId);
            }
        }, interval || 1000);

    }, [])

    console.log("+")
    const seconds = date.getSeconds();
    const minutes = date.getMinutes() + seconds/60;
    const hours = date.getHours() + minutes/60;

    return (
            // <div style={{marginLeft: '50vw'}}>
            //     <h1>Current Time</h1>
            //     <label>{time.toLocaleTimeString()}</label>
            // </div>
        <div className='clock'>
            <div className='hour'>
                <div className='hours' style={{transform:`rotateZ(${hours*30}deg)`}}></div>
            </div>
            <div className='minute'>
                <div className='minutes' style={{transform:`rotateZ(${minutes*6}deg)`}}></div>
            </div>
            <div className='second'>
                <div className="seconds" style={{transform:`rotateZ(${seconds*6}deg)`}}></div>
            </div>
            <div className='country'>
                <div>{date.toLocaleTimeString(locales, {timeZone: timeZone})}</div>
                <div>{timeZone}</div>
            </div>
        </div>
        )
}

export default Timer;
