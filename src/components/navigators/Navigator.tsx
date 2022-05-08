import React from "react";
import {RouteType} from "../../models/RouteType";
import {Link} from "react-router-dom";
import NavigatorDesktop from "./NavigatorDesktop";
import NavigatorMobile from "./NavigatorMobile";
import {useMediaQuery} from "@mui/material";
// import {ROUTES} from "../../config/routes-config";


const Navigator:React.FC<{items:RouteType[]}> = ({items}) => {
    const isLaptopDesktop = useMediaQuery('(min-width: 900px)');
    return(
        <div style={{marginTop: '6vh'}}>
            {isLaptopDesktop ? <NavigatorDesktop items={items}/> : <NavigatorMobile items={items}/>}
        </div>
    )
}

export default Navigator;
