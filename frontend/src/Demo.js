import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer.js';
import Playground from './Playground.js';
import './Demo.css';
import { UserContext } from './Context/UserContext.js';

const SecondWindow = () => {
    return (
        <div className="window2">
            <h1>Second Window</h1>
        </div>
    );
}

const ThirdWindow = () => {
    return (
        <div className="window3">
            <h1>Third Window</h1>
        </div>
    );
}

const windows = [<Playground />, <SecondWindow />, <ThirdWindow />];

const Demo = () => {
    const { loggedIn } = useContext(UserContext);
    const { demoWindow } = useContext(UserContext);

    return (
        <div className='demo'>
            {loggedIn ? 
                <div className='demo'>
                    {windows[demoWindow]}
                    <Footer />
                </div>
                    :
                <div id='non-demo-view'>
                    <h1>You must log in to access the demo!</h1>
                    <Link id='login-button' to="/login">Log in</Link>
                </div>
            }
        </div>
    );
}

export default Demo;