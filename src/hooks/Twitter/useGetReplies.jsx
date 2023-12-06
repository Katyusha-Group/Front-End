import React from "react";
import axios from "axios";
import { apis } from "../../assets/apis";
import { useState } from "react";
import { useEffect } from "react";
import {
  showLoading,
  closeLoading,
} from "../../components/LoadingAlert/LoadingAlert";
import { getReplies } from "../../Functions/Timeline/getReplies";
export const useGetReplies = (change,link) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    if(change)
    getReplies(setData, setLoading, link)
  }, [change]);
  return { data, setData ,loading};
};