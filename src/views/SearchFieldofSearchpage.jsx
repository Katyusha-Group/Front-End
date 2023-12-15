import React from 'react'
import styles from '../assets/css/Search/SearchFieldofSearchpage.module.css'

const SearchFieldofSearchpage = ({setSearchQuery}) => {
  
    const handleChange = (e) => {setSearchQuery(e.target.value)}
    
    return (
      <div className={styles.searchbar}>
          <input placeholder='جست جو' onChange={handleChange} className={styles.field} type="text" />
      </div>
    )
  }

export default SearchFieldofSearchpage