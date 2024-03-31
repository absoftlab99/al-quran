'use client'
import React, { useState } from 'react';
import QuranFilter from './QuranFilter';
import SurahLists from './SurahLists';
import JuzzList from './JuzzList';


const ReadQuran = () => {
    const [isActive, setIsActive] = useState(1);
    const [loadedSurahCount, setLoadedSurahCount] = useState(12);

    const loadMoreSurahs = () => {
        setLoadedSurahCount(prevCount => prevCount + 12);
    };

    return (
        <div className='px-4 md:px-20 my-16'>
            <h1 className='text-[26px] md:text-[42px] text-center font-bold text-primary leading-[52px]'>Read holy Quran with<br></br>
            translations</h1>
            <QuranFilter isActive={isActive} setIsActive={setIsActive}></QuranFilter>
            {
                isActive === 1 ? <SurahLists loadedSurahCount={loadedSurahCount} loadMoreSurahs={loadMoreSurahs}></SurahLists>
                
                : <JuzzList></JuzzList>
                
            }
            
        </div>
    );
};

export default ReadQuran;