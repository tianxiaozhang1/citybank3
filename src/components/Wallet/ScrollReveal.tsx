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
          hidden: { opacity: 0, y: 20 }, // Start hidden and 20px down
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