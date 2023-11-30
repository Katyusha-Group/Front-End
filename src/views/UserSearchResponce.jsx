import React from 'react'
import styles from '../assets/css/UserSearchResponce.module.css'
import {Link} from 'react-router-dom'

const UserSearchResponce = (res) => {
  return (
    <Link to={"/profile/"+res.username} className={styles.main}>
        <img className={styles.img} src={res.res.image} />
        <p className={styles.text}>{res.res.name}</p>
    </Link>
  )
}

export default UserSearchResponce