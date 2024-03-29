import React, { useState, useEffect } from "react";
import styles from "../assets/css/Searchbar.module.css";
import Searchfield from "./Searchfield";
import UserSearchResponce from "./UserSearchResponce";
import { Card } from "reactstrap";
import { useAllProfiles } from "../hooks/useSearchprofile";
import axios from "axios";
import { set } from "lodash";
import { use } from "chai";
import Spinner from "react-bootstrap/Spinner";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { filteredProfiles, loading } = useAllProfiles(searchQuery);
  useEffect(() => {}, [searchQuery]);

  return (
    <Card className={styles.main}>
      <Searchfield setSearchQuery={setSearchQuery} />

      <div className={styles.searchBox}>
        {loading ? (
              <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent:"center",
                height: "70vh",
                alignItems: "center",
              }}
            >
              <Spinner animation="border" variant="primary"  />
            </div>
              ) : (
          filteredProfiles.map((item, index) => {
            return <UserSearchResponce res={item} key={index} />;
          })
        )}
      </div>
    </Card>
  );
};

export default Searchbar;
