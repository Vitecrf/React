import React from "react";
import {RouteType} from "../../models/RouteType";
import {Link} from "react-router-dom";
import NavigatorDesktop from "./NavigatorDesktop";
import NavigatorMobile from "./NavigatorMobile";
import {Box, useMediaQuery} from "@mui/material";
// import {ROUTES} from "../../config/routes-config";


const Navigator:React.FC<{items:RouteType[]}> = ({items}) => {
    const isLaptopDesktop = useMediaQuery('(min-width: 900px)');
    return(
        <Box sx={{marginTop: '80px',
        // maxHeight: '48px'
            // xs: '4vh', sm: '10vw', md: '10vh', lg: '10vh'
            }}>
            {isLaptopDesktop ? <NavigatorDesktop items={items}/> : <NavigatorMobile items={items}/>}
        </Box>
    )
}

export default Navigator;
