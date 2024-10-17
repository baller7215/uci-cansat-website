"use client"; // This marks the component as a client component

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Navbar from './Navbar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import MobileNav from './MobileNav';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Staggering the children animations by 0.3 seconds
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const CoverPage = ({ page, title, subtitle, background }: CoverPageProps) => {
  return (
    <>
      {/* background image */}
      <div className="w-full flex coverPage" style={{ backgroundImage: `url(${background})` }}></div>

      {/* gradient */}
      <div className="gradient">
        <Navbar />
        <MobileNav />
        <motion.div
            className="cover-textContainer"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="my-auto" variants={fadeInUp}>
                <h3 className="cover-branding">UCI CANSAT</h3>
            </motion.div>

            <motion.div variants={fadeInUp}>
                <h1 className="cover-title">{title}</h1>
            </motion.div>

            {subtitle && (
                <motion.div variants={fadeInUp}>
                <p className="cover-subtitle">{subtitle}</p>
                </motion.div>
            )}

            {page === 'home' && (
                <motion.div variants={fadeInUp}>
                <Button asChild className="cover-joinButton">
                    <Link href="/join">Join Now</Link>
                </Button>
                </motion.div>
            )}

            <Button variant="ghost" className="mt-12 self-center" size="icon">
                <motion.a
                    href="#overview"
                    className="scroll-smooth"
                    variants={fadeInUp}
                    transition={{ delay: 0.7 }}
                >
                    <ChevronDown className="h-7 w-7" />
                </motion.a>
            </Button>
        </motion.div>

        {/* <Button variant="ghost" className="self-center" size="icon">
            <motion.a
                href="#overview"
                className="scroll-smooth"
                variants={fadeInUp}
                transition={{ delay: 0.7 }}
            >
                <ChevronDown className="h-7 w-7" />
            </motion.a>
        </Button> */}
      </div>
    </>
  );
};

export default CoverPage;
