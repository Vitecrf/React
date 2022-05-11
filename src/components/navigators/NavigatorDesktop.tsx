import React from 'react';
import {RouteType} from "../../models/RouteType";
import {AppBar, Tab, Tabs} from "@mui/material";
import {Link as RouterLink, useLocation} from "react-router-dom"
import '../../App.css';
import {getRouteIndex} from "../../util/functions";

const NavigatorDesktop: React.FC<{ items: RouteType[] }> = ({items}) => {
    //Установка активного курса
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location]);
    const tabNumber = getRouteIndexCallback(items, location.pathname);

    function getTabs(): React.ReactNode {
        return items.map(items => <Tab style={{color: 'white'}} key={items.path} component={RouterLink} to={items.path}
                                       label={items.label}/>)
    }

    return (
        <AppBar position={'fixed'}>
            <Tabs indicatorColor='secondary' value={tabNumber}>
            {getTabs()}
        </Tabs>
        </AppBar>
    )
}

export default NavigatorDesktop;
