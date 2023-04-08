import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext.js';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='side-bar'>
            <Option name='Name1' window={0} />
            <Option name='Lorem Ipsum' window={1} />
            <Option name='Bitcamp stuff' window={2} />
        </div>
    );
}

const Option = ({ name, window }) => {
    const { changeWindow } = useContext(UserContext);

    const handle = (window) => {
        changeWindow(window);
        console.log("Changing window to " + window);
    }

    return (
        <div className='option' onMouseDown={() => handle(window)}>
            <p className='option-title'>{name}</p>
        </div>
    );
}

export default SideBar;