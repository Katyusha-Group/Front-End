import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import styles from "../../assets/css/Tweet/SendMessage.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function SendMessageChat({
  fetchData = () => {},
  setData = () => {},
  setLoading = () => {},
  loading = false,
}) {
  const [state, setState] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (state !== "") {
      fetchData(state, setData) 
    setState("");
    //   if (state !== "") {
    //     fetchData(state,setData);
    //   setState("");
    // }
  };
  }

  return (
    <div className={styles.container}>
      <Input
        className={styles.input}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button className={`${styles.button}`} onClick={handleClick}>
        {loading ? (
          <Spinner animation="border" variant="light" size="sm" />
        ) : (
          <i className="tim-icons icon-send"></i>
        )}
      </Button>
    </div>
  );
}