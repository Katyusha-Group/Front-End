import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";

export const useAllProfiles = (searchQuery) => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("searchQuery",searchQuery);
  useEffect(() => {
    // showLoading();

    fetch(apis["profiles"]["all"]+searchQuery, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      
      .then((data) => {
        console.log("give all",data);
        setFilteredProfiles(data);
        setLoading(false);
      })
      .catch((error) => console.log("error"));
  }, [searchQuery]);

  

  return { filteredProfiles, loading };
};
