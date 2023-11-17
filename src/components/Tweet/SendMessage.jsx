import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import styles from "../../assets/css/Tweet/SendMessage.module.css";
import { useSendTweets } from "../../hooks/Twitter/sendTweets";
import { useTweets } from "../../hooks/Twitter/useTweets";
export default function SendMessage({setData=()=>{}}) {
  const [state, setState] = useState("");
  return (
    <div className={styles.container}>
      <Input className={styles.input} value={state} onChange={(e)=>setState(e.target.value)} />
      <Button className={`${styles.button}`} onClick={()=>{
        useSendTweets(state, setData)
        setState("")
      }}>
        <i className="tim-icons icon-send"></i>
      </Button>
    </div>
  );
}
