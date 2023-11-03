import React from 'react'
import styles from '../assets/css/Searchbar.module.css'


const Searchfield = () => {
  return (
    <div className={styles.searchbar}>
        <input placeholder='جست جو' className={styles.field} type="text" />
    </div>
  )
}

export default Searchfield