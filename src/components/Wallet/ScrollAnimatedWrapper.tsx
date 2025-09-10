import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Define the props for the ScrollAnimatedWrapper component
interface ScrollAnimatedWrapperProps {
  children: React.ReactNode; // The content to be wrapped and animated
  duration?: number; // Optional: Duration of the animation in seconds (default: 0.8)
  delay?: number; // Optional: Delay before the animation starts in seconds (default: 0.2)
  amount?: number | 'some' | 'all'; // Optional: How much of the target element is visible (default: 0.5)
}

/**
 * A wrappable React component that animates its children by moving them up
 * by 50 pixels when the component scrolls into view. It uses Framer Motion
 * for smooth animations.
 *
 * @param {React.ReactNode} children - The content to be animated.
 * @param {number} [duration=0.8] - The duration of the animation in seconds.
 * @param {number} [delay=0.2] - The delay before the animation starts in seconds.
 * @param {number | 'some' | 'all'} [amount=0.5] - How much of the target element is visible
 * before the animation triggers.
 */
const ScrollAnimatedWrapper: React.FC<ScrollAnimatedWrapperProps> = ({
  children,
  duration = 0.8,
  delay = 0.2,
  amount = 0.1, // Default to 50% of the component visible
}) => {
  // Create a ref to attach to the motion component to observe its visibility
  const ref = useRef(null);

  // useInView hook from Framer Motion to detect when the element is in the viewport
  // 'once: true' ensures the animation only plays once when it enters the view
  const isInView = useInView(ref, { once: true, amount: amount });

  // Define the animation variants for Framer Motion
  const variants = {
    hidden: { opacity: 1, y: 72 }, // Initial state: invisible and 50px down
    visible: { opacity: 1, y: 0 },  // Animated state: fully visible and at original position
  };

  // --- FIX APPLIED HERE ---
  // Safely get the name of the child component for logging
  // const childName =
  //   React.isValidElement(children) && typeof children.type === 'function' && children.type.name
  //     ? children.type.name
  //     : 'React Component';

  // You can now use childName in your console.log if you add one.
  // For example:
  // console.log(`ScrollAnimatedWrapper wrapping ${childName}: isInView = ${isInView}`);


  return (
    <motion.div
      ref={ref} // Attach the ref to the motion div
      variants={variants} // Apply the defined animation variants
      initial="hidden" // Start with the 'hidden' state
      animate={isInView ? "visible" : "hidden"} // Animate to 'visible' when in view, otherwise stay 'hidden'
      transition={{
        duration: duration, // Set the animation duration
        delay: delay,       // Set the animation delay
        ease: "easeOut",    // Use an ease-out timing function for a smoother finish
      }}
      // Optional: Add some basic Tailwind CSS classes for better visual demonstration
      className=""
    >
      {children} {/* Render the wrapped children */}
    </motion.div>
  );
};

export default ScrollAnimatedWrapper;