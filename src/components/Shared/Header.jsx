"use client";
import React from 'react';
import Logo from '../../../public/images/Logo.svg';
import Image from "next/image";
import Link from 'next/link';
import PhoneProfile from './PhoneProfile';
const Header = () => {
    return (
        <div className="">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Image
                        src={Logo}
                        sizes="(min-width: 500px) 100vw"
                        alt='al quran logo'
                    ></Image>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>About</Link></li>
                        <li><Link href={'/'}>Translation</Link></li>
                        <li><Link href={'/'}>Donate</Link></li>
                        <li><Link href={'/'}>Hire Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="navbar-end drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor='my-drawer-4' tabIndex={0} role="button" className="drawer-button btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <div className="drawer-side md:hidden">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu w-80 min-h-full bg-white text-base-content">
                                <PhoneProfile></PhoneProfile>
                                <div className='py-4'>
                                    {/* Sidebar content here */}
                                    <li><Link href={'/'}>Home</Link></li>
                                    <li><Link href={'/'}>About</Link></li>
                                    <li><Link href={'/'}>Translation</Link></li>
                                    <li><Link href={'/'}>Donate</Link></li>
                                    <li><Link href={'/'}>Hire Us</Link></li>
                                </div>
                                <hr className='my-2' />
                                <div className="flex flex-col items-start px-4">
                                    <button className='btn btn-ghost'>Log in</button>
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className='btn btn-ghost'>Log in</button>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className="divider divider-primary m-0 hidden md:flex"></div>
        </div>
    );
};

export default Header;