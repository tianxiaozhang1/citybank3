// components/LoyaltyRewards.tsx
import React, { useRef } from 'react';
import { useInView, motion, Easing } from 'framer-motion';

import LogoBox from './LogoBox'; 
import { logoData } from '../../data/logos';

function LoyaltyRewards() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.6 });

    // Define animation variants for the entire row
    const rowAnimationVariants = {
        hidden: { y: -1000, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut' as Easing, // Corrected: Easing type is now correctly assigned
                staggerChildren: 0.05
            }
        },
    };

    const totalRows = logoData.length;
    const rowDelayIncrement = 0.15;

    return (
        <div ref={containerRef} className='lg:space-y-2'>
            {logoData.map((row, rowIndex) => {
                const reversedRowIndex = totalRows - 1 - rowIndex;

                return (
                    <motion.div
                        key={rowIndex}
                        className={`flex ${rowIndex === 0 || rowIndex === 1 ? 'justify-end' : ''} lg:space-x-2`}
                        variants={rowAnimationVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{
                            delay: reversedRowIndex * rowDelayIncrement,
                        }}
                    >
                        {row.map((logo, logoIndex) => (
                            <LogoBox
                                key={logoIndex}
                                src={logo.src}
                                bgColor={logo.bgColor}
                                imageWidthClass={logo.imageWidthClass}
                                alt={logo.alt}
                            />
                        ))}
                    </motion.div>
                );
            })}
        </div>
    );
}

export default LoyaltyRewards;