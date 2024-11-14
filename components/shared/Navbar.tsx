'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"


const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="navbar bg-gradient-to-b from-white/100 to-white/0 backdrop-saturate-150 backdrop-blur-[1px]">
            <Link href='/' className='navbar-logo'>
                <Image src='/assets/icons/logo.png' alt='logo' width={75} height={75} />
                <p className="navTitle">UC Irvine</p>
            </Link>

            <nav className="navbar-nav">
                <ul className='navbar-nav-elements'>
                    {navLinks.map((link) => {
                        const isActive = link.route === pathname;

                        return (
                            <li key={link.route} className={`navbar-nav-element group ${
                                isActive ? 'navLink-bold' : 'navLink'
                            }`}>
                                <Link className='' href={link.route}>
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <Button asChild variant="outline" className='navbar-join-button hover:navbar-join-hover'>
                <Link href="/join">Join Now</Link>
            </Button>
        </div>
    )
}

export default Navbar