import React, { useEffect } from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
import styles from "../assets/css/landing/newLanding.module.css";
import Mainpart from "./Landing/Mainpart";
import PlanningInLanding from "./Landing/PlanningInLanding";
import TimeLinelanding from "./Landing/TimeLinelanding";
import ThirdLanding from "./Landing/ThirdLanding";
import Fourthlanding from "./Landing/Fourthlanding";
import FivethLanding from "./Landing/FivethLanding";

const cardVariants  = {
  offscreen: {
    opacity:0,
  },
  onscreen: {
    opacity:1,
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.8
    }
  }
};

const NewLandingpage = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: scrollY,
      transition: { duration: 0.5 },
    });
  }, [controls, scrollY]);

  return (
    <div className={styles.scrollContainer}>
      <motion.div
        animate={controls}
        className={styles.page}

      >
        <Mainpart />
      </motion.div>

      <motion.div
        animate={controls}
        className={styles.page}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"


      >
        <PlanningInLanding />
      </motion.div>

      <motion.div
        variants={cardVariants}
        animate={controls}
        className={styles.page}
        initial="offscreen"
        whileInView="onscreen"


      >
        <TimeLinelanding />
      </motion.div>

      <motion.div
        animate={controls}
        className={styles.page}
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"


      >
        <ThirdLanding />
      </motion.div>

      <motion.div animate={controls} className={styles.page}>
        <Fourthlanding />
      </motion.div>

      <motion.div animate={controls} className={styles.page}>
        <FivethLanding />
      </motion.div>
    </div>
  );
};

export default NewLandingpage;
