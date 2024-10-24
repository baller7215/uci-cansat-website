'use client';

import React, { useState } from 'react';
import { LuMenu } from "react-icons/lu";  // Hamburger icon
import { FaXmark } from "react-icons/fa6"; // Close icon
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';  // Import Framer Motion

const MobileNav = () => {
    // State to manage whether the menu is open or not
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Function to toggle the menu
    const toggleMenu = () => {
        console.log('toggle menu');
        setMenuOpen(!menuOpen);
    };

    // Framer Motion animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Staggering animations for children
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };


    return (
        <div className='mobileNav'>
            {/* Navbar Header: Title and Hamburger Icon */}
            <div className="w-full flex justify-between">
                <Link href='/'>
                    <p className='mobile-navTitle hoverTransition'>UC Irvine</p>
                    {/* <motion.p
                        className='mobile-navTitle hoverTransition'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    >
                        UC Irvine
                    </motion.p> */}
                </Link>
                
                <button onClick={toggleMenu} className='mobile-icon hoverTransition'>
                    {menuOpen ? <FaXmark className='h-8 w-8' /> : <LuMenu className='h-8 w-8' />}
                </button>
            </div>

            {/* Full-Screen Menu Overlay */}
            {menuOpen && (
                <motion.div
                    className="fixed inset-0 bg-[var(--color-black)] text-custom-gray flex flex-col items-center justify-center z-50 pb-5"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className='mobileNav'>
                        <div className="w-full flex justify-between">
                            <Link href='/'>
                                <p className='mobile-navTitle hoverTransition'>UC Irvine</p>
                                {/* <motion.p
                                    className='mobile-navTitle hoverTransition'
                                    variants={itemVariants}
                                >
                                    UC Irvine
                                </motion.p> */}
                            </Link>
                            
                            <button onClick={toggleMenu} className='mobile-icon hoverTransition'>
                                {menuOpen ? <FaXmark className='h-8 w-8' /> : <LuMenu className='h-8 w-8' />}
                            </button>
                        </div>
                    </div>
                    
                    {/* Navigation Links */}
                    <motion.nav className="navbar-nav" variants={containerVariants}>
                        <motion.ul className="flex flex-col items-center gap-8 text-2xl" variants={containerVariants}>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname;
                                
                                return (
                                    <motion.li
                                        key={link.route}
                                        className={`navbar-nav-element group ${isActive ? 'navLink-bold' : 'navLink'}`}
                                        variants={itemVariants}
                                    >
                                        <Link href={link.route} onClick={toggleMenu}>
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </motion.ul>
                    </motion.nav>

                    {/* Join Button */}
                    <motion.div variants={itemVariants}>
                        <Link href="/join" onClick={toggleMenu} className="mt-10">
                            <button className="rounded-full bg-[var(--color-orange)] px-10 py-3 text-[var(--color-whiteIce)] text-xl">
                                Join Now
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default MobileNav;
