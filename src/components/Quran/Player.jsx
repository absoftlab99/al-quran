'use client'
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ audio, audioSecondary }) => {
    
    return (
        <div className="">
            <AudioPlayer className='rounded full'
                src={audio}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    );
};

export default Player;