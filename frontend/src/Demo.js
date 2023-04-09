import React, { useContext, useState, useEffect } from 'react';
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
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
            (response) => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, []);

    return (
        <div className='demo'>
            <SideBar />
            <h1 id='demo-title'>{loggedIn ? "Hello User" : "Demo"}</h1>
            {windows[demoWindow]}
            {String(backendData.message)}
        </div>
    );
}

export default Demo;