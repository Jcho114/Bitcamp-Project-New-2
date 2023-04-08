import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../Assets/logo.png';
import Login from '../Assets/login.webp';
import Logout from '../Assets/logout.png';
import Demo from '../Assets/demo.png';
import Playground from '../Assets/playground.png';
import { UserContext } from '../Context/UserContext.js';

const NavBar = () => {
    const { loggedIn, logout } = useContext(UserContext);

    const loggedInOrNot = () => {
        if (loggedIn) {
            return (
                <Link className='link' to='/' onClick={() => logout()}>
                    <img src={Logout} alt='Logout'></img>
                </Link>
            );
        }
        return (
            <Link className='link' to='/login'>
                <img src={Login} alt='Login'></img>
            </Link>
        );
    }

    return (
        <div className='nav-bar'>
            <div id='right-side'>
                <Link id='logo' to='/'>
                    <img src={Logo} alt='Logo'></img>
                </Link>
                <h1 id='project-name'>Real Estate Price Predictor</h1>
            </div>
            <div className='links'>
                <Link className='link' to='/demo'>
                    <img src={Demo} alt='Demo'></img>
                </Link>
                <Link className='link' to='/playground'>
                    <img src={Playground} alt='Playground'></img>
                </Link>
                {loggedInOrNot()}
            </div>
        </div>
    );
}

export default NavBar;