import React from "react";
import { apis } from "../assets/apis";
import { useEffect } from "react";
import { useState } from "react";
import { returnToken } from "../Functions/returnToken";
export const POSTFollow = (ToFollowUsername, IsFollow, setLoading) => {
  const token = returnToken();
  const url_follow = apis["profiles"]["follow"] + `${ToFollowUsername}/`;
  const url_unfollow = apis["profiles"]["unfollow"] + `${ToFollowUsername}/`;
  const url = IsFollow ? url_follow : url_unfollow;
  console.log("url is: " + url);
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: ToFollowUsername,
    }),
  })
    .then((response) => {
      // console.log("response is: ", response);
      setLoading(false);
      // console.log("Reached a response ", response);
      return response.ok;
    })
    .then((data) => {})
    .catch((error) => {
      console.error(error);
    });
};
