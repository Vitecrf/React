import React from 'react';
import {Course, createCourse} from "../../models/Course";
import courseData from "../../config/courseData.json";
import {FormControl, Grid, InputLabel, MenuItem, Select, TextField, Button} from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {getRandomNumber} from "../../util/random";

type Props ={
    submitFn: (course: Course)=>void;
}
const initialCourse: Course = createCourse(0, "", "",0,0,new Date());

const CourseForm: React.FC<Props> = ({submitFn})=>{
    const {courses, minHours, maxHours, lectors, minCost, maxCost} = courseData;
    const [course, setCourse] = React.useState(initialCourse);
    const [value, setValue] = React.useState<Date | null>();

    function onSubmit(event: any){
        event.preventDefault();
        console.log(course);
        submitFn(course)
    }
    //Date
    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };
    //course Name
    function handlerCourse(event: any){
        const courseCopy = {...course};
        courseCopy.name = event.target.value;
        console.log(courseCopy.name);
        setCourse(courseCopy);
    }
    //lector
    function handlerLector(event: any){
        const courseCopy = {...course};
        courseCopy.lecturer = event.target.value;
        console.log(courseCopy.lecturer);
        setCourse(courseCopy);
    }
    //Hours
    function handlerHours(event: any){
        const courseCopy = {...course};
        courseCopy.hours = +event.target.value;
        setCourse(courseCopy)
    }
    //Cost
    function handlerCost(event: any){
        const courseCopy = {...course};
        courseCopy.cost = +event.target.value;
        setCourse(courseCopy)
    }
    return<form onSubmit={onSubmit}>
        <Grid container sx={{
            '& .MuiTextField-root': {m:0}
        }} columnSpacing={{ lg: 7, sm: 3}} gap={5}
              direction="row"
              justifyContent="center"
              alignItems="center">
            {/*//course name*/}
            <Grid item xs={12} sm={5}>
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Course Name</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        value={course.name}
                        label="Course Name"
                        onChange={handlerCourse}
                    >
                        <MenuItem value="">None</MenuItem>
                        {getCourseItems(courses)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                <FormControl fullWidth required>
                    <InputLabel id="lector-select-label">Lector</InputLabel>
                    <Select
                        labelId="lector-select-label"
                        id="demo-simple-select"
                        value={course.lecturer}
                        label="Lector"
                        onChange={handlerLector}
                    >
                        <MenuItem value="">None</MenuItem>
                        {getCourseItems(lectors)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={5}>
                <TextField fullWidth type="number" label="Hours" required value={course.hours || ""} variant="outlined"
                           onChange={handlerHours}
                           inputProps={{
                               min:`${minHours}`,
                               max:`${maxHours}`
                           }}/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <TextField fullWidth type="number" label="Cost" required value={course.cost || ""} variant="outlined"
                           onChange={handlerCost}
                           inputProps={{
                               min:`${minCost}`,
                               max:`${maxCost}`
                           }}/>
            </Grid>
            {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*    <DesktopDatePicker*/}
            {/*        label="Date desktop"*/}
            {/*        inputFormat="MM/dd/yyyy"*/}
            {/*        value={value}*/}
            {/*        onChange={handleChange}*/}
            {/*        renderInput={(params) => <TextField {...params} />}*/}
            {/*    />*/}
            {/*</LocalizationProvider>*/}
            <Grid item xs={12} sm={7}>

            </Grid>
            {/*//buttons*/}
            {/*<Grid>*/}
                <Grid item xs={5}>
                    <Button fullWidth type="submit" variant="outlined">Submit</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button fullWidth type="reset" variant="outlined">Reset</Button>
                </Grid>
            {/*</Grid>*/}

        </Grid>
    </form>
}

export default CourseForm;

function getCourseItems(courses:string[]):React.ReactNode{
    return courses.map((items, i) => <MenuItem key={i} value={items}>{items}</MenuItem>)
}
