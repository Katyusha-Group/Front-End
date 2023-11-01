import React from 'react';
import Tweet from './Tweet';
import styles from '../../assets/css/Timeline/Timeline.module.css';
import { useState } from 'react';

const tweets = [
  { id: 1, text: 'Hello Twitter!', username: 'user1' },
  { id: 2, text: 'This is a tweet.', username: 'user2' },
  // Add more tweets as needed
];

function Timeline() {
  const [activeTab, setActiveTab] = useState('tweets');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'tweets' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('tweets')}
        >
          Tweets
        </button>
        <button
          className={activeTab === 'media' ? styles.activeTab : styles.tab}
          onClick={() => handleTabClick('media')}
        >
          Media
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
  );
}

export default Timeline;
