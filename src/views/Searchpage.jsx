import React from 'react'
import Sidebar from './Sidebar/Sidebar.jsx'
import SearchMain from './SearchMain.jsx'
import styles from "../assets/css/Search/SearchPage.module.css"

const Searchpage = () => {
  return (
    <div className={styles.main}>
        <Sidebar/>        
        <SearchMain/>
    </div>
  )
}

export default Searchpage