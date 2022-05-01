import React, {useEffect, useState} from "react";
import {ImitatorAction, imitatorActions} from "../config/imitator-config";
import {useDispatch, useSelector} from "react-redux";
import {addCourse, removeCourse, updateCourse} from "../redux/actions";
import {getRandomCourse} from "./randomCurse";
import courseData from "../config/courseData.json"
import {getRandomNumber} from "./random";
import {Course, createCourse} from "../models/Course";
import {StateType} from "../redux/stor";
import {courses} from "../config/service-config";

export const initialStat = {value: 0,
add: 0,
remove: 0,
update: 0
};
export function useImitator(){
    // const [statistic, setStatistic] = useState<number>(0);
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const dispatch = useDispatch();
    useEffect(()=> {
        const idInterval = setInterval(action, 1000);
        return () => {
            clearInterval(idInterval);
        }
    }, [courses])

    function action(){
        const number = getRandomNumber(0, 100);
        const imitatorAction: ImitatorAction = getAction(number);
        switch (imitatorAction.action){
            case 'nothing': dispatchNothing(); break;
            case 'add': dispatchAdd(); break;
            case 'remove': dispatchRemove(); break;
            case 'update': dispatchUpdate(); break;
            default: break;
        }
    }
    function dispatchNothing() {
        initialStat.value += 1;
        console.log("просмотр ->" + initialStat.value);
    }
    function dispatchAdd(){
        initialStat.add +=1;
        dispatch(addCourse(getRandomCourse(courseData)));
        console.log("Add")
    }
    function dispatchRemove(){
        initialStat.remove +=1;
        dispatch(removeCourse(getIndexCourse()));
        console.log("Remove")
    }
    function dispatchUpdate(){
        initialStat.update +=1;
        const courseUp: Course = courses[getIndexCourse()];
        // dispatch(removeCourse(index));
        dispatch(updateCourse(courseUp))
        console.log("Update -> " + courseUp.id)
    }
}

// function getAction(num: number): ImitatorAction{
//     return imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length-1]
// }

function getAction(number: any): ImitatorAction{
    for(let i = 0; i < imitatorActions.length; i++){
        if(number < imitatorActions[i].prob){
            return imitatorActions[i];
        }
    }
    return imitatorActions[imitatorActions.length-1];
}
function getIndexCourse():number{
    return getRandomNumber(0, courses.length);
}
