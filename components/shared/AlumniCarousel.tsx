"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const AlumniCarousel = ({ alumni }: AlumniCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alumni.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + alumni.length) % alumni.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentAlumni = alumni[currentIndex];

  return (
    <div className="relative w-full min-h-[900px] bg-custom-black overflow-hidden">
      {/* starry background effect */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('/assets/images/starfield.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* additional sparkle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-custom-black/50" />

      {/* content */}
      <div className="relative z-10 w-full h-full p-8 md:p-12 lg:p-20 py-16 md:py-20">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-custom-white/30 flex-1 max-w-32" />
            <h2 className="header text-custom-white !text-4xl md:!text-5xl lg:!text-6xl">
              MEET THE CANSAT ALUMNI
            </h2>
            <div className="h-px bg-custom-white/30 flex-1 max-w-32" />
          </div>
          <p className="description text-custom-white/80 text-base md:text-lg lg:text-xl">
            FROM LOCKHEED MARTIN, GOOGLE, DISNEY, TESLA, ETC.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-custom-black/95 rounded-2xl p-8 md:p-12 lg:p-16 border border-custom-white/20 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* left column - text content */}
                <div className="flex flex-col gap-6 md:gap-8 text-custom-white">
                  {/* name and linkedin */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 underline decoration-custom-orange">
                      {currentAlumni.name.toUpperCase()}
                    </h3>
                    <Link
                      href={currentAlumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-white/70 hover:text-custom-orange transition-colors text-sm md:text-base"
                    >
                      {currentAlumni.linkedin.replace("https://www.", "")}
                    </Link>
                  </div>

                  {/* past positions */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2 underline">
                      PAST POSITIONS:
                    </h4>
                    <ul className="space-y-1">
                      {currentAlumni.pastPositions.map((position, idx) => (
                        <li key={idx} className="text-base md:text-lg">
                          {position}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* experiences */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2 underline">
                      EXPERIENCES:
                    </h4>
                    <ul className="space-y-2">
                      {currentAlumni.experiences.map((exp, idx) => (
                        <li key={idx} className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-custom-orange">+</span>
                            <span className="text-base md:text-lg font-semibold">
                              {exp.company}
                            </span>
                          </div>
                          <p className="text-base md:text-lg ml-6">
                            {exp.role}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* testimonial */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-2 underline">
                      HOW HAS CANSAT AFFECTED YOU:
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed">
                      {currentAlumni.testimonial}
                    </p>
                  </div>
                </div>

                {/* right column - image and field */}
                <div className="flex flex-col items-center lg:items-end gap-8">
                  {/* profile image */}
                  <div className="relative flex flex-col items-center">
                    {/* glow effect */}
                    <div className="absolute inset-0 bg-custom-orange rounded-full blur-3xl opacity-20 animate-pulse" />
                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-custom-white shadow-2xl">
                      {currentAlumni.profileImage ? (
                        <Image
                          src={currentAlumni.profileImage}
                          alt={currentAlumni.name}
                          width={288}
                          height={288}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-custom-gray flex items-center justify-center">
                          <span className="text-5xl font-bold text-custom-rhino">
                            {currentAlumni.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    {/* field of study - curved text */}
                    <div className="mt-6 text-center">
                      <p className="text-custom-white text-base md:text-lg font-semibold tracking-wider">
                        {currentAlumni.field.toUpperCase()}
                      </p>
                    </div>
                    {/* company names */}
                    <div className="mt-4 flex flex-wrap justify-center gap-3 max-w-xs">
                      {currentAlumni.experiences.map((exp, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 bg-custom-white/10 rounded-full border border-custom-white/20"
                        >
                          <p className="text-custom-white text-xs md:text-sm font-medium">
                            {exp.company.toUpperCase()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-8 bg-custom-white/10 hover:bg-custom-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all z-20 border border-custom-white/20"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-custom-white text-lg md:text-xl lg:text-2xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-8 bg-custom-white/10 hover:bg-custom-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all z-20 border border-custom-white/20"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-custom-white text-lg md:text-xl lg:text-2xl" />
          </button>

          {/* pagination dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-10 md:mt-12">
            {alumni.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-custom-orange w-8 md:w-12 shadow-lg shadow-custom-orange/50"
                    : "bg-custom-white/30 hover:bg-custom-white/50 w-2 md:w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* bottom text */}
          <div className="text-center mt-8">
            <p className="text-custom-white/60 text-sm md:text-base">
              Learn about the members who have led us to victory in the past!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCarousel;

