import React from 'react'
import styles from '../assets/css/UserSearchResponce.module.css'
import {Link} from 'react-router-dom'

const UserSearchResponce = (res) => {
  console.log("🚀 ~ file: UserSearchResponce.jsx:6 ~ UserSearchResponce ~ res:", res)
  return (
    <Link to={"/profile/"+res.res.username} className={styles.main}>
        <img className={styles.img} src={res.res.image} />
        <p className={styles.text}>{res.res.name}</p>
    </Link>
  )
}

export default UserSearchResponce