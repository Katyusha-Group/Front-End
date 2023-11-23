import React from 'react'
import styles from '../assets/css/notfoundmain.module.css'
import { ReactSVG } from "react-svg";
import mine from "../assets/img/oops-404-error-with-a-broken-robot-animate.svg"


const Notfoundmain = () => {
  return (
    <div className={styles.main}>
        <ReactSVG src={mine}/>
    </div>
  )
}

export default Notfoundmain