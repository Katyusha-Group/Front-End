import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import { returnToken } from "../../Functions/returnToken";
import { getReplies } from "../../Functions/Timeline/getReplies";
export const useGetsuggestedTweet = (change, id) => {
  const [dataS, setDataS] = useState([]);
  const [loading2, setLoading2] = useState(true);
  const token = returnToken();
  useEffect(()=>{
    if(change) {
  
  const link = apis["tweets"]["semantic"] + id;
  // console.log("Link is: ", link);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: link,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios
    .request(config)
    .then((response) => {
      setDataS(response.data);
      // console.log("Data in fetching is: ", response);
      setLoading2(false);
    })
    .catch();
    }
  }, [change]);
  return { dataS, setDataS, loading2};
};