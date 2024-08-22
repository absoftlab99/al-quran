'use client'
import { Rubik } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';

const rubik = Rubik({ subsets: ["arabic"] });

const SurahBtn = (surahs) => {
    const { surah } = surahs;
    const { number, englishName, name, englishNameTranslation, numberOfAyahs } = surah;
    // console.log(surah.name);

    const [isActive, setIsActive]= useState(true);
    
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link href={`${number}/${englishName}`}>
                <div onMouseEnter={()=>{setIsActive(false)}} onMouseLeave={()=>{setIsActive(true)}} className={`flex justify-between rounded-md p-4 cursor-pointer ${isActive?'bg-success':'bg-primary'}`}>
                    <div className="flex jusitfy-start items-center gap-4">
                        <span className={`text-primary ${isActive?'bg-base-100':'bg-success'} rounded-md w-10 h-10 text-center content-center`}>{number}</span>
                        <div>
                            <p className={`font-bold text-[20px] ${isActive?'text-primary':'text-success'}`}>{englishName}</p>
                            <span className={`text-[14px] text-info ${isActive?'text-info':'text-neutral'}`}>{englishNameTranslation}</span>
                        </div>
                    </div>
                    <div className="text-end">
                        <p className={`font-bold text-[20px] text-end ${isActive?'text-primary':'text-success'} ${rubik.className}`}>{name}</p>
                        <span className={`text-[14px] text-info ${isActive?'text-info':'text-neutral'}`}>{numberOfAyahs +' '+'verses'}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SurahBtn;