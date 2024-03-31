import React from 'react';
import FirstHero from '../Home/FirstHero';
import CounterRope from '../Home/CounterRope';
import AboutQuran from '../Home/AboutQuran';
import ReadQuran from '../Home/ReadQuran';

const HomeMain = () => {
    return (
        <div className=''>
            <FirstHero></FirstHero>
            <CounterRope></CounterRope>
            <AboutQuran></AboutQuran>
            <ReadQuran></ReadQuran>
        </div>
    );
};

export default HomeMain;