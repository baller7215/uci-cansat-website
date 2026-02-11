"use client";

import React, { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15, ease: [0.4, 0, 1, 1] }
    },
  };

  const subMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.18,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const subMenuItemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: 0,
      transition: { duration: 0.16, ease: [0.4, 0, 1, 1] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.12, ease: [0.4, 0, 1, 1] }
    },
  };

  return (
    <div className="mobileNav">
      <div className="w-full flex justify-between">
        <Link href="/">
          <motion.p
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="mobile-navTitle"
          >
            UCI CanSat
          </motion.p>
        </Link>

        <button onClick={toggleMenu} className="mobile-icon hoverTransition">
          {menuOpen ? (
            <FaXmark className="h-8 w-8" />
          ) : (
            <LuMenu className="h-8 w-8" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-[var(--color-black)] text-custom-white flex flex-col items-center justify-center z-50 pb-5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
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

          <motion.nav
            className="navbar-nav"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul
              className="flex flex-col items-center gap-4 text-2xl"
              variants={containerVariants}
            >
              {navLinks.map((link) => {
                const isActive = link.route === pathname;

                return (
                  <React.Fragment key={link.route}>
                    {link.children.length > 0 ? (
                      <motion.li
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
                        <AnimatePresence>
                          {expandedSection === "team" &&
                            expandedSection === link.label.toLowerCase() && (
                              <motion.ul
                                className="mt-2 flex flex-col items-center gap-2 mb-1 text-base text-custom-gray"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={subMenuVariants}
                              >
                                {link.children.map((child) => (
                                  <motion.li
                                    key={child.route}
                                    variants={subMenuItemVariants}
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
                            expandedSection === link.label.toLowerCase() && (
                              <motion.ul
                                className="mt-2 flex flex-col items-center gap-2 mb-1 text-base text-custom-gray"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={subMenuVariants}
                              >
                                {link.children.map((child) => (
                                  <motion.li
                                    key={child.route}
                                    variants={subMenuItemVariants}
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
                        </AnimatePresence>
                      </motion.li>
                    ) : (
                      <motion.li
                        className={`navbar-nav-element !text-custom-white group ${
                          isActive ? "navLink-bold" : "navLink"
                        }`}
                        variants={itemVariants}
                      >
                        <Link href={link.route}>{link.label}</Link>
                      </motion.li>
                    )}
                  </React.Fragment>
                );
              })}
            </motion.ul>
          </motion.nav>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link href="/Learn More" onClick={toggleMenu} className="mt-10">
              {/** @todo rename join us to something like "learn more" or "application" (brainstorm stuff) */}
              <button className="rounded-full bg-[var(--color-orange)] px-10 py-3 text-[var(--color-whiteIce)] text-xl">
                About Us
              </button>
            </Link>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
