import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";

import { getReplies } from "../../Functions/Timeline/getReplies";
export const useGetsuggestedTweet = (change,link) => {
  const [dataS, setDataS] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    if(change)
    getReplies(setDataS, setLoading, link)
  }, [change]);
  return { dataS, setDataS ,loading};
};