import React from "react";
import {getMinMaxAvgByField} from "../../util/functions";
import {coursesService} from "../../config/service-config";
import {Course} from "../../models/Course";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/stor";


const StatisticCost:React.FC =()=>{

    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);

const statObj = getMinMaxAvgByField(courses, 'cost');
    return<div style={{fontSize: '1.5em', display: 'flex', justifyContent: 'space-evenly'}}>
        {statObj.max != 0 ? <>
       <label>min const = {statObj.min}</label>
        <label>max const = {statObj.max}</label>
        <label>avg const = {statObj.avg}</label>
            </>
            : null}
    </div>
}

export default StatisticCost;
