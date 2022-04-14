import React from "react";
import LifeMatrix from "../service/LifeMatrix";
import {getRandomMatrix} from "../util/random";
import Matrix from "./Matrix";

type Props = {
    dimension: number;
    ticInterval: number
}
const Life: React.FC<Props> = ({dimension, ticInterval}) => {
    const lifeMatrix = React.useRef<LifeMatrix>(new LifeMatrix(getRandomMatrix(dimension, dimension, 0, 1)));
    const [numbers, setNumbers] = React.useState<number[][]>(lifeMatrix.current.numbers);
    function tic(){
        setNumbers(lifeMatrix.current.nextStep());
    }
    React.useEffect(() => {
        const intervalId = setInterval(tic, ticInterval);

        return () => {
            clearInterval(intervalId);
        }
    },[ticInterval])
    return(
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Matrix numbers={numbers}/>
        </div>
    )
}


export default Life;
