import React from "react";
import { apis } from "../../assets/apis";
import axios from "axios";
import { showLoading, closeLoading } from "../../components/LoadingAlert/LoadingAlert";
export const useActivity = () => {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    setLoading(true);
    axios(apis["tweetChart"]["lastWeekTweets"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        setData(response.data)
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  }, []);
  return { data, loading, error };
};