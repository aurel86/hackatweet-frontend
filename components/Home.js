import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';

function Home() {
  return (

    <div className={styles.container}>
      <div className={styles.containerLeft}  >
        <div className={styles.logo}> <Image src="/logo.png" alt="logo"
          width={50} height={50} /> </div>
        <div className={styles.logo2}> <Image src="/logo2.png" alt="logo"
          width={50} height={50} />
          <p className={styles.p}>John</p>
        </div>
      </div>
      <div className={styles.containerCentral}>
        <div className={styles.inputContainer}>
        {Tweet}
        </div>
        
        <div className={styles.tweetContainer}>
          {/* {LastTweets} */}
        </div>
      </div>
      <div className={styles.containerRight}>
      
      {/* {Trends} */}
      </div>



    </div>
  );
}

export default Home;
        