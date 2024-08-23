import { Scheherazade_New } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import kaba from '../../assets/mecca.png'
import modina from '../../assets/nabawi-mosque.png'
import quran from '../../assets/quran.png'
import Ayahs from '../Quran/Ayahs';

const arabic = Scheherazade_New({ subsets: ["arabic"], weight: ["400", "500", "600", "700"] });

const Surah = ({ surah }) => {
    console.log(surah);
    const { name, englishName, englishNameTranslation, revelationType, ayahs } = surah;

    return (
        <div className={`${arabic.className} rounded-xl bg-white m-5`}>
            <div className="rounded-t-xl bg-primary p-5">
                <div className="grid place-content-center">
                    <h1 className='text-[18px] md:text-[28px] text-center text-white'>{name}</h1>
                    <h1 className='text-[18px] md:text-[28px] text-center text-white'>{englishName} <i className='text-[20px]'>{englishNameTranslation}</i></h1>
                    <div className='flex gap-5 items-center'>
                        <div className="flex gap-2 items-center">
                            <div className="bg-white rounded-full">
                                {
                                    revelationType == "Meccan" ? <Image className='p-2' src={kaba} height={50} width={50} alt='kaba'></Image>
                                        : <Image className='p-2' src={modina} height={40} width={40} alt='kaba'></Image>
                                }
                            </div>
                            <p className='text-white text-[14px] md:text-[18px]'>{revelationType}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="bg-white rounded-full">
                                <Image className='p-2' src={quran} height={40} width={40} alt='kaba'></Image>
                            </div>
                            <p className='text-white text-[14px] md:text-[18px]'>{ayahs.length} Ayahs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                {
                    ayahs.map(ayah => <Ayahs key={ayah.number} ayah={ayah}></Ayahs>)
                }
            </div>
        </div>
    );
};

export default Surah;