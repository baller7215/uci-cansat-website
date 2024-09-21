import React from 'react';
import Image from 'next/image';
import { socials, aboutLinks, projectsLinks, sponsorsLinks, updateLinks, contactLinks, teamLinks } from '@/constants'; 
import Link from 'next/link';

const MobileFooter = () => {
  return (
    <footer className="mobile-footer bg-[var(--color-black)] text-white">
      {/* Footer Links */}
      <div className="mobile-footer-nav-container space-y-6">
        {/* About Section */}
        <div className="mobile-footer-pageContainer">
          <h4 className="mobile-footer-mainPages">About</h4>
          <ul className="space-y-2">
            {aboutLinks.map((link) => (
              <li key={link.route} className="mobile-footer-subPages">
                <Link href={link.route} className="hover:text-[var(--color-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Team Section */}
        <div className="mobile-footer-pageContainer">
          <h4 className="mobile-footer-mainPages text-lg font-bold">Team</h4>
          <ul className="space-y-2">
            {teamLinks.map((link) => (
              <li key={link.route} className="mobile-footer-subPages">
                <Link href={link.route} className="hover:text-[var(--color-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mobile-footer-pageContainer">
          <h4 className="mobile-footer-mainPages text-lg font-bold">Projects</h4>
          <ul className="space-y-2">
            {projectsLinks.map((link) => (
              <li key={link.route} className="mobile-footer-subPages">
                <Link href={link.route} className="hover:text-[var(--color-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sponsors Section */}
        <div className="mobile-footer-pageContainer">
          <h4 className="mobile-footer-mainPages text-lg font-bold">Sponsors</h4>
          <ul className="space-y-2">
            {sponsorsLinks.map((link) => (
              <li key={link.route} className="mobile-footer-subPages">
                <Link href={link.route} className="hover:text-[var(--color-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Updates Section */}
        <div className="mobile-footer-pageContainer">
          <h4 className="mobile-footer-mainPages text-lg font-bold">Updates</h4>
          <ul className="space-y-2">
            {updateLinks.map((link) => (
              <li key={link.route} className="mobile-footer-subPages">
                <Link href={link.route} className="hover:text-[var(--color-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mobile-footer-pageContainer">
          <h4 className="mobile-footer-mainPages text-lg font-bold">Contact</h4>
          <ul className="space-y-2">
            {contactLinks.map((link) => (
              <li key={link.route} className="mobile-footer-subPages">
                <Link href={link.route} className="hover:text-[var(--color-orange)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Branding & Social Media */}
      <div className="footer-branding w-full text-center mt-8 pt-8 border-t border-gray-700">
        <Link href='/'>
          <Image src='/assets/icons/footer-logo.png' alt="CanSat footer logo" width={300} height={100} className="mx-auto" />
        </Link>
        <p className="footer-branding-text mt-4">Irvine, CA</p>
        <p className="footer-branding-text mb-4">Est. 2017</p>

        {/* Social Media Links */}
        <div className="footer-socials-container flex justify-center gap-4 mt-4">
          {socials.map((social) => (
            <Link href={social.link} key={social.link} className="hover:text-[var(--color-orange)]">
              <Image src={social.icon} alt={`${social.label} logo`} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
