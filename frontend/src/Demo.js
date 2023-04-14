import React, { useContext } from 'react';
import SideBar from './Components/SideBar.js';
import './Demo.css';
import { UserContext } from './Context/UserContext.js';

const FirstWindow = () => {
    return (
        <div>
            <h1>First Window</h1>
        </div>
    );
}

const SecondWindow = () => {
    return (
        <div>
            <h1>Second Window</h1>
        </div>
    );
}

const ThirdWindow = () => {
    return (
        <div>
            <h1>Third Window</h1>
        </div>
    );
}

const windows = [<FirstWindow />, <SecondWindow />, <ThirdWindow />];

const Demo = () => {
    const { loggedIn } = useContext(UserContext);
    const { demoWindow } = useContext(UserContext);

    return (
        <div className='demo'>
            <SideBar />
            <h1 id='demo-title'>{loggedIn ? "Hello User" : "Demo"}</h1>
            {windows[demoWindow]}
        </div>
    );
}

export default Demo;