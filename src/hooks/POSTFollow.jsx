import React from "react";
import { apis } from "../assets/apis";
import { useEffect } from "react";
import { useState } from "react";

export const POSTFollow = (ToFollowUsername, IsFollow) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
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
      return response.json();
    })
    .then((data) => {})
    .catch((error) => {
      console.error(error);
    });
};
