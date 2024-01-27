import {  describe, it, expect, vi, test} from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalShopping from './ModalShopping';
import * as Router from "react-router-dom";
import ContextInfo from '../../contexts/InfoContext';
describe('Renders main page correctly', () => {
    const temp_order = {
        "name": "",
        "price": 0,
        "contain_telegram": "O",
        "contain_sms": "N",
        "contain_email": "N"
    };
    const temp_show = {
        "flag": true,
        "data": {
            "complete_course_number": "1311051_01",
            "added_to_calendar_count": 0,
            "name": "آزمایشگاه دینامیک و ارتعاشات",
            "base_course_id": 1311051,
            "group_number": "01",
            "capacity": 12,
            "registered_count": 15,
            "waiting_count": 0,
            "exam_times": [
                {
                    "date": "1402-10-19",
                    "exam_start_time": "13:30:00",
                    "exam_end_time": "15:30:00"
                }
            ],
            "course_times": [
                {
                    "course_day": "1",
                    "course_start_time": "13:00:00",
                    "course_end_time": "14:30:00",
                    "place": "دانشکده راه آهن آزمایشگاه مکانیک جامدات",
                    "course_time_representation": 4
                }
            ],
            "teachers": [
                {
                    "id": 7013,
                    "name": "علیرضا سلیمانی خوشرو",
                    "teacher_image": "http://37.32.13.62/var/www/media/images/teachers_image/2805_c3WfqS2.png"
                }
            ],
            "color_intensity_percentage": 0,
            "total_unit": 1,
            "practical_unit": 1,
            "sex": "B",
            "is_allowed": false,
            "description": "nan"
        }
    }
  it('should render the ModalProfileHeader component without crashing', () => {
    render(<ContextInfo><Router.BrowserRouter><ModalShopping order={temp_order} show ={temp_show}/></Router.BrowserRouter></ContextInfo>);
  });
});