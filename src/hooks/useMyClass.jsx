import React from "react";
import { apis } from "../assets/apis";
import { useInfo } from "../contexts/InfoContext";
import axios from "axios";
export const useMyClass = (getapi,showLoading,closeLoading) => {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  const { changeInfo } = useInfo();
  React.useEffect(() => {
    if (getapi == true) {
      showLoading();
      axios(apis["courses"]["my_courses"], {
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
