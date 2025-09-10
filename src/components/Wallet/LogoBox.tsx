// components/LogoBox.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface LogoBoxProps {
  src: StaticImageData;
  bgColor: string; // Tailwind class like 'bg-white' or custom hex like 'bg-[#2756a1]'
  imageWidthClass: string; // Tailwind class like 'w-4/5'
  alt?: string; // Optional alt text for accessibility
}

const LogoBox: React.FC<LogoBoxProps> = ({
  src,
  bgColor,
  imageWidthClass,
  alt = '',
}) => {
  return (
    <div
      className={`w-36 h-36 ${bgColor} rounded-4xl flex justify-center items-center`}
    >
      <Image
        src={src}
        alt={alt}
        className={imageWidthClass}
      />
    </div>
  );
};

export default LogoBox;