import React from 'react';
import Player from './Player';
import MobileAudioPlayer from './MobileAudioPlayer';

const Ayahs = ({ ayah }) => {

    const { number, audio, audioSecondary, text, numberInSurah, juz, manzil, page, ruku, hizbQuarter, sajda } = ayah;

    return (
        <div className='bg-base-200 my-3 p-5 rounded-xl text-end'>
            <p className='text-[20px] md:text-[36px] leading-[70px]'>{text}</p>
            <div className='hidden md:block'><Player audioSecondary={audioSecondary} audio={audio} ></Player></div>
            <div className='md:hidden'><MobileAudioPlayer audioSecondary={audioSecondary} audio={audio} ></MobileAudioPlayer></div>
        </div>
    );
};

export default Ayahs;