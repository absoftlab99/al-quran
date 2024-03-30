import React from 'react';
import FirstHero from '../Home/FirstHero';
import CounterRope from '../Home/CounterRope';
import AboutQuran from '../Home/AboutQuran';

const HomeMain = () => {
    return (
        <div className=''>
            <FirstHero></FirstHero>
            <CounterRope></CounterRope>
            <AboutQuran></AboutQuran>
        </div>
    );
};

export default HomeMain;