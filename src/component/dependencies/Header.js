import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../img/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const goToSignIn = () => {
        navigate('/signin');
    }

    return (
        <nav className="main-nav">
      <div className="main-nav-logo" onClick={goToHome}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
        <div className="main-nav-item" onClick={goToSignIn}>
        <FontAwesomeIcon className = "fa fa-user-circle " icon={faUserCircle} />
          Sign In
        </div>
    </nav>
    );
};

export default Header;