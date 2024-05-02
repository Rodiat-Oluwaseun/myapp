import React from 'react';

import { Accesory, Blog, Footer, Header, Main, WhatGPT3 } from './containers';
import { Brand, Cta, Navigation } from './components';
import './App.css';


const App = () => {
    return (
        <div className='App'>
            <div className='gradient-bg'>
                <Navigation />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Accesory />
            <Cta />
            <Blog />
            <Footer />
            <Main />

        </div>
    )
}

export default App