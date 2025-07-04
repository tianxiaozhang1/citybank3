// // components/ScrollReveal.tsx

// "use client"; // This is a client component

// import { useRef, useEffect } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';

// interface ScrollRevealProps {
//   children: React.ReactNode;
//   motherDelay?: number; // Optional delay for the mother component's animation
//   childDelay?: number; // Optional delay for the child component's animation (after mother finishes)
// }

// export const ScrollReveal = ({ children, motherDelay = 0, childDelay = 0.3 }: ScrollRevealProps) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
  
//   const motherControls = useAnimation(); // Controls for the mother component's animation
//   const childControls = useAnimation();  // Controls for the child component's animation

//   useEffect(() => {
//     if (isInView) {
//       // Start mother animation
//       motherControls.start("visible");
      
//       // After mother animation finishes, start child animation with a delay
//       const motherAnimationDuration = 0.6; // Matches the duration in the variants
//       const totalMotherDelay = motherDelay + motherAnimationDuration;

//       const timer = setTimeout(() => {
//         childControls.start("visible");
//       }, (totalMotherDelay * 1000) + (childDelay * 1000)); // Convert to milliseconds

//       return () => clearTimeout(timer);
//     }
//   }, [isInView, motherControls, childControls, motherDelay, childDelay]);

//   return (
//     <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
//       {/* Mother Component Animation */}
//       <motion.div
//         variants={{
//           hidden: { y: 100 }, // Start hidden and moved down on Y-axis
//           visible: { y: 0 },   // End at original position
//         }}
//         initial="hidden"
//         animate={motherControls}
//         transition={{ duration: 0.6, ease: "easeOut", delay: motherDelay }} // Mother animation duration
//       >
//         {/* Child Component Animation */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 52 }, // Start hidden and 52px down
//             visible: { opacity: 1, y: 0 }, // End visible and at original position
//           }}
//           initial="hidden"
//           animate={childControls}
//           transition={{ duration: 0.6, ease: "easeIn" }} // Child animation duration
//         >
//           {children}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// components/ScrollReveal.tsx

"use client"; // This is a client component

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  // You can add more props for customization if needed
}

export const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Fire the animation
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 52 }, // Start hidden and 20px down
          visible: { opacity: 1, y: 0 },   // End visible and at original position
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};