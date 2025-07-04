// components/FlightAnimation.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react'; // Import useState
import Image from 'next/image';
import { motion } from 'framer-motion';
// , useAnimation
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// Import your custom components and assets
import CurvedDottedLine from './CurvedDottedLine'

import PlaneIcon from './PlaneIcon'; // Your plane SVG component
import AirCanadaLogo from '../../../public/png/aircanada.png'; // Adjust path
import AirCanadaPlane from '../../../public/png/plane.svg'; // Adjust path
import AirCanadaQRCode from '../../../public/png/qrcode.png'; // Adjust path

import { ScrollReveal } from './ScrollReveal'

// Assume these are globally defined or passed as props
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })

const FlightAnimation = () => {
  // const controls = useAnimation();

  // >>>>>> REFS FOR ELEMENTS <<<<<<
  const planeRef = useRef<HTMLDivElement>(null);
  const rightCurveSvgRef = useRef<SVGSVGElement>(null);
  const leftCurveSvgRef = useRef<SVGSVGElement>(null);
  // Ref for the main container to observe its intersection
  const animationContainerRef = useRef<HTMLDivElement>(null);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // State to track if the animation should start
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const trajectoryPoints = {
    // Phase 1 (Right Curve - still using motionPath)
    // No specific absolute points needed here as it follows the SVG path

    // Phase 3 (Left Side - now using absolute points)
    leftStart: { x: -30, y: 332, rotate: -40 },  // Start: Where the green dot is on the left
    leftMid:   { x: 180, y: 166, rotate: 0 },    // Mid-point: The "corner" or bend in your two linear segments
    leftEnd:   { x: 256, y: 166, rotate: 0 },    // End: Where the orange arrow points

    // The initial position before any animation (can be outside frame)
    initialOffscreen: { x: -1100, y: -1100 } // Or wherever plane should start initially if not on a curve
  };

  const startAnimation = async () => {
    // Check if all necessary DOM elements (and their paths) are available
    if (!planeRef.current || !rightCurveSvgRef.current || !leftCurveSvgRef.current) {
      console.warn("Animation elements not ready yet. Retrying...");
      return;
    }

    const rightPath = rightCurveSvgRef.current.querySelector('path');
    // const leftPath = leftCurveSvgRef.current.querySelector('path');

    if (!rightPath) {
      console.warn("Right SVG path not found within the SVG ref. Animation might not start correctly.");
      return;
    }

    // --- CRITICAL CHANGE FOR FLASHING ---

    // 1. Immediately position the plane at the start of its *first* animation path
    // and ensure its opacity is 0. This happens instantly via GSAP.set().
    await new Promise(resolve => {
        gsap.set(planeRef.current, {
            motionPath: {
                path: rightPath,
                align: rightPath,
                autoRotate: true,
                start: 0,
                end: 0, // Position at the very beginning of the path
                alignOrigin: [0.5, 0.5],
                offsetY: -15
            },
            opacity: 0, // Keep it hidden until we explicitly want it to appear
            onComplete: resolve
        });
    });

    // 2. Now that it's correctly positioned, make it visible.
    await new Promise(resolve => {
        gsap.to(planeRef.current, { opacity: 1, duration: 0.2, onComplete: resolve });
    });


    // Phase 1: Animate along the right path (WITH offsetY)
    await new Promise(resolve => {
      gsap.to(planeRef.current, {
        motionPath: {
          path: rightPath,
          align: rightPath,
          autoRotate: true,
          start: 0,
          end: 1,
          alignOrigin: [0.5, 0.5],
          offsetY: -15 // Your perfect offset
        },
        duration: 1.5,
        ease: "power1.inOut",
        onComplete: resolve
      });
    });

    // Phase 2: Disappear and Reappear on left
    await new Promise(resolve => {
        gsap.to(planeRef.current, { opacity: 0, duration: 0.2, onComplete: resolve });
    });

    // 1. Set plane to the start of the first linear segment (leftStart), still invisible
    // This ensures it repositions instantly to the correct starting point before it reappears and flies
    await new Promise(resolve => {
        gsap.set(planeRef.current, {
            x: trajectoryPoints.leftStart.x,
            y: trajectoryPoints.leftStart.y,
            rotation: trajectoryPoints.leftStart.rotate,
            opacity: 0, // Keep invisible
            onComplete: resolve
        });
    });

    // Make it visible (reappear)
    await new Promise(resolve => {
        gsap.to(planeRef.current, { opacity: 1, duration: 0.1, delay: 0.1, onComplete: resolve });
    });

    // 2. First linear segment: from leftStart to leftMid
    await new Promise(resolve => {
      gsap.to(planeRef.current, {
        x: trajectoryPoints.leftMid.x,
        y: trajectoryPoints.leftMid.y,
        rotation: trajectoryPoints.leftMid.rotate, // Plane rotates as it moves to mid-point
        duration: 0.8, // <--- DURATION FOR THE FIRST PART (e.g., 0.8 seconds)
        ease: "linear", // Using linear ease for a straight line feel
        onComplete: resolve
      });
    });

    // 3. Second linear segment: from leftMid to leftEnd
    // GSAP automatically knows to start this tween from the current position of the plane (which is leftMid)
    await new Promise(resolve => {
      gsap.to(planeRef.current, {
        x: trajectoryPoints.leftEnd.x,
        y: trajectoryPoints.leftEnd.y,
        rotation: trajectoryPoints.leftEnd.rotate, // Plane rotates as it moves to end-point
        duration: 0.9, // <--- DURATION FOR THE SECOND PART (e.g., 0.7 seconds)
        ease: "power1.out", // Adjust ease for the second segment
        onComplete: resolve
      });
    });

    // Optionally loop the animation
    // setTimeout(startAnimation, 2000); // Wait 2 seconds then restart
  };

  // --- NEW useEffect for Intersection Observer ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the target element is intersecting (i.e., in view)
        if (entries[0].isIntersecting) {
          setAnimationTriggered(true); // Set state to true when in view
          observer.disconnect(); // Stop observing once triggered
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No extra margin
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (animationContainerRef.current) {
      observer.observe(animationContainerRef.current);
    }

    // Cleanup function: disconnect observer when component unmounts
    return () => {
      if (animationContainerRef.current) {
        observer.unobserve(animationContainerRef.current);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array means this runs once on mount


  // --- MODIFIED useEffect to call startAnimation ---
  useEffect(() => {
    // Only start animation if it has been triggered by scroll AND refs are ready
    if (animationTriggered && planeRef.current && rightCurveSvgRef.current && leftCurveSvgRef.current) {
      // Add a 0.5-second delay before starting the animation
      const delayTimeout = setTimeout(() => {
        startAnimation();
      }, 300); // 500ms delay

      return () => clearTimeout(delayTimeout); // Clear timeout if component unmounts
    }
  }, [animationTriggered, planeRef, rightCurveSvgRef, leftCurveSvgRef]); // Rerun when animationTriggered changes or refs are set

  const rightCurvePathData = "M 0 45 Q 50 10 100 50"; // Adjust if needed
  const leftCurvePathData = "M 0 48 L 100 38";

  return (
    <div
      ref={animationContainerRef} // Assign the new ref here
      className={`lg:w-2/3 mx-auto font-semibold flex ${futura.className} lg:py-22 rounded-4xl lg:rounded-[62px] bg-gray-100 relative overflow-hidden`}
      style={{ minHeight: '600px' }}
    >
      {/* Plane Icon (absolutely positioned) */}
      <motion.div
          ref={planeRef}
          className="absolute z-20"
          // Ensure it's hidden from the very first render!
          initial={{ opacity: 0 }}
          style={{ width: '40px', height: '40px', top: 0, left: 0 }}
      >
          <PlaneIcon />
      </motion.div>

      {/* --- Existing Layout --- */}
      <div className='w-1/2 p-0 flex'>
        <div className='w-16 lg:w-40 h-full relative overflow-hidden'>
          {/* Left Curve */}
          <CurvedDottedLine pathData={leftCurvePathData} strokeColor="#6d8c3f" strokeWidth={0.75} dashArray="22 6" svgRef={leftCurveSvgRef} />
        </div>
        <div className='shadow-lg rounded-xl border-2 border-gray-300 p-6 flex-grow'>
            <div className='flex items-center'>
                <div className='w-1/2'>
                    <Image src={AirCanadaLogo} className='w-full' alt="" />
                </div>
                <div className='w-1/2 flex justify-end space-x-3 pt-0.5'>
                    <div className='flex justify-end'>
                        <div>
                            <div className='text-gray-400 text-sm flex justify-end -mb-2'>GATE</div>
                            <div className={`text-2xl text-gray-600 ${futuraLight.className}`}>G62</div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div>
                            <div className='text-gray-400 text-sm flex justify-end -mb-2'>SEAT</div>
                            <div className={`text-2xl text-gray-600 ${futuraLight.className}`}>1D</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-end justify-between mt-2'>
                <div className='w-1/3'>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Toronto</div>
                    <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YYZ</div>
                </div>
                <div className='flex justify-center items-end -mb-1'>
                    <Image src={AirCanadaPlane} className='w-1/3 hidden ' alt="" />
                </div>
                <div className='w-1/3 text-end'>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Montreal</div>
                    <div className={`text-4xl text-gray-600 ${futuraLight.className}`}>YUL</div>
                </div>
            </div>
            <div className='flex items-end justify-between mt-2'>
                <div className='w-1/4'>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Flight</div>
                    <div className={`text-xl text-gray-600 ${futuraLight.className}`}>AC 420</div>
                </div>
                <div className='w-1/4 '>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Date</div>
                    <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Aug 12</div>
                </div>
                <div className='w-1/4 '>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Boarding</div>
                    <div className={`text-xl text-gray-600 ${futuraLight.className}`}>11:32</div>
                </div>
                <div className='w-1/4 text-end'>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Zone</div>
                    <div className={`text-xl text-gray-600 ${futuraLight.className}`}>1</div>
                </div>
            </div>
            <div className='flex items-end justify-between mt-2'>
                <div className='w-1/2'>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Passenger</div>
                    <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Tianxiao Zhang</div>
                </div>
                <div className='w-1/2 text-end'>
                    <div className='text-gray-400 text-base -mb-2 uppercase'>Class</div>
                    <div className={`text-xl text-gray-600 ${futuraLight.className}`}>Priority</div>
                </div>
            </div>
            <div className='w-full pt-16 pb-12 flex justify-center opacity-75'>
                <Image src={AirCanadaQRCode} className='w-1/2' alt="" />
            </div>
        </div>
      </div>
      <div className={`w-1/2 text-3xl lg:text-7xl flex items-center justify-center text-gray-800`}>
        <div className='w-full'>
          <div className='w-full h-24 lg:h-42 relative overflow-hidden'>
            <CurvedDottedLine pathData={rightCurvePathData} strokeColor="#6d8c3f" strokeWidth={2} dashArray="4 4" svgRef={rightCurveSvgRef} />
          </div>
          <div className='pl-12 lg:pl-22 pr-12 lg:pr-18'>
            <ScrollReveal>
                <div className='text-[#6d8c3f] lg:mb-6'>
                  Boarding passes.
                </div>
                <div>
                  Easier on the fly.
                </div>
            </ScrollReveal>
          </div>
          <div className='w-full h-12 lg:h-22'></div>
        </div>
      </div>
    </div>
  );
};

export default FlightAnimation;