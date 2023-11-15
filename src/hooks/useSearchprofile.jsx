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
        setAllProfiles(data);
        setFilteredProfiles(data); // Initialize filteredProfiles with all profiles initially
        closeLoading();
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const searchProfiles = (searchTerm) => {
    // Filter profiles based on the input value
    const filtered = allProfiles.filter((profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return { allProfiles, filteredProfiles, loading, searchProfiles };
};
