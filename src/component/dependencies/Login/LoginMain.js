import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiLogin } from '../../../API/Auth';
import { login } from '../../../user-data/userRedux';
import { store } from '../../../app/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const LoginMain = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const checkRef = useRef();

    useEffect(() => {
        console.log(store.getState());
        const savedData = JSON.parse(window.localStorage.getItem('userData'));
        if (savedData?.userName) {
            userNameRef.current.value = savedData.userName;
            passwordRef.current.value = savedData.password;
        }
    }, []);

    const userLogin = async (e) => {
        e.preventDefault();
        const ids = { userName: userNameRef.current.value, password: passwordRef.current.value };
        const newData = await apiLogin(ids.userName, ids.password);
        if (newData.data) {
            dispatch(login(newData.data?.body.token));
            if (checkRef.current.checked) {
                window.localStorage.setItem('userData', JSON.stringify(ids));
            }
            navigate('/dashboard');
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon className="fa fa-user-circle " icon={faUserCircle} />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label
                        ><input type="text" id="username" ref={userNameRef} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label
                        ><input type="password" id="password" ref={passwordRef} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" ref={checkRef} /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={userLogin}>Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default LoginMain;