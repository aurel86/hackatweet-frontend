import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';

function Tweet() {
    const dispatch = useDispatch();
    // const toDoTweet = useSelector(state => state.tweets.value)

    const [tweet, setTweet] = useState ('');

    const tweetos = (newTweet)=> {
        setTweet([...tweet, newTweet]);
    }

    const handleTtweet = () => {
        dispatch(addTweet());
    }
  return (

    <div className={styles.container}>
     
        <div className={styles.inputContainer}>
        
        <input className={styles.inputTweet} type="text" placeholder="what's up?"   onChange={(e) => setTweet(e.target.value)} value={tweet} />
        <button className={styles.buttonClick} onClick={() => handleTtweet()}>Tweet</button>
        {/* {Tweet} */}
        </div>
        
     
     
      </div>



    
  );
}

export default Tweet;