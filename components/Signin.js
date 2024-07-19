import styles from '../styles/Signup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, logout } from '../reducers/user';
import Home from './Home';

function Signin() {
    const dispatch = useDispatch();
    
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
                    //setIsModalVisible(false)
                }
            });
    };

    return (
        <div className={styles.registerContainer}>
            {/* <div className={styles.registerSection}> */}
                <h2>Sign-in</h2>
                <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <button id="connection" onClick={() => handleConnection()}>Signin</button>
            {/* </div> */}
        </div>
    );
}


export default Signin;

