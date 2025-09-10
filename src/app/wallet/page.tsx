"use client";
import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';

// import { Clock9, CircleArrowRight } from 'lucide-react';
        //  ChevronDown, Banknote, CreditCard, DollarSign, ArrowDownCircle, ArrowUpCircle, Home, Briefcase, ShoppingBag,
        //  MoreHorizontal, Car, Send, FileText, User, Settings, LifeBuoy, ChartSpline, , Check, CircleCheck
// FilePlus, LogOut, Bell,  TrendingUp, House
// import NextLink from 'next/link'; // Renamed to avoid conflict if Link is imported from lucide or elsewhere

import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })

import Header from '../../components/Header'; 
// import Footer from '../../components/Footer'; 

import FlightAnimation from '../../components/Wallet/FlightAnimation'
import { ScrollReveal } from '../../components/Wallet/ScrollReveal'
import ScrollAnimatedWrapper from '../../components/Wallet/ScrollAnimatedWrapper'

import Splash from '../../components/Wallet/Splash'

import PaymentLeft from '../../components/Wallet/PaymentLeft'
import PaymentRight from '../../components/Wallet/PaymentRight'
import LoyaltyRewardsSection from '../../components/Wallet/LoyaltyRewardsSection'

import Section3 from '../../components/Wallet/Section3'

import PrestoComponent from '../../components/Wallet/Presto'
import DuaLipaSection from '../../components/Wallet/DuaLipa'

import Accordion from '../../components/Wallet/FAQ'

// Helper function to calculate threshold (can be kept outside component for purity)
const getThresholds = (triggerPixels: number, sectionHeight: number): number => {
    return Math.min(1, Math.max(0, triggerPixels / sectionHeight));
  };
  
  // Define a type for your section data for clarity
  interface SectionData {
    id: string;
    color: string;
    text: string;
    height: number;
    triggerPixels: number;
    order: number;
  }
  
  // Define a type for what we store in intersectingSections.current
  interface IntersectingSectionInfo {
    id: string; // Add id here
    ratio: number;
    color: string;
    order: number;
  }

