import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import { returnToken } from "../Functions/returnToken";
export const userFollowings = (myUsername, showModal) => {
  const token = returnToken();
  const [Followings, setFollowings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(showModal);
  useEffect(() => {
    setShow(showModal);
    const fetchData = async () => {
      try {
        const response = await fetch((apis["profiles"]["following"]).replace("//following", `/${myUsername}/following`), {
          headers: { Authorization: `Bearer ${token}` },
        });
        const getfollowings = await response.json();
        setFollowings(getfollowings);
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, [showModal]);
  return {Followings, setFollowings};
};

