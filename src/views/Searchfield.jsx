import React from 'react'
import styles from '../assets/css/Searchbar.module.css'
import { useAllProfiles} from '../hooks/useSearchprofile'


const Searchfield = () => {
  const { allProfiles, filteredProfiles, loading, searchProfiles} = useAllProfiles()
  if(loading){
    return <></>
  }
  return (
    <div className={styles.searchbar}>
        <input placeholder='جست جو' className={styles.field} type="text" />
    </div>
  )
}

export default Searchfield