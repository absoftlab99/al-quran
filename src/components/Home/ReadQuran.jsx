'use client'
import React from 'react';
import QuranFilter from './QuranFilter';
import SurahLists from './SurahLists';

const ReadQuran = () => {
    return (
        <div className='px-4 md:px-20 my-16'>
            <h1 className='text-[26px] md:text-[42px] text-center font-bold text-primary leading-[52px]'>Read holy Qura with<br></br>
            translations</h1>
            <QuranFilter></QuranFilter>
            <SurahLists></SurahLists>
        </div>
    );
};

export default ReadQuran;