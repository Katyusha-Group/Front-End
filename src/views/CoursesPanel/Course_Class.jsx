import React from "react";
import { useMemo, useState, useEffect } from 'react';
import { useInfo } from "../../contexts/InfoContext";
import { apis } from "../../assets/apis";
import { addNewLesson } from "../../Functions/addNewLesson";
// Info
const { info, changeInfo } = useInfo();
class Course {
    constructor(props, IsFromChosencourses) {
      this.name = props.name;
      this.complete_course_number = props.complete_course_number;
      this.class_gp = this.complete_course_number.substring(this.complete_course_number.length - 2);
      this.course_times = props.course_times;
      this.base_course_number = parseInt(this.complete_course_number.substring(0, this.complete_course_number.length - 3));
      this.DepartmentID = parseInt(this.complete_course_number.substring(0, 2));
      this.can_take = props.is_allowed;
      this.IsChosen = IsFromChosencourses;
      this.backgColor = (this.IsChosen) ? "rgb(87, 106, 224)" : "hsl(235, 22%, 30%)";
    }
    
    ButtonClicked ()
    {
      if (this.IsChosen)
      {
        if (!info.courseChoosed.includes(this)) {
          ChosenCourses = addNewLesson(this.complete_course_number, NumberOfChosenLessons);
          changeInfo("courseChoosed", [...info.courseChoosed, this]);
          console.log("My courses: " + ChosenCourses);
          this.IsChosen = true;
        }
      }
      else
      {
        addNewLesson(this.complete_course_number);
        changeInfo(
          "courseChoosed",
          info.courseChoosed.filter(
            (item) =>
              item.complete_course_number !==
              this.complete_course_number
          )
        );
        this.IsChosen = false;
      }
      setChosenCoursesChanged(prev => !prev);
    }
}

export default Course;