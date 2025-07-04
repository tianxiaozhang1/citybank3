"use client"; // This is a client component

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface StaggeredRevealProps {
  children: React.ReactNode;
  // You can add more props for customization if needed
}

export const StaggeredReveal = ({ children }: StaggeredRevealProps) => {
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
          hidden: { opacity: 1, y: 66 }, // Start hidden and 20px down
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

// // components/StaggeredReveal.tsx

// "use client";

// import { useRef, useEffect } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';

// interface StaggeredRevealProps {
//   children: React.ReactNode;
//   delay?: number; // Optional delay between parent and child animation
// }

// // Define the animation properties in a single object for clarity
// const animation = {
//   parent: {
//     duration: 0.5,
//   },
//   child: {
//     duration: 0.6,
//     ease: "easeIn",
//   }
// };

// export const StaggeredReveal = ({ children, delay = 0 }: StaggeredRevealProps) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const mainControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       mainControls.start("visible");
//     }
//   }, [isInView, mainControls]);

//   return (
//     <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
//       <motion.div
//         // This is the PARENT (mother) animation
//         variants={{
//           hidden: { y: 40 }, // No opacity change, just moves
//           visible: { y: 0 },
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{
//           duration: animation.parent.duration,
//           // Wait for the parent animation to finish before starting the children
//           delayChildren: animation.parent.duration + delay,
//         }}
//       >
//         <motion.div
//           // This is the CHILD animation
//           variants={{
//             hidden: { opacity: 0, y: 52 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           // The child inherits 'initial' and 'animate' from the parent
//           transition={{
//             duration: animation.child.duration,
//             ease: "easeIn",
//           }}
//         >
//           {children}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };