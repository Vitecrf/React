import React from "react";
import Row from "./Row";

type Props = {
    numbers: number[][]
}
const Matrix:React.FC<Props> = ({numbers}) => {
    function getRows(numbers:number[][]):React.ReactNode {
        return numbers.map((r, i) => <Row key={i} row={r}/>)
    }

    return (
        <div style={{display: 'flex', flexDirection: "column"}}>
            {getRows(numbers)}
        </div>
    )
}
export default Matrix;
