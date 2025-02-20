"use client";

import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion
import { ChevronDown } from "lucide-react";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  // disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // allow scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  return (
    <div className="mobileNav">
      <div className="w-full flex justify-between">
        <Link href="/">
          <p className="mobile-navTitle hoverTransition">UC Irvine</p>
        </Link>

        <button onClick={toggleMenu} className="mobile-icon hoverTransition">
          {menuOpen ? (
            <FaXmark className="h-8 w-8" />
          ) : (
            <LuMenu className="h-8 w-8" />
          )}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-[var(--color-black)] text-custom-white flex flex-col items-center justify-center z-50 pb-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mobileNav">
            <div className="w-full flex justify-between">
              <Link href="/">
                <p className="mobile-navTitle !text-custom-white/70 hoverTransition">
                  UC Irvine
                </p>
              </Link>
              <button
                onClick={toggleMenu}
                className="mobile-icon !text-custom-white/70 hoverTransition"
              >
                <FaXmark className="h-8 w-8" />
              </button>
            </div>
          </div>

          <motion.nav className="navbar-nav" variants={containerVariants}>
            <motion.ul
              className="flex flex-col items-center gap-4 text-2xl"
              variants={containerVariants}
            >
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <>
                    {link.children.length > 0 ? (
                      <motion.li
                        key={link.route}
                        className={`navbar-nav-element !text-custom-white group ${
                          isActive ? "navLink-bold" : "navLink"
                        }`}
                        variants={itemVariants}
                      >
                        <button
                          onClick={() =>
                            toggleSection(link.label.toLowerCase())
                          }
                          className="flex gap-1"
                        >
                          {link.label}
                          <ChevronDown size={16} className="my-auto" />
                        </button>
                        {expandedSection === "team" &&
                          expandedSection == link.label.toLowerCase() && (
                            <motion.ul
                              className="mt-2 flex flex-col items-center gap-2 mb-1 text-base text-custom-gray"
                              initial="hidden"
                              animate="visible"
                              variants={containerVariants}
                            >
                              {link.children.map((child) => (
                                <motion.li
                                  key={child.route}
                                  variants={itemVariants}
                                >
                                  <Link
                                    href={child.route}
                                    className="hover:text-custom-orange"
                                  >
                                    {child.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        {expandedSection === "projects" &&
                          expandedSection == link.label.toLowerCase() && (
                            <motion.ul
                              className="mt-2 flex flex-col items-center gap-2 mb-1 text-base text-custom-gray"
                              initial="hidden"
                              animate="visible"
                              variants={containerVariants}
                            >
                              {link.children.map((child) => (
                                <motion.li
                                  key={child.route}
                                  variants={itemVariants}
                                >
                                  <Link
                                    href={child.route}
                                    className="hover:text-custom-orange"
                                  >
                                    {child.label}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                      </motion.li>
                    ) : (
                      <motion.li
                        key={link.route}
                        className={`navbar-nav-element !text-custom-white group ${
                          isActive ? "navLink-bold" : "navLink"
                        }`}
                        variants={itemVariants}
                      >
                        <Link href={link.route}>{link.label}</Link>
                      </motion.li>
                    )}

                  </>
                );
              })}
            </motion.ul>
          </motion.nav>

          <motion.div variants={itemVariants}>
            <Link href="/Learn More" onClick={toggleMenu} className="mt-10">
              {/** @todo rename join us to something like "learn more" or "application" (brainstorm stuff) */}
              <button className="rounded-full bg-[var(--color-orange)] px-10 py-3 text-[var(--color-whiteIce)] text-xl">
                About Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
