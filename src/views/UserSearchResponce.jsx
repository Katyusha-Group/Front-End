import React from "react";
import styles from "../assets/css/UserSearchResponce.module.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const UserSearchResponce = (res) => {
  return (
    <div className={styles.container}>
      <Link to={"/profile/" + res.res.username} className={styles.main}>
        <div className={styles.main2}>
          <img className={styles.img} src={res.res.image} />
          <p className={styles.text}>
            {res.res.name}
          </p>
        </div>
      </Link>
      <a href={"/chat/" + res.res.username} className={styles.chat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M2.5 12.8396L21.5 20.8396L17.9375 12.8396L21.5 4.8396L2.5 12.8396Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 12.8396H2.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default UserSearchResponce;
