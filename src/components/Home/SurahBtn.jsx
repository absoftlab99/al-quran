'use client'
import { Rubik } from 'next/font/google';
import React, { useState } from 'react';

const rubik = Rubik({ subsets: ["arabic"] });

const SurahBtn = (surahs) => {
    const { surah } = surahs;
    const { id, name, arabicName, meaning, verseCount } = surah;
    // console.log(surah.name);

    const [isActive, setIsActive]= useState(true);
    
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <div onMouseEnter={()=>{setIsActive(false)}} onMouseLeave={()=>{setIsActive(true)}} className={`flex justify-between rounded-md p-4 cursor-pointer ${isActive?'bg-success':'bg-primary'}`}>
                <div className="flex jusitfy-start items-center gap-4">
                    <span className={`text-primary ${isActive?'bg-base-100':'bg-success'}  rounded-md w-10 h-10 text-center content-center`}>{id}</span>
                    <div>
                        <p className={isActive?'font-bold text-[20px] text-primary':'font-bold text-[20px] text-success'}>{name}</p>
                        <span className={`text-[14px] text-info ${isActive?'text-info':'text-neutral'}`}>{meaning}</span>
                    </div>
                </div>
                <div className="">
                    <p className={`font-bold text-[20px] text-end ${isActive?'text-primary':'text-success'} ${rubik.className}`}>{arabicName}</p>
                    <span className={`text-[14px] text-info ${isActive?'text-info':'text-neutral'}`}>{verseCount +' '+'verses'}</span>
                </div>
            </div>
        </div>
    );
};

export default SurahBtn;