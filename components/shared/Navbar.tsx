'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
    projectsLinks,
    teamLinks,
} from "@/constants";

const Navbar = () => {
    const pathname = usePathname();

    const renderDropdownLinks = (links: LinkItem[]) => (
        <div className="z-20 absolute hidden group-hover:block bg-custom-white/100 shadow-xl rounded-md w-48 transition ease-in-out duration-500">
            {links.map((link: LinkItem) => (
                <Link
                    key={link.route}
                    href={link.route}
                    className="block px-4 py-2 text-custom-rhino hover:bg-custom-orange/50 m-2 rounded-md hover:text-gray-900 transition ease-in-out duration-500"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );

    return (
        <div className="z-20 navbar bg-gradient-to-b from-white/100 to-white/0 backdrop-saturate-150 backdrop-blur-[1px]">
            <Link href='/' className='navbar-logo'>
                <Image src='/assets/icons/logo.png' alt='logo' width={75} height={75} />
                <p className="navTitle">UC Irvine</p>
            </Link>

            <nav className="navbar-nav">
                <ul className='navbar-nav-elements'>
                    <Link href="/about" className={`navbar-nav-element group ${pathname === '/about' ? 'navLink-bold' : 'navLink'}`}>
                        About
                    </Link>

                    {/* Team Dropdown */}
                    <div className="relative group">
                        <Link href="/team" className={`navbar-nav-element group ${pathname === '/team' ? 'navLink-bold' : 'navLink'}`}>
                            Team
                        </Link>
                        {renderDropdownLinks(teamLinks)}
                    </div>

                    {/* Projects Dropdown */}
                    <div className="relative group">
                        <Link href="/projects" className={`navbar-nav-element group ${pathname === '/projects' ? 'navLink-bold' : 'navLink'}`}>
                            Projects
                        </Link>
                        {renderDropdownLinks(projectsLinks)}
                    </div>

                    <Link href="/sponsors" className={`navbar-nav-element group ${pathname === '/sponsors' ? 'navLink-bold' : 'navLink'}`}>
                        Sponsors
                    </Link>
                    <Link href="/updates" className={`navbar-nav-element group ${pathname === '/updates' ? 'navLink-bold' : 'navLink'}`}>
                        Updates
                    </Link>
                    <Link href="/contact" className={`navbar-nav-element group ${pathname === '/contact' ? 'navLink-bold' : 'navLink'}`}>
                        Contact
                    </Link>
                </ul>
            </nav>
            {/* <NavbarDropdown /> */}

            <Button asChild variant="outline" className='navbar-join-button hover:navbar-join-hover'>
                <Link href="/join">Join Now</Link>
            </Button>
        </div>
    )
}

export default Navbar