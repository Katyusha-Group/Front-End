import React from "react";
import { apis } from "../assets/apis";
import { useInfo } from "../contexts/InfoContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useMyClass = (getapi, showLoading, closeLoading) => {

  const { changeInfo } = useInfo();
  const Navigate = useNavigate();
  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("authTokens"))=== null ? Navigate('/login'):JSON.parse(localStorage.getItem("authTokens")).token.access;
    if (getapi == true) {
      showLoading();
      fetch(apis["courses"]["my_courses"], {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          changeInfo("courseChoosed", data);
          closeLoading()
        })
        .catch((error) => console.error(error));
      const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
      };
    }
  }, []);
};
