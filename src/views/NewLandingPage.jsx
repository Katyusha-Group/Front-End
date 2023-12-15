import React, { useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import styles from "./../assets/css/Landing/newLanding.module.css";
import PlanningInLanding from "./Landing/PlanningInLanding";
import TimeLinelanding from "./Landing/TimeLinelanding";
import ThirdLanding from "./Landing/ThirdLanding";
import Fourthlanding from "./Landing/Fourthlanding";
import FivethLanding from "./Landing/FivethLanding";
import Mainpart from "./Landing/mainpart"
const cardVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 2,
      delay: 0.5,
    },
  },
};

const NewLandingpage = () => {
  const controls = useAnimation();

  return (
    <div className={styles.scrollContainer}>
      <motion.div  className={styles.page}>
        <Mainpart />
      </motion.div>

      <motion.div
        className={styles.page}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <PlanningInLanding />
      </motion.div>

      <motion.div
        variants={cardVariants}
        className={styles.page}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <TimeLinelanding />
      </motion.div>

      <motion.div
        className={styles.page}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ThirdLanding />
      </motion.div>

      <motion.div
        className={styles.page}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Fourthlanding />
      </motion.div>

      <motion.div
        className={styles.page}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <FivethLanding />
      </motion.div>
    </div>
  );
};

export default NewLandingpage;
