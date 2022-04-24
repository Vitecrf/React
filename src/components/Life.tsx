import React from "react";
import LifeMatrix from "../service/LifeMatrix";
import {getRandomMatrix} from "../util/random";
import Matrix from "./Matrix";
import {log} from "util";

type Props = {
    dimension: number;
    ticInterval: number
}
const Life: React.FC<Props> = ({dimension, ticInterval}) => {
    const lifeMatrix = React.useRef<LifeMatrix>(new LifeMatrix(getRandomMatrix(dimension, dimension, 0, 1)));
    const [numbers, setNumbers] = React.useState<number[][]>(lifeMatrix.current.numbers);
    const [life, setLife] = React.useState<number>(0);
    const [dead, setDead] = React.useState<number>();
    // console.log("+")
    function tic(){
        setNumbers(lifeMatrix.current.nextStep());
    }
    React.useEffect(() => {
        const intervalId = setInterval(tic, ticInterval);
        return () => {
            clearInterval(intervalId);
        }
    },[ticInterval])

    function lifeFn(arr:number[][]):void{
        let a = 0;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                if(j === 1){++a}
                // if(j === 0){setDead(dead + 1)}
            }
        }

        setLife(a);
    }
    React.useEffect(() => {
        lifeFn(numbers);
    }, [lifeMatrix])

    return(
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Matrix numbers={numbers}/>
            <div>{life}</div>
            {/*<div>{dead}</div>*/}
        </div>
    )
}


export default Life;
