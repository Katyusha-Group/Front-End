import React, { useState } from "react";
import { Input } from "reactstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useInfo } from "../../contexts/InfoContext";
import * as style from "./SearchBox.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { apis } from "../../assets/apis";
import { returnToken } from "../../Functions/returnToken";
const fetchRequest = "FETCH_REQUEST";
const fetchSuccess = "FETCH_SUCCESS";
const fetchFail = "FETCH_FAIL";
const reducer = (state, action) => {
  switch (action.type) {
    case fetchRequest:
      return { ...state, loading: true };
    case fetchSuccess:
      return { ...state, loading: false, props: action.payload };
    case fetchFail:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const SearchBox = ( data ) => {
  const [query, setQuery] = useState('');
  const [selectedL, setSelectedL] = React.useState([]);
  const {info,changeInfo}=useInfo()
  let nameList = data.data?.map((item) => item)
  let test = data.data?.map((item) => item.base_courses.map((item) => item))
  nameList = test.flat()
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const token = returnToken();

  function takeLessonsGroups(token, num) {
    changeInfo("loading", 1);

    fetch(apis["coursegroups"]+`${num}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        changeInfo("loading", 2);

        changeInfo("courseGroupsListInContext", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Input
        type="text"
        placeholder="جستجو   "
        value={query}
        onChange={handleQueryChange}
        className={style.search_box}
      />
      <div className={style.lessons_in_searchBox}>
        {
          nameList
          ?.filter((item, index) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((item, index) => (
            <a
              className={item===selectedL?`nav-link ${style.selectedL} ${style.button_lessons}`:"nav-link " + style.button_lessons}
              activeClassName="active"
              onClick={() => {
                changeInfo("courseGroupID", item.course_number);
                setSelectedL(item);
                takeLessonsGroups(token, item.course_number);
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
