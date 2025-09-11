import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
import Herophone from '../../../public/png/herophone.png'
// import SplashPhone from './SplashPhone'

function Splash() {
    return (
        <div className={`text-center flex justify-center mb-4 lg:mb-0 ${futura.className}`}>
            <div className='space-y-2 lg:space-y-4'>
                <div className='flex justify-center'>
                    <div className='mt-12 mb-2 lg:mb-0 text-3xl lg:text-5xl w-fit font-medium lg:font-semibold lg:mt-24 bg-[#108B96] text-gray-50 px-3 py-1 lg:px-4 lg:py-2 rounded-2xl uppercase'>City Wallet</div>
                </div>
                <div className='text-5xl lg:text-9xl font-medium lg:font-semibold text-gray-800 leading-12 lg:leading-16'>Carry one thing.</div>
                <div className='text-5xl lg:text-9xl font-medium lg:font-semibold text-gray-800'>Everything.</div>

                <div className='mx-auto w-full flex justify-center scale-110 mt-14 lg:mt-24'><Image src={Herophone} alt="Phone" className='w-72 lg:w-100' /></div>
            </div>
        </div>
    )
}

export default Splash