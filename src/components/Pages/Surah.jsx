import React from 'react';

const Surah = ({surah}) => {
    console.log(surah);
    const {name, englishName, englishNameTranslation, revelationType, ayahs} = surah;
    const {number, audio, audioSecondary, text, numberInSurah, juz, manzil, page, ruku, hizbQuarter, sajda} = ayahs;
    console.log(name);
    
    return (
        <div>
            <div className="rounded-xl">
                <div className="grid place-content-center">
                    <h1 className='text-[18px] md:text-[22px] text-center'>{name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Surah;