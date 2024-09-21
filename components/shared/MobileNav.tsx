'use client';

import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";  // Hamburger icon
import { FaXmark } from "react-icons/fa6"; // Close icon
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';
import Link from 'next/link';

const MobileNav = () => {
    // State to manage whether the menu is open or not
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Function to toggle the menu
    const toggleMenu = () => {
        console.log('toggle menu');
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='mobileNav'>
            {/* Navbar Header: Title and Hamburger Icon */}
            <div className="w-full flex justify-between">
                <Link href='/'>
                    <p className='mobile-navTitle hoverTransition'>UC Irvine</p>
                </Link>
                
                <button onClick={toggleMenu} className='mobile-icon hoverTransition'>
                    {menuOpen ? <FaXmark className='h-8 w-8' /> : <LuMenu className='h-8 w-8' />}
                </button>
            </div>

            {/* Full-Screen Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-[var(--color-black)] text-custom-gray flex flex-col items-center justify-center z-50 pb-5">

                    <div className='mobileNav'>
                        <div className="w-full flex justify-between">
                        <Link href='/'>
                            <p className='mobile-navTitle hoverTransition'>UC Irvine</p>
                        </Link>
                            
                            <button onClick={toggleMenu} className='mobile-icon hoverTransition'>
                                {menuOpen ? <FaXmark className='h-8 w-8' /> : <LuMenu className='h-8 w-8' />}
                            </button>
                        </div>
                    </div>
                    

                    {/* Navigation Links */}
                    <nav className="navbar-nav">
                        <ul className="flex flex-col items-center gap-8 text-2xl">
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname;
                                
                                return (
                                    <li key={link.route} className={`navbar-nav-element group ${isActive ? 'navLink-bold' : 'navLink'}`}>
                                        <Link href={link.route} onClick={toggleMenu} className=''>
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Join Button */}
                    <Link href="/join" onClick={toggleMenu} className="mt-10">
                        <button className="rounded-full bg-[var(--color-orange)] px-10 py-3 text-[var(--color-whiteIce)] text-xl">
                            Join Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
