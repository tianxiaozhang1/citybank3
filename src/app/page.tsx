"use client";
import React from 'react';
// , { useState, useEffect }
import Head from 'next/head';
// import Image from 'next/image'; 
// import Header from '../components/Header'
import Footer from '../components/Footer'

// import localFont from 'next/font/local'
// const futura = localFont({ src: '../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraLight = localFont({ src: '../fontFiles/FuturaCyrillicLight.ttf' })
// const futuraBold = localFont({ src: '../fontFiles/FuturaCyrillicBold.ttf' })
// import { lora } from '../fonts'; 
// , inter
// import { Check, ArrowRight, PiggyBank, Banknote, CreditCard, ChartNoAxesCombined, HousePlus, 
//           BanknoteArrowDown, LaptopMinimalCheckIcon, MessageCircleHeart, CirclePercent, CircleDollarSign, 
//           CircleCheck, CirclePlus, CircleUserRound, CircleParking } from 'lucide-react';

// import Sample1 from '../../public/jpg/sample1a.jpg'

// import glassStyles from '../styles/glass.module.css'

import Wallet from './wallet/page'

// Main Page Component
export default function HomePage() {
  

  return (
    <>
      <Head>
        <title>City Bank - Smart Banking for Everyone</title>
        <meta name="description" content="Digital tools, daily interest accounts, and more. Bank smarter with City Bank." />
        <link rel="icon" href="/favicon.ico" /> {/* Replace with your bank's favicon */}
      </Head>

      {/* <Header/> */}

      <Wallet/>
      
      <Footer/>
    </>
  );
}