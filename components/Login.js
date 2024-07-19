
import styles from '../styles/Login.module.css'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { login, logout } from '../reducers/user';
import SignUp from './SignUp';
import Signin from './Signin';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faXmark } from '@fortawesome/free-solid-svg-icons';



function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isModalVisible, setIsModalVisible] = useState(false);



  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (

    <div className={styles.container}>
      <div className={styles.containerImage}  >
        <Image classname={styles.logo} src="/logo.png" alt="logo"
          width={250} height={250} margin-left={50} />
      </div>
      <div className={styles.containerInputs}>
        <Image classname={styles.logo} src="/logo.png" alt="logo"
          width={100} height={100} />
        <h1 className={styles.h1}>See what's happening</h1>
        <h2 className={styles.h2}>Join Hackatweet today.</h2>
        <button className={styles.inputSignup} onClick={showModal} >Sign up</button>
        
        <h3 className={styles.h3}>Already have an account?</h3>
        <button className={styles.inputSignin} onClick={showModal} >Sign in</button>
        <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null} onCancel={showModal} >
          {/* <FontAwesomeIcon onClick={showModal} className={styles.userSection} icon={faXmark} /> */}
          <SignUp />
          <Signin />
        </Modal>
        {/* <Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
          <FontAwesomeIcon onClick={showModal} className={styles.userSection} icon={faXmark} />
          <Signin />
        </Modal> */}
      </div>
    </div >
  );
}

export default Login;