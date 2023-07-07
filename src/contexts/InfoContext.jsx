import React, { useState, useContext } from "react";

const InfoContext = React.createContext();

export function useInfo() {
  return useContext(InfoContext);
}

export default function ContextInfo(props) {
  const [info, setInfo] = useState({
    name: "John Doe",
    age: 30,
    email: "JohnDeo@gmail.com",
    phone: "1234567890",
    address: "1234 Main St, Anytown, USA",
    token: "",
    courseGroupID:"0",
    chosenDepartment:"",
    courseGroupsListInContext:[],
    courseChoosed:[],
    shop:[],
    loading:0
  });
  function changeInfo(name, value) {
    setInfo((info) => ({ ...info, [name]: value }));
  }
  return (
    <InfoContext.Provider value={{ info, changeInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
}
