import React from 'react'
import styles from '../../assets/css/admin/Admin_Searchbar.module.css';


const Admin_SearchField = ({setSearchQuery}) => {
  
  const handleChange = (e) => {setSearchQuery(e.target.value)}
  
  return (
    <div className={styles.searchbar}>
        <input placeholder='جست و جو' onChange={handleChange} className={styles.field} type="text" />
    </div>
  )
}

export default Admin_SearchField;