import React, { useState ,useEffect} from 'react';
import styles from '../assets/css/Searchbar.module.css';
import Searchfield from './Searchfield';
import UserSearchResponce from './UserSearchResponce';
import { Card } from 'reactstrap';
import { useAllProfiles } from '../hooks/useSearchprofile';
import axios from 'axios';
import { set } from 'lodash';
import { use } from 'chai';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { filteredProfiles, loading } = useAllProfiles(searchQuery);
  useEffect(() => {
  }, [searchQuery]);

  
  return (
    <Card className={styles.main}>
      <Searchfield setSearchQuery={setSearchQuery} />

      
          {loading ? (
            <div></div>
          ) : (
            filteredProfiles.map((item, index) => {
              return <UserSearchResponce res={item} />;
            })
          )         
          }

    </Card>
  );
};

export default Searchbar;