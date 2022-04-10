import React from "react";

type Props = {
    color: string
}

const Color: React.FC<Props> = ({color}) => {
    const style: React.CSSProperties = {width: "20vw", height: "20vw", backgroundColor: color}

    return(
        <h1>{color}
            <div style={style}>

            </div>
        </h1>

    )
}


export default Color;
