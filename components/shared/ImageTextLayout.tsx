import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ImageTextLayout = ({
  title,
  description,
  image,
  link,
}: ImageTextLayoutProps) => {
  return (
    <>
      {/* overview */}
      <motion.section
        className="section-container !h-auto !bg-custom-black"
        id="overview"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn} className="imageLayout-text-container">
          {/* left */}
          <motion.div
            variants={fadeIn}
            className="w-full lg:w-2/5 xl:w-2/5 h-full flex my-auto justify-center"
          >
            {image ? (
              <Image
                src={image}
                alt="2024 2025 UCI Cansat Team"
                width={1000}
                height={800}
                className="rounded-2xl my-auto"
              />
            ) : (
              <div className="card-placeholder !w-full !h-full !rounded-2xl"></div>
            )}
          </motion.div>
          {/* right */}
          <motion.div variants={fadeIn} className="leftText w-full lg:w-3/5">
            <h2 className="header leading-[60px]">{title}</h2>
            <p className="description text-custom-white whitespace-pre-wrap">
              {description.split("\n").map((text, index) => {
                const isLast = index === description.split("\n").length - 1;
                const hasLink = !!link && isLast;
                return (
                  <span key={index} className="block my-5">
                    {text}
                    {hasLink && (
                      <>
                        {" "}
                        <Link
                          href={link}
                          target="_blank"
                          className="text-custom-white underline underline-offset-2 decoration-custom-white/60 hover:text-custom-orange hover:decoration-custom-orange transition-colors"
                        >
                          here
                        </Link>
                      </>
                    )}
                  </span>
                );
              })}
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ImageTextLayout;
