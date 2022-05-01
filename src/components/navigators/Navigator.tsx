import React from "react";
import {RouteType} from "../../models/RouteType";
import {Link} from "react-router-dom";




const Navigator:React.FC<{items:RouteType[]}> = ({items}) => {
    function getLinks():React.ReactNode{
        return items.map(i => <Link to={i.path} key={i.path}>{i.label}</Link>)
    }
    return(
            <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
                {getLinks()}
            </nav>
        )
}

export default Navigator;
