import React from 'react'
import styles from '../assets/css/Searchbar.module.css'
import Searchfield from './Searchfield'
import UserSearchResponce from './UserSearchResponce'
import { Card } from 'reactstrap'

const Searchbar = () => {
  return (
    <Card className={styles.main}>
      <Searchfield/>
      <UserSearchResponce/>
      <UserSearchResponce/>
      <UserSearchResponce/>
        
    </Card>
  )
}

export default Searchbar