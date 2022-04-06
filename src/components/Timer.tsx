import React, {useEffect} from "react";
import './timer.css';

type Props = {
    interval?: number,
    locales?: string
}
const Timer: React.FC<Props> = ({interval, locales}) =>{
    const [date, setDate] = React.useState(new Date());
    const [hours, setHors] = React.useState(date.getHours() * 30);
    const [minutes, setMinutes] = React.useState(date.getMinutes());
    const [seconds, setSeconds] = React.useState(date.getSeconds());
    // const day = new Date;
    function tic(): void{
        setDate(new Date());
        setHors(date.getHours())
        setMinutes(date.getMinutes())
        setSeconds(date.getSeconds())
    }
    useEffect(() => {
        setInterval(() => {
            tic();
        }, interval || 1000);

    }, [])

    console.log("+")


    return (
            // <div style={{marginLeft: '50vw'}}>
            //     <h1>Current Time</h1>
            //     <label>{time.toLocaleTimeString()}</label>
            // </div>
        <div className='clock'>
            <div className='hour'>
                <div className='hours' style={{transform:`rotateZ(${hours + (minutes / 12)}deg)`}}></div>
            </div>
            <div className='minute'>
                <div className='minutes' style={{transform:`rotateZ(${minutes}deg)`}}></div>
            </div>
            <div className='second'>
                <div className="seconds" style={{transform:`rotateZ(${seconds}deg)`}}></div>
            </div>
            <div className='country'>{date.toLocaleTimeString(locales)}

            </div>
        </div>
        )

}

export default Timer;
