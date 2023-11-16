import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import {
  showLoading,
  closeLoading,
} from "../components/LoadingAlert/LoadingAlert";

export const useAllProfiles = () => {
  const token = JSON.parse(localStorage.getItem("authTokens")).token.access;
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    showLoading();

    fetch(apis["profiles"]["all"], {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      
      .then((data) => {
        console.log("give all",data);
        setAllProfiles(data);
        closeLoading();
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  

  return { allProfiles, loading };
};
