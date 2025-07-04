import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import motion and useInView

// Define the props for the SpotlightStage component
interface SpotlightStageProps {
  children: React.ReactNode; // The content to be placed "center stage"
}

/**
 * A React component that creates an abstract "spotlight stage" effect
 * using Tailwind CSS. It features a single tall triangular light source
 * from the top and a subtle illuminated stage area at the bottom, with a central
 * area for content.
 *
 * @param {React.ReactNode} children - The content (e.g., text) to be displayed
 * in the center of the stage.
 */
const SpotlightStage: React.FC<SpotlightStageProps> = ({ children }) => {

    // Create a ref to attach to the main container to observe its visibility
  const ref = useRef(null);
  // useInView hook to detect when the element is in the viewport
  // 'once: true' ensures the animation only plays once when it enters the view
  const isInView = useInView(ref, { once: true, amount: 0.7 }); // Trigger when 50% of the component is visible

  // Define animation variants for the triangles
  const triangleVariants = {
    hidden: { opacity: 0 }, // Initial state: completely transparent
    visible: { opacity: 0.6 }, // Visible state: 20% opacity (matching blur-lg effect)
  };

  return (
    
    <div
        ref={ref} // Attach the ref to the main container
      className="relative w-full min-h-screen bg-gray-950
                 flex flex-col items-center justify-center overflow-hidden p-4"
      style={{ minHeight: '10vh' }} // Ensure it takes full viewport height
    >
      {/* Abstract Spotlight - Tall Triangular Light */}
      {/* <div
        className="absolute top-0 opacity-30 blur-xl -ml-52"
        style={{
            borderLeft: '0px solid transparent', // Left side is vertical (right angle)
            borderRight: '100px solid transparent', // Controls the slope of the hypotenuse
            borderBottom: `620px solid white`, // The visible height of the light beam
          }}
      ></div> */}

        <motion.div // Use motion.div for animation
          className="absolute top-0 opacity-40 blur-xl -ml-52"
          style={{
              borderLeft: '0px solid transparent', // Left side is vertical (right angle)
              borderRight: '100px solid transparent', // Controls the slope of the hypotenuse
              borderBottom: `718px solid white`, // The visible height of the light beam
            }}
          variants={triangleVariants} // Apply variants
          initial="hidden" // Start hidden
          animate={isInView ? "visible" : "hidden"} // Animate based on isInView
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }} // Animation timing
        ></motion.div>

        <motion.div // Use motion.div for animation
          className="absolute top-0 opacity-40 blur-xl "
          style={{
              borderLeft: '50px solid transparent', // Controls the left slope
              borderRight: '50px solid transparent',
              borderBottom: `718px solid white`, // The visible height of the light beam
          }}
            variants={triangleVariants} // Apply variants
            initial="hidden" // Start hidden
            animate={isInView ? "visible" : "hidden"} // Animate based on isInView
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }} // Staggered delay
        ></motion.div>

        <motion.div // Use motion.div for animation
          className="absolute top-0 opacity-40 blur-xl ml-52"
          style={{
              borderLeft: '100px solid transparent', // Controls the slope of the hypotenuse
              borderRight: '0px solid transparent', // Right side is vertical (right angle)
              borderBottom: `718px solid white`, // The visible height of the light beam
          }}
            variants={triangleVariants} // Apply variants
            initial="hidden" // Start hidden
            animate={isInView ? "visible" : "hidden"} // Animate based on isInView
            transition={{ duration: 0.3, delay: 0.9, ease: "easeOut" }} // Staggered delay
        ></motion.div>

      {/* <div
        className="absolute top-0 opacity-30 blur-xl "
        style={{
            borderLeft: '50px solid transparent', // Controls the left slope
            borderRight: '50px solid transparent',
            borderBottom: `620px solid white`, // The visible height of the light beam
        }}
      ></div> */}

      {/* <div
        className="absolute top-0 opacity-30 blur-xl ml-52"
        style={{
            borderLeft: '100px solid transparent', // Controls the slope of the hypotenuse
            borderRight: '0px solid transparent', // Right side is vertical (right angle)
            borderBottom: `620px solid white`, // The visible height of the light beam
        }}
      ></div> */}

      {/* Center Stage Content */}
      <div
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        {children} {/* This is where your "center stage" text will go */}
      </div>
    </div>
  );
};

export default SpotlightStage;
