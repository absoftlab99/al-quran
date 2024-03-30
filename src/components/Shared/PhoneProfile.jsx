import Image from 'next/image';
import user from '../../../public/images/user.svg';
import React from 'react';

const PhoneProfile = () => {
    return (
        <div className="bg-primary flex items-center gap-2 p-4 rounded-md">
            <div className="bg-base-100 rounded-full border-2 border-secondary h-16 w-16 content-center">
                <Image
                    className='p-1'
                    src={user}
                    width={60}
                    height={60}
                    alt='user icon'
                ></Image>
            </div>
            <div>
                <p className='font-bold text-lg text-secondary'>Abullah Al Mahmud</p>
                <p className='font-light text-balance text-white'>riksmamun1999@gmail.com</p>
            </div>
        </div>
    );
};

export default PhoneProfile;