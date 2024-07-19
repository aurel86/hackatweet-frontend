import styles from '../styles/Tweet.module.css';
import Image from 'next/image';

function Tweet() {
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
        <h1 className={styles.h1}>Home</h1>
        {/* {Tweet} */}
        </div>
        <div className={styles.tweetContainer}>
          {/* {LastTweets} */}
        </div>
      </div>
      <div className={styles.containerRight}>
      <h1 className={styles.h1}>Trends</h1>
      {/* {Trends} */}
      </div>



    </div>
  );
}

export default Tweet;