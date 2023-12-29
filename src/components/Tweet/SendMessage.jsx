import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import styles from "../../assets/css/Tweet/SendMessage.module.css";
import { useSendTweets } from "../../hooks/Twitter/sendTweets";
import { useTweets } from "../../hooks/Twitter/useTweets";

export default function SendMessage({
  fetchData = () => {},
  setData = () => {},
}) {
  const [state, setState] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (state !== "") fetchData(state, setData);
    setState("");
  };

  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button className={`${styles.button}`} onClick={handleClick}>
        <i className="tim-icons icon-send"></i>
      </Button>
    </div>
  );
}
