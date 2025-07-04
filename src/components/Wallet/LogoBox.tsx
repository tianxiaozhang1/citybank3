// components/LogoBox.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion, type Easing } from 'framer-motion'; // Import motion and Easing

interface LogoBoxProps {
  src: StaticImageData;
  bgColor: string; // Tailwind class like 'bg-white' or custom hex like 'bg-[#2756a1]'
  imageWidthClass: string; // Tailwind class like 'w-4/5'
  alt?: string; // Optional alt text for accessibility
  // Props for animation variants and transition
  variants: {
    hidden: { y: number; opacity: number };
    visible: { y: number; opacity: number };
  };
  initial: string;
  animate: string;
  transition: {
    duration: number;
    delay: number;
    ease: Easing | Easing[]; // Corrected type to Easing or Easing[]
  };
}

const LogoBox: React.FC<LogoBoxProps> = ({
  src,
  bgColor,
  imageWidthClass,
  alt = '',
  variants,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.div
      className={`w-36 h-36 ${bgColor} rounded-4xl flex justify-center items-center`}
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <Image
        src={src}
        alt={alt}
        className={imageWidthClass}
      />
    </motion.div>
  );
};

export default LogoBox;