import Course from '../views/CoursesPanel/CoursesPanel';
import { apis } from '../assets/apis';

export function addNewLesson(num) {  // Add a lesson
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;
                                       
      fetch(apis["courses"]["my_courses"], {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complete_course_number: num,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const courses = data.map(course => new Course(course, true));
          return courses;
        })
        .catch((error) => console.error(error));
      const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
      };
  }