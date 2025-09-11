'use client';

import React from 'react'; // Import useState
import Image from 'next/image';
import { ScrollReveal } from './ScrollReveal'

import DuaLipaPhone from '../../../public/png/DuaLipaPhone.png'
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })

function DuaLipaMobile() {
    return (
        <div className='lg:flex pt-8 bg-gray-950 rounded-4xl'>
            <div className='w-full text-3xl px-6 flex items-end pt-4 pb-0  text-gray-50'>
                <div>
                    <ScrollReveal>
                        <div className={`text-[#6d8c3f] ${futura.className} font-medium px-2`}>
                            <div className='text-white'>Music and live events.</div>
                            <div className='text-[#FFF799]'>Just show.</div>
                            <div className='pb-2 text-[#FFF799]'>And go.</div>
                        </div>
                    </ScrollReveal>

                    <div className='mt-6'>
                        <Image
                            src={DuaLipaPhone}
                            alt='Dua Lipa Ticket'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DuaLipaMobile
