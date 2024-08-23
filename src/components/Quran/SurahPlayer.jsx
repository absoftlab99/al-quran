"use client"
import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

const SurahPlayer = ({ ayahs }) => {
    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

    const handleClickNext = () => {
        if (currentAudioIndex < ayahs.length - 1) {
            setCurrentAudioIndex(currentAudioIndex + 1);
        }
    };

    const handleEnded = () => {
            handleClickNext();
    };
    return (
        <div>
            <AudioPlayer className='rounded full'
                autoPlay={false}
                src={ayahs[currentAudioIndex].audio}
                showSkipControls={false}
                showJumpControls={false}
                onEnded={handleEnded}
                onClickNext={handleClickNext}
            />
        </div>
    );
};

export default SurahPlayer;