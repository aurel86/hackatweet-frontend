import styles from '../styles/Signup.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, logout } from '../reducers/user';
import { useRouter } from 'next/router';


function SignUp() {
    const dispatch = useDispatch();
    const router = useRouter();

    //const user = useSelector((state) => state.user);

    //const [isModalVisible, setIsModalVisible] = useState(false);

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
                    setSignUpFirstname('');
                    setSignUpUsername('');
                    setSignUpPassword('');
                    //setIsModalVisible(false)
                    router.push('/homepage');
                }
            });
    };

    return (
        <div className={styles.registerContainer}>
            {/* <div className={styles.registerSection}> */}
            <h2>Sign-up</h2>
            <input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
            <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <button id="register" onClick={() => handleRegister()}>Signup</button>
            
                
            


            {/* </div> */}
        </div>
    );
}


export default SignUp;