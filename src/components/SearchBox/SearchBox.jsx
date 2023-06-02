import React, { useState } from "react";
import { Input } from "reactstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useInfo } from "../../contexts/InfoContext";
// import { takeLessonsGroups } from '../LessonSidebar/ApiCalls';
import "./SearchBox.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useInfo } from "../../contexts/InfoContext";
const fetchRequest = "FETC_REQUEST";
const fetchSuccess = "FETCH_SUCCESS";
const fetchFail = "FETCH_FAIL";
const reducer = (state, action) => {
  switch (action.type) {
    case fetchRequest:
      // changeInfo("loading", true);
      return { ...state, loading: true };
    case fetchSuccess:
      // changeInfo("loading", false);
      return { ...state, loading: false, props: action.payload };
    case fetchFail:
      // changeInfo("loading", false);
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// const SearchBox = (data) => {
//   const [query, setQuery] = useState("");
//   const { info, changeInfo } = useInfo();
//   const [{ loading, props: input, error }, propsSetter] = React.useReducer(
//     reducer,
//     { loading: true, props: {}, error: "" }
//   );
//   // const {info, changeInfo}
//   // changeInfo("loading", true);

const SearchBox = ( data ) => {
  const [query, setQuery] = useState('');
  const {info,changeInfo}=useInfo()
  console.log("nameList", data)
  // let nameList;
  let nameList = data.data?.map((item) => item)
  let test = data.data?.map((item) => item.base_courses.map((item) => item))
  // let test = []
  // for (let index = 0; index < data.data.length; index++) {
  //   const element = data.data[index];
  //   for (let index = 0; index < element.length; index++) {
  //     const base_courses = element[index];
  //     console.log('50')
  //     test.push(base_courses)
  //   }
  // }
  nameList = test.flat()
  console.log("test", test)
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  // console.log(tokenClass);

  const token = tokenClass.token.access;

  function takeLessonsGroups(token, num) {
    console.log(`token is : ${token}`);
    console.log(`course ID is: ${num}`);
    // propsSetter({ type: fetchRequest });
    changeInfo("loading", 1);

    fetch(`https://www.katyushaiust.ir/coursegroups/${num}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // courseData=data;
        // console.log("heyy it was done!", data);
        // setDeparteman(data);
        // propsSetter({type:fetchSuccess, payload:data.data})
        changeInfo("loading", 2);

        changeInfo("courseGroupsListInContext", data);
        console.log("info is: " + info);
      })
      .catch((error) => {
        // propsSetter({ type: fetchFail, payload: getError(error) });
        console.error(error);
      });
    // console.log(data);
    //   const activeRoute = (routeName) => {
    //     return location.pathname === routeName ? "active" : "";
    //   };
  }
  // console.log("nameList", nameList.length);

  return (
    <>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
        className="search_box"
      />
      <div className="lessons_in_searchBox">
        {
          nameList
          ?.filter((item, index) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((item, index) => (
            <a
              className="nav-link button_lessons"
              activeClassName="active"
              onClick={() => {
                // console.log("I'm called 111");
                changeInfo("courseGroupID", item.course_number);
                // console.log("new info")
                // console.log({info})
                takeLessonsGroups(token, item.course_number);

                // console.log('prop.course_ID',item.course_number)
              }}
              key={index}
            >
              <i className="tim-icons icon-credit-card" />
              <p>{item.name}</p>
            </a>
          ))}
      </div>
    </>
  );
};

export default SearchBox;
