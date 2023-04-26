import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { NavLink, Link, useLocation } from "react-router-dom";
import { useInfo } from '../../contexts/InfoContext';
// import { takeLessonsGroups } from '../LessonSidebar/ApiCalls';

const SearchBox = ( data ) => {
  const [query, setQuery] = useState('');
  const {info,changeInfo}=useInfo()
  // console.log("nameList", data)
  let nameList = data.data?.map((item) => item)
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  // console.log(tokenClass);

  const token = tokenClass.token.access;

  function takeLessonsGroups(token){
    // const tokenJson = localStorage.getItem("authTokens");
    // const tokenClass = JSON.parse(tokenJson);
    // const token = tokenClass.token.access;
    // const {info,changeInfo}=useInfo()
    // let courseData = [];

    console.log(`token is : ${token}`)
    console.log(`course ID is: ${info.courseGroupID}`);
   
      fetch(`https://www.katyushaiust.ir/coursegroups/${info.courseGroupID}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          
          // courseData=data;
          // console.log("heyy it was done!", data);
          changeInfo("courseGroupsListInContext",data)
          console.log(info)
        })
        .catch((error) => console.error(error));
      // console.log(data);
    //   const activeRoute = (routeName) => {
    //     return location.pathname === routeName ? "active" : "";
    //   };
  }

  return (
    <>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleQueryChange}
      />
        {nameList?.filter((item, index) => item.name.toLowerCase().includes(query.toLowerCase())).map((item, index) => (
          <a
          className="nav-link"
          activeClassName="active"
          onClick={()=>{
            // console.log("I'm called 111");
            changeInfo("courseGroupID",item.course_number);
            // console.log("new info")
            // console.log({info})
            takeLessonsGroups(token);
            
          // console.log('prop.course_ID',item.course_number)
        }}
          key={index}
        >
            <i />
            <p >{item.name}</p>
        </a>
        ))}
    </>
  );
};

export default SearchBox;
