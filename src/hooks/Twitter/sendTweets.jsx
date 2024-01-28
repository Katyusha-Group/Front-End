import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const useSendTweets = async (
  content,
  setData = (x) => {},
  parent = ""
) => {
  if (parent !== "") {
    setData((val) => {
      if (val.results === undefined) {
        return val.map((x) => {
          if (x.id == parent) {
            return { ...x, children_count: x.children_count + 1 };
          }
          return x;
        });
      } else
        return {
          ...val,
          results: val.results.map((x) => {
            if (x.id == parent) {
              return { ...x, children_count: x.children_count + 1 };
            }
            return x;
          }),
        };
    });
  
  }
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  let data = "";
  const sendData = new FormData();
  sendData.append("content", content);
  sendData.append("parent", parent);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: apis["tweets"]["tweets"],
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: sendData,
  };

  try {
    const response = await axios.request(config);
    if (parent === "") {
      setData((x) => {
        let temp = [response.data, ...x.results];
        return { ...x, results: temp };
      });
    }
  } catch (error) {
    console.error(error);
  }
};
