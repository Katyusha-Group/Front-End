import { useState, useEffect } from "react";
import { apis } from "../assets/apis";
import { returnToken } from "../Functions/returnToken";
import axios from "axios";

export const useAllProfiles = (searchQuery) => {
  const token = returnToken()
  const [allProfiles, setAllProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(apis["profiles"]["all"] + searchQuery, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((data) => {
        setFilteredProfiles(data.data);
        setLoading(false);
      })
      .catch((error) => console.error("error"));
  }, [searchQuery]);

  return { filteredProfiles, loading };
};
