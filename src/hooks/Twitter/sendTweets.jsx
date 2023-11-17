import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";

export const useSendTweets = async (
  content,
  setData = (x) => {},
  parent = ""
) => {
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
      console.log(" file: sendTweets.jsx:24 ~ setData ~ x:1");
      setData((x) => {
        return [response.data, ...x];
      });
    } else {
      setData((listOfData) =>
        listOfData.map((x) =>
          x.id == parent ? { ...x, replies_count: x.replies_count + 1 } : x
        )
      );
    }
  } catch (error) {
    console.error(error);
  }
};
