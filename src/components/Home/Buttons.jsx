'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import book from '../../../public/icons/book.svg';
import mic from '../../../public/icons/mic.svg';
import micwhite from '../../../public/icons/micwhite.svg';

const Buttons = () => {
    const [iconReverse, setIconReverse] = useState(false);
    return (
        <div className='flex gap-4'>
            <button className='btn btn-secondary'>
                <Image src={book} height={20} width={20} alt='book icon'></Image>Read Quran</button>
            <button onMouseEnter={()=>{setIconReverse(true)}} onMouseLeave={()=>{setIconReverse(false)}} className='btn btn-primary btn-outline'> <Image src={iconReverse === false? mic : micwhite} height={14} width={14} alt='book icon'></Image>Quran Audio</button>
        </div>
    );
};

export default Buttons;