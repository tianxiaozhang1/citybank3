import { Lora } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import { Aldrich } from 'next/font/google';
import { PT_Sans_Narrow } from 'next/font/google';

export const lora = Lora({ subsets: ['latin'], weight: "400" })

export const montserrat = Montserrat({ subsets: ['latin'], weight: "400" })

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const aldrich = Aldrich({ subsets: ['latin'], weight: "400" })

export const pt_sans_narrow = PT_Sans_Narrow({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})