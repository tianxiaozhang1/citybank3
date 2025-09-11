'use client';

import React, { useEffect, useRef, useState } from 'react'; // Import useState
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal'

import Aircanada1 from '../../../public/png/Aircanada1.png'
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })

function FlightAnimationMobile() {
    return (
        <div className='lg:flex py-8 lg:py-0 bg-[#f3f4f6] rounded-4xl'>
            <div className='w-full lg:w-1/2 text-3xl lg:text-7xl px-6 lg:px-0 lg:pl-12 lg:pr-22 flex items-end lg:pb-32 pt-4 pb-0 lg:py-0 text-gray-50'>
                <div>
                    <ScrollReveal>
                        <div className={`text-[#6d8c3f] ${futura.className} font-medium px-2`}>
                            <div>Boarding passes.</div>
                            <div>Easier on the fly.</div>
                        </div>
                    </ScrollReveal>

                    <div className='mt-6'>
                        <Image
                            src={Aircanada1}
                            alt='Flight Pass'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightAnimationMobile
