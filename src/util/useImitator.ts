import React, {useEffect, useState} from "react";
import {ImitatorAction, imitatorActions} from "../config/imitator-config";
import {useDispatch, useSelector} from "react-redux";
import {addCourse, removeCourse, updateCourse} from "../redux/actions";
import {getRandomCourse} from "./randomCurse";
import courseData from "../config/courseData.json"
import {getRandomNumber} from "./random";
import {Course, createCourse} from "../models/Course";
import {StateType} from "../redux/stor";


export const initialStat = {value: 0,
add: 0,
remove: 0,
update: 0
};
export function useImitator() {
    // const [statistic, setStatistic] = useState<number>(0);
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    const dispatch = useDispatch();
    useEffect(() => {
        const idInterval = setInterval(action, 1000);
        return () => {
            clearInterval(idInterval);
        }
    }, [courses])

    function action() {
        const number = getRandomNumber(0, 100);
        const imitatorAction: ImitatorAction = getAction(number);
        switch (imitatorAction.action) {
            case 'nothing':
                dispatchNothing();
                break;
            case 'add':
                dispatchAdd();
                break;
            case 'remove':
                dispatchRemove();
                break;
            case 'update':
                dispatchUpdate();
                break;
            default:
                break;
        }
    }

    function dispatchNothing() {
        initialStat.value += 1;
        console.log("просмотр ->" + initialStat.value);
    }

    function dispatchAdd() {
        initialStat.add += 1;
        dispatch(addCourse(getRandomCourse(courseData)));
        console.log("Add")
    }

    function dispatchRemove() {
        if(courses.length != 0){
            initialStat.remove += 1;
            dispatch(removeCourse(getIndexCourse()));
            console.log("Remove")
        }
    }

    function dispatchUpdate() {
        if(courses.length != 0) {
            initialStat.update += 1;
            const courseGegId: Course = courses[getIndexCourse()];
           const courseUp = getRandomCourse(courseData);
            console.log("courseUp -> " + courseUp.id + " courseGegId ->" + courseGegId.id)
           courseUp.id = courseGegId.id;
            console.log("courseUp -> " + courseUp.id)
            dispatch(updateCourse(courseUp))
            console.log("Update -> " + courseUp.id)
        }
    }

    function getIndexCourse(): number {
        return getRandomNumber(0, courses.length);
    }
}
// function getAction(num: number):ImitatorAction{
//     const res = imitatorActions.find(ia => num <= ia.prob) ?? imitatorActions[imitatorActions.length-1];
//     return res;
// }

function getAction(number: any): ImitatorAction{
    for(let i = 0; i < imitatorActions.length; i++){
        if(number < imitatorActions[i].prob){
            return imitatorActions[i];
        }
    }
    return imitatorActions[imitatorActions.length-1];
}
