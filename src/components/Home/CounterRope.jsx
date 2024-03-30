import React from 'react';

const CounterRope = () => {
    return (
        <div className='bg-primary flex flex-col md:flex-row justify-around gap-5 py-10'>
            <div className="">
                <h1 className='font-bold text-secondary text-4xl text-center'>30</h1>
                <p className='text-accent text-center pt-2'>Quran&apos;s Chapters</p>
            </div>
            <div className="divider md:divider-horizontal m-0 md:m-0"></div>
            <div className="">
                <h1 className='font-bold text-secondary text-4xl text-center'>114</h1>
                <p className='text-accent text-center pt-2'>Quran&apos;s Surahs</p>
            </div>
            <div className="divider md:divider-horizontal m-0 md:m-0"></div>
            <div className="">
                <h1 className='font-bold text-secondary text-4xl text-center'>6,236</h1>
                <p className='text-accent text-center pt-2'>Quran&apos;s Verses</p>
            </div>
            <div className="divider md:divider-horizontal m-0 md:m-0"></div>
            <div className="">
                <h1 className='font-bold text-secondary text-4xl text-center'>86</h1>
                <p className='text-accent text-center pt-2'>Makki Surahs</p>
            </div>
            <div className="divider md:divider-horizontal m-0 md:m-0"></div>
            <div className="">
                <h1 className='font-bold text-secondary text-4xl text-center'>28</h1>
                <p className='text-accent text-center pt-2'>Madani Surahs</p>
            </div>
        </div>
    );
};

export default CounterRope;