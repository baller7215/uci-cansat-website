import React from 'react';
import Image from 'next/image';
import { socials, aboutLinks, projectsLinks, sponsorsLinks, updateLinks, contactLinks, teamLinks } from '@/constants'; 
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='p-40 py-20 bg-[var(--color-white)] w-full h-auto flex flex-row justify-between'>
        {/* logo + social media */}
        <div className="w-1/3">
            <div className="flex flex-col self-start">
                <Link href='/'>
                    <Image src='/assets/icons/footer-logo.png' alt="cansat footer logo" width={500} height={100} />
                </Link>
                
                <div className='flex-col flex font-normal text-[15px] text-[var(--color-rhino)] leading-7 m1-5'>
                    <p>Irvine, CA</p>
                    <p>Est. 2017</p>
                </div>
            </div>
            {/* social media links */}
            <div className="flex flex-row self-end mt-16">
                <ul className='socials-elements'>
                    {socials.map((social) => {
                        return (
                            <li key={social.link} className='socials-element'>
                                <Link href={social.link} className='socials-element'>
                                    <Image src={social.icon} alt={`${social.label} logo`} width={24} height={24} className='socials-element stroke-white'/>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

        {/* footer navigation */}
        <div className="w-2/3 flex flex-row justify-end gap-10">
            {/* About Section */}
            <div className='footer-pageContainer'>
                <h4 className='footer-mainPages'>About</h4>
                <ul>
                    {aboutLinks.map(link => (
                    <li key={link.route} className='footer-subPages'>
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Team Section */}
            <div className='footer-pageContainer'>
                <h4 className='footer-mainPages'>Team</h4>
                <ul>
                    {teamLinks.map(link => (
                    <li key={link.route} className='footer-subPages'>
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Projects Section */}
            <div className='footer-pageContainer'>
                <h4 className='footer-mainPages'>Projects</h4>
                <ul>
                    {projectsLinks.map(link => (
                    <li key={link.route} className='footer-subPages'>
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Sponsors Section */}
            <div className='footer-pageContainer'>
                <h4 className='footer-mainPages'>Sponsors</h4>
                <ul>
                    {sponsorsLinks.map(link => (
                    <li key={link.route} className='footer-subPages'>
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Updates Section */}
            <div className='footer-pageContainer'>
                <h4 className='footer-mainPages'>Updates</h4>
                <ul>
                    {updateLinks.map(link => (
                    <li key={link.route} className='footer-subPages'>
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>

            {/* Contact Section */}
            <div className='footer-pageContainer'>
                <h4 className='footer-mainPages'>Contact</h4>
                <ul>
                    {contactLinks.map(link => (
                    <li key={link.route} className='footer-subPages'>
                        <Link href={link.route}>
                            {link.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer