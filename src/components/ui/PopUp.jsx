import React, { useState } from "react";
import styles from "./popUp.module.css";
export default function PopUp({ children, className, style, ...props }) {
  const [open, setOpen] = useState(false);
  const hostname = window.location.hostname + ":" + window.location.port;
  return (
    <div
      className={`${styles.popUpContainer} ${className}`}
      style={{ ...style }}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div>{children}</div>
      <div
        className={styles.popUpBox}
        style={{ display: open ? "block" : "none" }}
      >
        <ul>
          <a href={`http://${hostname}/timeline`}>
            <li className={styles.popUpItem}>
              <span className="tim-icons icon-chat-33" />
              {"  "}
              چتیوشا
            </li>
          </a>
          <a href={`http://${hostname}/shopping`}>
            <li className={styles.popUpItem}>
              {" "}
              <span className="tim-icons icon-basket-simple " />
              {"  "}
              سبد خرید
            </li>
          </a>
          <a href={`http://${hostname}/home/page`}>
            <li className={styles.popUpItem}>
              <span className="tim-icons  icon-bank" />
              {"  "}
              خانه
            </li>
          </a>
          <a href={`http://${hostname}/aboutUs`}>
            <li className={styles.popUpItem}>
              <span className="tim-icons icon-send" />
              {"  "}
              درباره ما
            </li>
          </a>
          <a href={`http://${hostname}/admin`} style={{display: props.isAdmin? "": "none"}}>
            <li className={styles.popUpItem}>
              <span className="tim-icons icon-chart-bar-32" />
              {"  "}
              ادمین
            </li>
          </a>
          <a
            href={`http://${hostname}/`}
            onClick={() => {
              localStorage.removeItem("authTokens");
            }}
          >
            <li className={styles.popUpItem} to="/landingPage">
              <span className="tim-icons icon-simple-remove" />
              {"  "}
              خروج
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
