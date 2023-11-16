import React from 'react'
import styles from '../assets/css/Searchbar.module.css'
import Searchfield from './Searchfield'
import UserSearchResponce from './UserSearchResponce'
import { Card } from 'reactstrap'
import { useAllProfiles} from '../hooks/useSearchprofile'
import { all } from 'axios'
import { useState } from 'react'


const Searchbar = () => {
  const {allProfiles,loading} =useAllProfiles()
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <Card className={styles.main}>
      <Searchfield setSearchQuery={setSearchQuery}/>
      
      {
        loading ? <div>loading...</div> :
          allProfiles
          ?.filter((item, index) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())||item.username.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item, index) => {
            console.log("item",item);
            return <UserSearchResponce res={item} />
})}
      
        
    </Card>
  )
}

export default Searchbar