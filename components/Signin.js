import styles from '../styles/Signup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, logout } from '../reducers/user';
import { useRouter } from 'next/router';

function Signin() {
    const dispatch = useDispatch();
    const router = useRouter();
    
    //const user = useSelector((state) => state.user);

    //const [isModalVisible, setIsModalVisible] = useState(false);

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signInUsername, token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    router.push('/homepage')
                    
                }
            });
    };

    return (
        <div className={styles.registerContainer}>
            {/* <div className={styles.registerSection}> */}
                <h2>Sign-in</h2>
                <input type="text" className={styles.registerSection} placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input type="password" className={styles.registerSection} placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <button id="connection" className={styles.signInBtn} onClick={() => handleConnection()}>Signin</button>
            {/* </div> */}
        </div>
    );
}


export default Signin;

