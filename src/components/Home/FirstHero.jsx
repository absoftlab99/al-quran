import React from 'react';
import Image from 'next/image';
import quranClose from '../../../public/images/quranClose.svg';
import quranOpen from '../../../public/images/quranOpen.svg';
import Buttons from './Buttons';

const FirstHero = () => {
    
    return (
        <div className='first-hero'>
            <div className="px-4 md:px-20 flex flex-col items-center gap-4 my-10 md:my-20">
                <h1 className='text-center text-[36px] md:text-7xl font-bold text-primary'>Make self-purification<br></br> by reading Quran</h1>
                <p className='text-center text-primary text-[18px] font-light py-4 hidden md:block'>Make self-purification by reading Quran. This website is all about holy quran.<br></br>You can read, you can listen and you can learn so many things about Islam.</p>
                <p className='text-center text-primary text-[14px] font-light py-3 md:hidden'>Make self-purification by reading Quran. This website is all about holy quran. You can read, you can listen and you can learn so many things about Islam.</p>
                <Buttons></Buttons>
            </div>
                <div className="grid grid-cols-12 gap-5 px-4 md:px-20">
                    <div className="col-span-7">
                        <Image
                        className='w-[670px] h-[160ox] md:h-[444px]'
                        src={quranClose}
                        sizes="(min-width: 500px) 100vw"
                        alt='quran image'
                        ></Image>
                    </div>
                    <div className="col-span-5">
                        <Image
                        className='w-[670px] h-[160ox] md:h-[444px]'
                        src={quranOpen}
                        sizes="(min-width: 500px) 100vw"
                        alt='quran image'
                        ></Image>
                    </div>
                </div>
        </div>
    );
};

export default FirstHero;