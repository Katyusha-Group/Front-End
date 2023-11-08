import React from "react";
import styles from "../../assets/css/sidebar.module.css";
import logo from "../../assets/img/Logo1.png";
import { Card } from "reactstrap";

const Sidebar = () => {
  return (
    <Card className={styles.bg}>
      <div>
        <div className={styles.header}>
          <img src={logo} alt="" style={{ height: "40px", width: "40px" }} />
          <p className={styles.headertext}>کاتیوشا</p>
        </div>
        <div className={styles.sidebarmenuItems}>
          <svg className={styles.click}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_44_212)">
              <path
                d="M16.6666 33.3333V23.3333H23.3333V33.3333H31.6666V20H36.6666L19.9999 5L3.33325 20H8.33325V33.3333H16.6666Z"
                fill="white"
              />
              
            </g>
            <defs>
              <clipPath id="clip0_44_212">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className={styles.itemtext}> خانه</p>
        </div>
        <div className={styles.sidebarmenuItems}>
        <svg 
        className={styles.click}
        xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M12 32C9.8 32 8.02 33.8 8.02 36C8.02 38.2 9.8 40 12 40C14.2 40 16 38.2 16 36C16 33.8 14.2 32 12 32ZM0 0V4H4L11.2 19.18L8.5 24.08C8.18 24.64 8 25.3 8 26C8 28.2 9.8 30 12 30H36V26H12.84C12.56 26 12.34 25.78 12.34 25.5L12.4 25.26L14.2 22H29.1C30.6 22 31.92 21.18 32.6 19.94L39.76 6.96C39.92 6.68 40 6.34 40 6C40 4.9 39.1 4 38 4H8.42L6.54 0H0ZM32 32C29.8 32 28.02 33.8 28.02 36C28.02 38.2 29.8 40 32 40C34.2 40 36 38.2 36 36C36 33.8 34.2 32 32 32Z" fill="white"/>
</svg>
          <p className={styles.itemtext}> خرید</p>
        </div>
        <div className={styles.sidebarmenuItems}>
       
          <span  style={{color:"white",fontSize:"25px",cursor:"pointer"}} className="tim-icons icon-email-85"/>
          <p className={styles.itemtext}> اعلان ها</p>
        </div>
       
      </div>
    </Card>
  );
};

export default Sidebar;
