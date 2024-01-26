import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalLessons from './ModalLessons';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
    const temp = {
        "flag": true,
        "data": {
            "complete_course_number": "2211296_02",
            "name": "ساختمانهای داده",
            "group_number": "02",
            "total_unit": 3,
            "practical_unit": 0,
            "capacity": 45,
            "registered_count": 44,
            "waiting_count": 0,
            "sex": "B",
            "emergency_deletion": true,
            "registration_limit": "مجاز برای مقطع کارشناسی، دانشکده مهندسی کامپیوتر، گروه آموزشی واحد آموزش کارشناسی، رشته مهندسی کامپیوتر،",
            "description": "nan",
            "presentation_type": "N",
            "teachers": [
                {
                    "id": 7621,
                    "name": "حسین رحمانی",
                    "teacher_image": "http://37.32.13.62/var/www/media/images/teachers_image/7481_xHJCvAG.png"
                }
            ],
            "exam_times": [
                {
                    "date": "1402-10-27",
                    "exam_start_time": "14:00:00",
                    "exam_end_time": "16:00:00"
                }
            ],
            "course_times": [
                {
                    "course_day": "0",
                    "course_start_time": "10:30:00",
                    "course_end_time": "12:00:00",
                    "place": "دانشکده کامپیوتر کلاس شماره 122-",
                    "course_time_representation": 2
                },
                {
                    "course_day": "2",
                    "course_start_time": "10:30:00",
                    "course_end_time": "12:00:00",
                    "place": "دانشکده کامپیوتر کلاس شماره 122-",
                    "course_time_representation": 2
                }
            ],
            "is_allowed": true,
            "added_to_calendar_count": 1
        }
    }
  it('should render the ModalLessons component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><ModalLessons show={temp}/></Router.BrowserRouter></ContextInfo>);
  });
});