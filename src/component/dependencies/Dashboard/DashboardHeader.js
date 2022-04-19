import React, { useEffect, useState } from 'react';
import logo from '../../../img/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../user-data/userRedux';
const Dashboardheader = () => {
    const userData = useSelector((state)=> state.userData)
    const navigate = useNavigate()
const dispatch = useDispatch()

useEffect(() => {
   console.log(userData,'dats ici');
}, [])
    const goToSignOut = () => {
        dispatch(logout())
        navigate('/login')
    }
    const goToHome = () => {
        navigate('/')
    }
    const goToDashboard = () => {
        navigate('/dashboard')
    }
    return (
        <nav className="main-nav">
            <div className="main-nav-logo" onClick={goToHome}>
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </div>
            <div className="flex">
            <div className="main-nav-item" onClick={goToDashboard}>
                <FontAwesomeIcon className="fa fa-user-circle " icon={faUserCircle} />
                {userData.profile?.payload?.firstName}
            </div>
            <div className="main-nav-item" onClick={goToSignOut}>
              <FontAwesomeIcon className="fa fa-sign-out " icon={faSignOutAlt} />
              Sign Out
              </div>
              </div>
        </nav>
    );

}

export default Dashboardheader;