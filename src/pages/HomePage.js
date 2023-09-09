import React from 'react'

import TopBar from '../components/topBar';
import logo from '../logo.svg'

const HomePage = () => {
    return (
        <div>
            <div>
                <TopBar></TopBar>
            </div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hey from HomePage</h1>

                <p>This is your awesome HomePage subtitle</p>

            </div>
        </div>
    );
}

export default HomePage;