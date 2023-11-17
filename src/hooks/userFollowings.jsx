import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";
export const userFollowings = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [Followings, setFollowing] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        showLoading();
        const response = await fetch(apis["profiles"]["myusername"], {
          headers: { Authorization: `Bearer ${token}` },
        });
        const myUsername = await response.json();
        // console.log("My username is: " + myUsername.username);

        // const FollowingsResponse = await fetch(
        //   (apis["profiles"]["following"]).replace("//", `/${myUsername.username}/`),
        //   {
        //     headers: { Authorization: `Bearer ${token}` },
        //   }
        // );
        // const data = await FollowingsResponse.json();
        // console.log("Data fetched is: " + data);
        // setFollowing(data);
        // console.log("User is following: " + Followings);
        fetch((apis["profiles"]["following"]).replace("//", `/${myUsername.username}/`), {
          headers: { Authorization: `Bearer ${token}` },
          "Content-Type": "application/json",
        })
        .then((response) => response.json())
        .then((data) => {
          setFollowing(data);
        })
        .catch((error) => console.error(error));
        closeLoading();
        setLoading(false);
      } catch (error) {
        console.error("Err is " + error);
      }
    };

    fetchData();
  }, []);
  return {Followings, setFollowing, loading};
};

