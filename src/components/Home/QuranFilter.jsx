'use client'

import React, { useState } from 'react';

const QuranFilter = () => {
    const [isActive, setIsActive] = useState(1);

    return (
        <div className='flex justify-between items-center'>
            <div className="border-base-200 border-2 rounded-lg p-1 flex gap-2">
                <button id='btn' onClick={()=>{setIsActive(1)}} className={isActive === 1 ? 'btn btn-primary' : 'btn btn-ghost'}>Surah</button>
                <button id='btn' onClick={()=>{setIsActive(2)}} className={isActive === 2 ? 'btn btn-primary' : 'btn btn-ghost'}>Juzz</button>
            </div>
            <div className="">
                <label className='text-info'>Sort by</label>
                <select className="select select-ghost">
                    <option selected>Ascending</option>
                    <option>Discending</option>
                </select>
            </div>
        </div>
    );
};

export default QuranFilter;