import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react" // Import useRef and useEffect

export function CheckmarkDrawingAnimationOnScroll() {
  const pathLength = 100; // Adjust this based on your actual SVG path length

  const ref = useRef(null); // Create a ref for the SVG container
  const isInView = useInView(ref, { once: true, amount: 1 }); // Detect when 50% of the element is in view, and only once

  // Define animation variants
  const draw = {
        hidden: { pathLength: 0, opacity: 0, strokeDashoffset: pathLength, strokeDasharray: pathLength },
        visible: {
          pathLength: 1,
          opacity: 1,
          strokeDashoffset: 0,
          strokeDasharray: pathLength,
          transition: {
            pathLength: { delay: 0.2, duration: 0.5, bounce: 0 }, // Removed 'type: "spring"'
            opacity: { delay: 0.2, duration: 0.01 }
          }
        }
      };

  return (
        <div >
            <motion.svg
                ref={ref} // Attach the ref to the SVG element
                viewBox="0 0 24 24" // Adjust viewBox to your SVG's dimensions
                fill="none"
                stroke="#4994C4" // Green color
                strokeWidth="2" // Thicker stroke
                strokeLinecap="round"
                strokeLinejoin="round"
                initial="hidden"
                // Animate to "visible" only if isInView is true
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.path
                    d="M5 13l4 4L19 7"
                    variants={draw}
                />
            </motion.svg>
        </div>
  );
}