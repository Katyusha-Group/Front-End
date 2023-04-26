import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { NavLink, Link, useLocation } from "react-router-dom";
import { useInfo } from '../../contexts/InfoContext';

const SearchBox = ( data ) => {
  const [query, setQuery] = useState('');
  const {info,changeInfo}=useInfo()
  console.log("nameList", data)
  let nameList = data.data?.map((item) => item)
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

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
            changeInfo("courseGroupID",item.course_number);
          console.log('prop.course_ID',item.course_number)}}
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
