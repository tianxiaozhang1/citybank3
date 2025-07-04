import React, { useRef } from 'react'; //, useState, useEffect 
import { useInView } from 'framer-motion'; // Import motion and useInView motion, 

import LogoBox from './LogoBox'; 
import { logoData } from '../../data/logos';

function LoyaltyRewards() {

    const containerRef = useRef(null);
    // Trigger animation when 60% of the container is in view, only once
    const isInView = useInView(containerRef, { once: true, amount: 0.6 });

    // Define animation variants for each LogoBox
    const fallAnimationVariants = {
        hidden: { y: -1000, opacity: 1 }, // Starts 50px above and invisible
        visible: { y: 0, opacity: 1 },  // Ends at its natural position, fully visible
    };

    // Calculate total number of rows
    const totalRows = logoData.length;
    // Base delay for each LogoBox
    const baseDelay = 0.04; // Adjust for faster/slower individual fall
    // Delay increment for each row
    const rowDelayIncrement = 0.15; // Adjust for more/less staggering between rows

    return (
        <div ref={containerRef} className='lg:space-y-2'>
            {logoData.map((row, rowIndex) => {
                // Calculate the effective row index for reverse animation (bottom row first)
                const reversedRowIndex = totalRows - 1 - rowIndex;

                return (
                <div key={rowIndex} className={`flex ${rowIndex === 0 || rowIndex === 1 ? 'justify-end' : ''} lg:space-x-2`}>
                    {row.map((logo, logoIndex) => {
                    // Calculate delay for each individual logo
                    // (reversedRowIndex * rowDelayIncrement) gives delay for the row
                    // + (logoIndex * baseDelay) gives additional delay for logo within the row
                    const delay = (reversedRowIndex * rowDelayIncrement) + (logoIndex * baseDelay);

                    return (
                        <LogoBox
                            key={logoIndex}
                            src={logo.src}
                            bgColor={logo.bgColor}
                            imageWidthClass={logo.imageWidthClass}
                            alt={logo.alt}
                            variants={fallAnimationVariants}
                            initial="hidden"
                            // Animate to "visible" only if the container is in view
                            animate={isInView ? "visible" : "hidden"}
                            transition={{
                                duration: 0.5, // How fast each logo falls
                                delay: delay, // Staggered delay based on position
                                ease: "easeOut", // Make it feel like falling
                        }}
                        />
                    );
                    })}
                </div>
                );
            })}
        </div>
    )
}

export default LoyaltyRewards
