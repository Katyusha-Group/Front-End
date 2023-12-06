
export function addNewLesson(num) { 
    const tokenJson = localStorage.getItem("authTokens");
    const tokenClass = JSON.parse(tokenJson);
    const token = tokenClass.token.access;                                       // Add a lesson
    fetch("https://www.katyushaiust.ir/courses/my_courses/", {
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
        // const dataArray = JSON.parse(data);
        const courses = data.map(course => new Course(course, true));
        // setChosenCourses(data);
        setChosenCourses(courses);
        // setChosenCoursesChanged(prev => !prev);
      })
      .catch((error) => console.error(error));
    const activeRoute = (routeName) => {
      return location.pathname === routeName ? "active" : "";
    };
}

export function mapTimeToIndex(start_time) {                               // Time Index finder
    const times = [
      "07:30:00",
      "09:00:00",
      "10:30:00",
      "12:00:00",
      "13:30:00",
      "15:00:00",
      "16:30:00",
      "18:00:00",
    ];
    let index = times.findIndex(time => time === start_time);
    if (index === -1) {
      const times2 = [
        "08:00:00",
        "09:30:00",
        "11:00:00",
        "12:30:00",
        "14:00:00",
        "15:30:00",
        "17:00:00",
        "18:30:00",
      ];
      let index2 = times2.findIndex(time => time === start_time);
      if (index2 === -1) {
        const times3 = [
          "07:00:00",
          "08:30:00",
          "10:00:00",
          "11:30:00",
          "13:00:00",
          "14:30:00",
          "16:00:00",
          "17:30:00",
        ];
        return times3.findIndex(time => time === start_time);
      }
      return index2;
    }
    return index;
}

export function createCourseGroupsArray(courses) {                         // Creates an array to store number of courses in each time slot
    const courseGroups = [];
    for (let i = 0; i < 6; i++) {
        courseGroups[i] = Array(8).fill(0);
    }
    return courseGroups;
}

export function uniquifyArrayByKey(arr, key) {                             // Removing duplicate keys (uniquify by key)
    return arr.filter((item, index) => {
        return (
        arr.findIndex((element) => element[key] === item[key]) === index
        );
    });
}