import React from 'react';
import Tweet from './Tweet';
import styles from '../../assets/css/Timeline/Timeline.module.css';
import { useState } from 'react';


const tweets = [
  { id: 1, text: 'عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.عرفان بهترین صاحبیه که تو زندگیم داشتم. بهترین غذا هارو بهم می ده. دلم می خواد لیسش بزنم.', username: 'jett White',name: 'جت وایت' },
  { id: 2, text: 'من یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشیمن یه پرندم آرزو دارم ت .یارم باشی', username: 'white Jett',name: 'وایت جت' },
  // Add more tweets as needed
];

function Timeline() {
  const [activeTab, setActiveTab] = useState('tweets');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className={styles.timeline}>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'tweets' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('tweets')}
        >
          دنبال کننده ها
        </button>
        <button
          className={activeTab === 'media' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('media')}
        >
          برای شما
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'tweets' && (
          <div className={styles.tweetsContainer}>
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        )}
        {activeTab === 'media' && (
          <div className={styles.mediaContainer}>
            {/* Render media content here */}
          </div>
        )}
      </div>
    </div>
    </>
  );
  }

export default Timeline;
