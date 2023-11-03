import React from 'react'
import styles from '../assets/css/Searchbar.module.css'
import Searchfield from './Searchfield'
import UserSearchResponce from './UserSearchResponce'

const Searchbar = () => {
  return (
    <div className={styles.main}>
      <Searchfield/>
      <UserSearchResponce/>
      <UserSearchResponce/>
      <UserSearchResponce/>
        
    </div>
  )
}

export default Searchbar