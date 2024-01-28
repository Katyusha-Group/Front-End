import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import styles from "../../assets/css/Tweet/SendMessage.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function SendMessage({
  fetchData = () => {},
  setData = () => {},
}) {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (state !== "") {
      setLoading(true);
      fetchData(state, (response) => {
        setData(response);
        setLoading(false);
      });
      setState("");
    }
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
        {loading ? (
          <Spinner animation="border" variant="light" size="sm" />
        ) : (
          <i className="tim-icons icon-send"></i>
        )}
      </Button>
    </div>
  );
}
