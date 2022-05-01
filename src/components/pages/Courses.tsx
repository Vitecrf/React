import React, {useEffect, useState} from "react";
import courseData from '../../config/courseData.json';
import {coursesService} from "../../config/service-config";
import CoursesServiceArray from "../../service/CoursesServiceArray";
import {getRandomCourse} from "../../util/randomCurse";
import {useSelector} from "react-redux";
import {Course} from "../../models/Course";
import {StateType} from "../../redux/stor";

const Courses:React.FC =()=>{
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);
    return<label style={{fontSize: '40px'}}>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div></div>
            <div></div>
            <div></div>
        </div>
       <ul>
           {courses.map(i => <li key={i.id}>{JSON.stringify(i)}</li>)}
       </ul>
    </label>
}

export default Courses;
