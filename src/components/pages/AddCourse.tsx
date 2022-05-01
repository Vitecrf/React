import React from "react";
import {coursesService} from "../../config/service-config";
import {getRandomCourse} from "../../util/randomCurse";
import courseData from '../../config/courseData.json';
import {useDispatch} from "react-redux";
import {addCourse} from "../../redux/actions";

const AddCourse:React.FC =()=>{
    const dispatch = useDispatch();

    return<label style={{fontSize: '40px'}}>
        <button onClick={()=> dispatch(addCourse(getRandomCourse(courseData)))}>Add Random Course</button>
    </label>
}

export default AddCourse;