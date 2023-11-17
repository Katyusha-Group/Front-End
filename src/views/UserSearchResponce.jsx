import React from 'react'
import styles from '../assets/css/UserSearchResponce.module.css'


const UserSearchResponce = (res) => {
  return (
    <div className={styles.main}>
        <img className={styles.img} src={res.res.image} />
        <p className={styles.text}>{res.res.name}</p>
    </div>
  )
}

export default UserSearchResponce