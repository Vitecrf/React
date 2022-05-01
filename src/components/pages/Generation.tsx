import React, {useEffect} from "react";
import {getRandomCourse} from "../../util/randomCurse";
import {coursesService} from "../../config/service-config";
import courseData from '../../config/courseData.json';
import {useDispatch} from "react-redux";
import {addCourse} from "../../redux/actions";

let inputElement:any
const Generation:React.FC =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        inputElement = document.getElementById('generation_id');
    },[])
    function onInput(){
        const nCourses = +inputElement.value;
        for(let i = 0; i < nCourses; i++){
            dispatch(addCourse(getRandomCourse(courseData)));
        }
    }
    return<label style={{fontSize: '40px'}}>
        <input id='generation_id' type='number'/>
        <button onClick={onInput}>Generation</button>
    </label>
}

export default Generation;
