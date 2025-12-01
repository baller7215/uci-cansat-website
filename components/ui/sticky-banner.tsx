"use client";
import React, { SVGProps, useState, useRef, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const [height, setHeight] = useState<number | "auto">("auto");
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 flex w-full items-center justify-center bg-transparent px-4 py-1 overflow-hidden",
        className,
      )}
      initial={{
        y: -100,
        opacity: 0,
        height: 0,
      }}
      animate={{
        y: open ? 0 : -100,
        opacity: open ? 1 : 0,
        height: open ? height : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div ref={contentRef} className="w-full">
        {children}
      </div>

      <motion.button
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        className="absolute inset-y-0 right-2 sm:right-4 my-auto flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity duration-300"
        onClick={() => setOpen(!open)}
        aria-label="Close banner"
      >
        <CloseIcon className="h-5 w-5 text-[var(--color-whiteIce)]" />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
