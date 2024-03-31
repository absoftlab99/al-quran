'use client'
import React, { useState } from 'react';

const QuranFilter = () => {
    const [isActive, setIsActive] = useState(1);

    return (
        <div className='flex justify-between items-center'>
            <div className="border-base-200 border-2 rounded-lg p-1 flex gap-2">
                <button onClick={()=>{setIsActive(1)}} className={isActive === 1 ? 'btn btn-sm md:btn-md btn-primary' : 'btn btn-sm md:btn-md btn-ghost'}>Surah</button>
                <button onClick={()=>{setIsActive(2)}} className={isActive === 2 ? 'btn btn-sm md:btn-md btn-primary' : 'btn btn-sm md:btn-md btn-ghost'}>Juzz</button>
            </div>
            <div className="">
                <label className='text-info text-[14px] md:text-[16px]'>Sort by</label>
                <select className="select select-ghost">
                    <option className='text-primary text-[14px] md:text-[16px] font-bold' selected>Ascending</option>
                    <option className='text-primary text-[14px] md:text-[16px] font-bold'>Discending</option>
                </select>
            </div>
        </div>
    );
};

export default QuranFilter;