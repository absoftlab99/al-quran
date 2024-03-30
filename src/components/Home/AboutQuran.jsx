import React from 'react';
import joinQuran from '../../../public/images/join-quran.svg';
import Image from 'next/image';

const AboutQuran = () => {
    return (
        <div className="px-4 md:px-20 my-10 md:my-28">
            <div className='grid grid-cols-12 items-center'>
                <div className="col-span-12 md:col-span-6">
                    <Image
                        src={joinQuran}
                        sizes="(max-width: 768px) 100vw"
                        alt='al quran image'
                    ></Image>
                </div>
                <div className="col-span-12 md:col-span-6">
                    <h1 className='text-primary text-[26px] md:text-[42px] font-bold mb-5'>About holy Quran</h1>
                    <p className='text-info text-[14px] md:text-[16px]'>The Quran, also romanized Qur&apos;an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from Allah. It is organized in 30 chapters, 114 surahs which consist of 6,236 verses.</p><br></br>
                    <p className='text-info text-[14px] md:text-[16px]'>In addition to its religious significance, it is widely regarded as the finest work in Arabic literature.</p>
                    <div className="mt-6">
                        <button className='text-primary btn btn-secondary'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutQuran;