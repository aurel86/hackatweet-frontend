import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet } from '../reducers/tweets';
import { useState } from 'react';

function Tweet() {
    const dispatch = useDispatch();
    // const toDoTweet = useSelector(state => state.tweets.value)

    const [tweet, setTweet] = useState ('');

    const toDoTweet = (newTweet)=> {
        setTweet([...tweet, newTweet]);
    }

    const handleTtweet = () => {
        dispatch(addTweet());
    }
  return (

    <div className={styles.container}>
     
        <div className={styles.inputContainer}>
        <h1 className={styles.h1}>Home</h1>
        <input type="text"  id="tweet" onChange={(e) => setTweet(e.target.value)} value={tweet} />
        <button id="connection" onClick={() => handleTtweet()}>Tweet</button>
        {/* {Tweet} */}
        </div>
        
     
     
      </div>



    
  );
}

export default Tweet;