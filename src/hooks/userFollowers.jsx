import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import { returnToken } from "../Functions/returnToken";
export const userFollowers = (myUsername, showModal) => {
  const token = returnToken();
  const [Followers, setFollowers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(showModal);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setShow(showModal);
        const response = await fetch((apis["profiles"]["followers"]).replace("//followers", `/${myUsername}/followers`), {
          headers: { Authorization: `Bearer ${token}` },
        });
        const getfollowers = await response.json();
        setFollowers(getfollowers);
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, [showModal]);
  return {Followers, setFollowers};
};

