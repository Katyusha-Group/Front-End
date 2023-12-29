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
      setData((x) => {

        let temp = [response.data, ...x.results];
        return { ...x, results: temp}
      });
    } else {
      // setData((listOfData) => {
      //   console.log("mmd",listOfData);
      //   let temp = listOfData.results.map((x) =>
      //     x.id == parent ? { ...x, replies_count: x.replies_count + 1 } : x
      //   );
      //   return { ...listOfData, results: temp };
      // });
      
    }

  } catch (error) {
    console.error(error);
  }
};
