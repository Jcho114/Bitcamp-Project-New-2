import React from 'react';
import Investment from './Assets/investment.webp';
import ReactLogo from './Assets/react.png';
import LeafletLogo from './Assets/react-leaflet.png';
import PytorchLogo from './Assets/pytorch.png';
import ExpressJSLogo from './Assets/expressjs.png';
import GithubLogo from './Assets/github.png';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>

            <div className='home-intro'>
                <div className='home-intro-left'>
                    <h1 id='home-title'>Real Estate Price Predictor</h1>
                    <p id='home-description'>An investment tool for current and future homeowners</p>
                </div>
                <div className='home-intro-right'>
                    <img src={Investment} alt='Investment'></img>
                </div>
            </div>

            <div className='technologies'>
                <h1 id='technologies-title'>What We Used</h1>
                <div className='row'>
                    <Cell img={ReactLogo} name='React' />
                    <Cell img={LeafletLogo} name='Leaflet'/>
                    <Cell img={PytorchLogo} name='Pytorch' />
                    <Cell img={ExpressJSLogo} name='ExpressJS' />
                </div>
            </div>

            <div className='github'>
                <h1>Github Repository</h1>
                <a href='https://github.com/Swag369/Bitcamp-Project'><img src={GithubLogo} alt='Github'></img></a>
            </div>

        </div>
    )
}

const Cell = ({ img, name }) => {
    return (
        <div className='cell'>
            <img src={img} alt={name} id={name.toLowerCase()}></img>
            <h3 className='cell-name'>{name}</h3>
        </div>
    )
}

export default Home;