function Wallet() {

    const [currentPageBackgroundColor, setCurrentPageBackgroundColor] = useState<string>('#FFFFFF');

    // Create individual refs for each section
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);
    // const section5Ref = useRef<HTMLDivElement>(null);

    // Use a ref to store the current intersection status of each section
    const intersectingSections = useRef<Record<string, IntersectingSectionInfo>>({});

    // Helper to get section data by ID (can be external or defined once outside useEffect)
    const getSectionConfig = (id: string): SectionData | undefined => {
        switch (id) {
        case 'section1': return { id: 'section1', color: '#d9d6cc', text: 'Section One (Pink)', height: 1120, triggerPixels: 500, order: 0 };
        case 'section2': return { id: 'section2', color: '#4994C4', text: 'Section Two (Light Blue)', height: 2250, triggerPixels: 500, order: 1 };
        case 'section3': return { id: 'section3', color: '#111827', text: 'Section Three (Light Green)', height: 1000, triggerPixels: 500, order: 2 };
        case 'section4': return { id: 'section4', color: '#6d8c3f', text: 'Section Four (Gold)', height: 2200, triggerPixels: 200, order: 3 };
        // case 'section5': return { id: 'section5', color: '#f3f4f6', text: 'Section Five (Pale Turquoise)', height: typeof window !== 'undefined' ? window.innerHeight : 400, triggerPixels: 500, order: 4 };
        // case 'section5': return { id: 'section5', color: '#f3f4f6', text: 'Section Five (Pale Turquoise)', height: 400, triggerPixels: 500, order: 4 };
        default: return undefined;
        }
    };

    useEffect(() => {
        const thresholdArray = Array.from({ length: 101 }, (_, i) => i / 100);

        const observer = new IntersectionObserver((entries) => {
        // Step 1: Update the status of all currently intersecting sections
        entries.forEach((entry) => {
            const sectionId = entry.target.id;
            const sectionData = getSectionConfig(sectionId);

            if (!sectionData) {
            console.warn(`Section data not found for ID: ${sectionId}`);
            return;
            }

            if (entry.isIntersecting) {
            intersectingSections.current[sectionId] = {
                id: sectionId, // Store the ID here
                ratio: entry.intersectionRatio,
                color: sectionData.color,
                order: sectionData.order
            };
            } else {
            delete intersectingSections.current[sectionId];
            }
        });

        // Step 2: Determine the most dominant section
        const activeSections = Object.values(intersectingSections.current);

        if (activeSections.length === 0) {
            return;
        }

        // Sort by document order to break ties
        activeSections.sort((a, b) => a.order - b.order);

        let dominantSectionCandidate: IntersectingSectionInfo | null = null; // Use a distinct name for the mutable candidate

        activeSections.forEach(section => {
            const originalSectionData = getSectionConfig(section.id);
            if (!originalSectionData) return;

            const triggerThreshold = getThresholds(originalSectionData.triggerPixels, originalSectionData.height);

            if (section.ratio >= triggerThreshold) {
            if (!dominantSectionCandidate ||
                section.ratio > dominantSectionCandidate.ratio ||
                (section.ratio === dominantSectionCandidate.ratio && section.order < dominantSectionCandidate.order)) {
                dominantSectionCandidate = section;
            }
            }
        });

        // Fallback: If no section explicitly meets its trigger threshold, pick the one with the highest ratio
        if (!dominantSectionCandidate && activeSections.length > 0) {
            activeSections.forEach(section => {
            if (!dominantSectionCandidate ||
                section.ratio > dominantSectionCandidate.ratio ||
                (section.ratio === dominantSectionCandidate.ratio && section.order < dominantSectionCandidate.order)) {
                dominantSectionCandidate = section;
            }
            });
        }

        // Step 3: Apply the dominant section's color
        // TYPE ASSERTION here: We explicitly tell TypeScript that dominantSectionCandidate
        // will be of type IntersectingSectionInfo if it's not null.
        if (dominantSectionCandidate !== null) { // Check for null first
            const finalDominantSection = dominantSectionCandidate as IntersectingSectionInfo; // Assert the type

            if (currentPageBackgroundColor !== finalDominantSection.color) {
            setCurrentPageBackgroundColor(finalDominantSection.color);
            document.body.style.backgroundColor = finalDominantSection.color;
            // console.log(`Final color set to ${finalDominantSection.color} for ${finalDominantSection.id} (ratio: ${finalDominantSection.ratio.toFixed(2)})`);
            }
        }

        }, {
        root: null,
        rootMargin: '0px',
        threshold: thresholdArray,
        });

        // Manually observe each section ref
        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);
        if (section4Ref.current) observer.observe(section4Ref.current);
        // if (section5Ref.current) observer.observe(section5Ref.current);

        // Cleanup function
        return () => {
        observer.disconnect();
        document.body.style.backgroundColor = '#FFFFFF';
        };
    }, []);

    return (
        <div className=''>
            <Header/>

            <div className='lg:pt-12 lg:space-y-28'>

                <div id="section1" ref={section1Ref} className='' >
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                        <Splash/>
                    </div>
                </div>

                <div id="section2" ref={section2Ref}>
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                        {/* TITLE */}
                        <ScrollAnimatedWrapper>
                            <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#4994C4] px-12 lg:px-36 py-32 lg:py-36 rounded-4xl lg:rounded-[62px]`}>
                                <ScrollReveal>
                                    <div className='text-gray-50 text-8xl'>                         
                                        Payments and Rewards
                                    </div>
                                    <div className='text-[#06436F] text-8xl'>
                                        Start here.
                                    </div><div className='text-[#06436F] text-8xl'>
                                        Pay anywhere.
                                    </div>
                                </ScrollReveal>
                            </div>
                        </ScrollAnimatedWrapper>

                        <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default'>
                            <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} grid lg:grid-cols-2 gap-x-8 overflow-hidden`}>
                                <ScrollAnimatedWrapper>
                                    <div className='rounded-4xl lg:rounded-[62px] bg-gray-700 text-gray-50 py-22 px-16 text-5xl lg:space-y-3'>
                                        <ScrollReveal>
                                            <PaymentLeft/>
                                        </ScrollReveal>
                                    </div>
                                </ScrollAnimatedWrapper>

                                <ScrollAnimatedWrapper>
                                    <div className='rounded-4xl lg:rounded-[62px] bg-gray-50 text-gray-600 py-20 px-20 text-5xl'>
                                        <ScrollReveal>
                                            <PaymentRight/>
                                        </ScrollReveal>
                                    </div>
                                </ScrollAnimatedWrapper>
                            </div>
                        </div>

                        {/* LoyaltyRewards */}
                        <ScrollAnimatedWrapper>
                            <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default  '>
                                <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#003460] rounded-4xl lg:rounded-[62px] flex overflow-hidden`}>
                                    <LoyaltyRewardsSection/>
                                </div>
                            </div>
                        </ScrollAnimatedWrapper>
                    </div>
                </div>

                <div id="section3" ref={section3Ref} className=''>
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default px-6 lg:px-0 text-gray-50 text-6xl'>
                        <div className={`rounded-4xl lg:rounded-[62px] lg:w-2/3 mx-auto px-4 lg:px-32 lg:pt-38 lg:pb-42 bg-gray-900`}>
                            <Section3/>
                        </div>
                    </div>
                </div>

                {/* TRANSIT */}
                <div id="section4" ref={section4Ref} className=''>
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                        {/* TITLE */}
                        <>
                            <div className={`lg:w-2/3 mx-auto font-semibold ${futura.className} bg-[#6d8c3f] px-12 lg:px-36 py-32 lg:py-36 rounded-4xl lg:rounded-[62px]`}>
                                <ScrollReveal>
                                    <div className='text-gray-50 text-8xl'>
                                        Transit and Tickets
                                    </div>
                                    <div className='text-[#C0D695] text-8xl'>
                                        Your even more mobile device.
                                    </div>
                                </ScrollReveal>
                            </div>
                        </>

                        {/* PRESTO */}
                        <ScrollAnimatedWrapper>
                            <div className={`lg:w-2/3 mx-auto font-semibold flex ${futura.className} bg-black rounded-4xl lg:rounded-[62px] overflow-hidden`}>
                                <PrestoComponent/>
                            </div>
                        </ScrollAnimatedWrapper>

                        {/* AIR CANADA */}
                        <ScrollAnimatedWrapper>
                            <FlightAnimation  />
                        </ScrollAnimatedWrapper>                       

                        {/* DUALIPA */}
                        <ScrollAnimatedWrapper>
                            <div className={`lg:w-2/3 mx-auto font-semibold flex ${futura.className} bg-gray-950 text-white text-3xl rounded-4xl lg:rounded-[62px] overflow-hidden`}>
                                <DuaLipaSection/>
                            </div>
                        </ScrollAnimatedWrapper>
                    </div>

                </div>

                {/* FAQ */}
                <div id="section5"  className='w-full hidden bg-gray-100'>
                {/* ref={section5Ref} */}
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0'>
                        <div className='lg:w-2/3 mx-auto w-full text-6xl pb-12 pt-6'>
                            <Accordion/>
                        </div>
                    </div>
                </div>

                {/* <div className='bg-sky-400 h-100 w-full'></div> */}

                <div className='bg-gray-50'>
                    <div className='lg:max-w-[1200px] xl:max-w-[1500px] mx-auto cursor-default space-y-12 px-6 lg:px-0 py-12'>
                        <div className='lg:w-2/3 mx-auto w-full text-6xl pb-12 pt-6'>
                            <Accordion/>
                        </div>
                    </div>

                    <div className='bg-amber-200 h-200 w-full'></div>
                </div>

                

            </div>

            {/* Global styles for smooth transition */}
            <style jsx global>{`
                body {
                transition: background-color 0.8s ease-in-out;
                }
            `}</style>
        
        </div>
    )
}

export default Wallet
