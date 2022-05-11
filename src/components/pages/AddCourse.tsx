import React from "react";
import {coursesService} from "../../config/service-config";
import {getRandomCourse} from "../../util/randomCurse";
import courseData from '../../config/courseData.json';
import {useDispatch} from "react-redux";
import {addCourse} from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import {Course} from "../../models/Course";

const AddCourse:React.FC =()=>{
    const dispatch = useDispatch();

    return<label style={{fontSize: '40px'}}>
        <CourseForm submitFn={(course:Course) => dispatch(addCourse(course)) }></CourseForm>
    </label>
}

export default AddCourse;
