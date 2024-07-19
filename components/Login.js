
import styles from '../styles/Login.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { Modal } from 'antd';
import SignUp from './SignUp';
import Signin from './Signin';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faXmark } from '@fortawesome/free-solid-svg-icons';



function Login() {
  const [showSignIn, setShowSignIn] = useState(false); 
  const [showSignUp, setShowSignUp] = useState(false);

   // Fonction pour ouvrir la modal de connexion 
   const openSignInModal = () => { setShowSignIn(true); }; 
   // Fonction pour ouvrir la modal d'inscription 
   const openSignUpModal = () => { setShowSignUp(true); }; 
   // Fonction pour fermer les modals 
   const closeModal = () => { setShowSignIn(false); setShowSignUp(false); }; 



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
        <button className={styles.inputSignup} onClick={openSignUpModal} >Sign up</button>
        
        <h3 className={styles.h3}>Already have an account?</h3>
        <button className={styles.inputSignin} onClick={openSignInModal} >Sign in</button>
        <Modal getContainer="#react-modals" className={styles.modal} visible={showSignUp} closable={false} footer={null} onCancel={closeModal} >
          <SignUp />
        </Modal>
        <Modal getContainer="#react-modals" className={styles.modal} visible={showSignIn} closable={false} footer={null} onCancel={closeModal} >
          <Signin />
        </Modal>
      </div>
    </div >
  );
}

export default Login;