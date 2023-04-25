import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { NavLink, Link, useLocation } from "react-router-dom";

const SearchBox = ( data ) => {
  const [query, setQuery] = useState('');
  // console.log("nameList", data)
  let nameList = data.data?.map((item) => item.name)
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
        {nameList?.filter((item) => item.toLowerCase().includes(query.toLowerCase())).map((item, index) => (
          <NavLink
          className="nav-link"
          activeClassName="active"
        >
            <i />
            <p>{item}</p>
        </NavLink>
        ))}
    </>
  );
};

export default SearchBox;
