import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const userFollowers = (myUsername, showModal) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [Followers, setFollowers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(showModal);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setShow(showModal);
        showLoading();
        const response = await fetch((apis["profiles"]["followers"]).replace("//followers", `/${myUsername}/followers`), {
          headers: { Authorization: `Bearer ${token}` },
        });
        const getfollowers = await response.json();
        // console.log("Followers are: " + JSON.stringify(getfollowers));
        setFollowers(getfollowers);
        closeLoading();
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, [showModal]);
  return {Followers, setFollowers};
};

