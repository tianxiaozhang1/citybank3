import React from 'react';
import Link from 'next/link';
// import { lora } from '../fonts'; 
import localFont from 'next/font/local'
const futura = localFont({ src: '../fontFiles/FuturaCyrillicBook.ttf' })

import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'; // Changed to lucide-react

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className }) => (
    <Link href={href} passHref>
        <div className={`text-gray-800 hover:text-black transition-colors duration-200 cursor-pointer lg:my-4  lg:text-xl ${className}`}>
            {children}
        </div>
    </Link>
);

const CityBankFooter: React.FC = () => {
    const footerColumns = [
        {
            title: 'About us',
            links: [
                { href: '/about', label: 'Our company' },
                { href: '/newsroom', label: 'Newsroom' },
                { href: '/culture', label: 'Culture Manual' },
                { href: '/careers', label: 'Careers' },
                { href: '/foundation', label: 'Wealthsimple Foundation' },
                { href: '/giveback', label: 'Giveback program' },
                { href: '/advisor-insights', label: 'Advisor Insights' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { href: '/accessibility', label: 'Accessibility' },
                { href: '/privacy', label: 'Privacy policy' },
                { href: '/terms', label: 'Terms of use' },
            ],
        },
        {
            title: 'Accounts',
            links: [
                { href: '/rrsp', label: 'RRSP' },
                { href: '/tfsa', label: 'TFSA' },
                { href: '/fhsa', label: 'FHSA' },
                { href: '/usd-savings', label: 'USD savings' },
                { href: '/registered-savings', label: 'Registered savings account' },
                { href: '/non-registered', label: 'Non-registered account' },
                { href: '/margin', label: 'Margin' },
                { href: '/spousal-rrsp', label: 'Spousal RRSP' },
                { href: '/resp', label: 'RESP' },
                { href: '/corporate', label: 'Corporate' },
                { href: '/lira', label: 'LIRA' },
                { href: '/all-accounts', label: 'All accounts' },
            ],
        },
        {
            title: 'Products',
            links: [
                { href: '/chequing', label: 'Chequing' },
                { href: '/stocks-etfs', label: 'Stocks & ETFs' },
                { href: '/managed-investing', label: 'Managed investing' },
                { href: '/mortgages', label: 'Mortgages' },
                { href: '/tax', label: 'Tax' },
                { href: '/crypto', label: 'Crypto' },
                { href: '/for-business', label: 'For Business' },
            ],
        },
        {
            title: 'Social',
            links: [
                { href: 'https://www.instagram.com', label: 'Instagram', icon: Instagram }, // Changed to Instagram
                { href: 'https://twitter.com', label: 'X', icon: Twitter },  // Changed to X
                { href: 'https://www.youtube.com', label: 'YouTube', icon: Youtube }, // Changed to Youtube
                { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: Linkedin }, // Changed to Linkedin
            ],
        },
        {
            title: 'Support',
            links: [
                { href: '/transfer', label: 'Transfer an account' },
                { href: '/help', label: 'Help centre' },
                { href: '/contact', label: 'Contact us' },
            ],
        },
    ];

    return (
        <footer className={`bg-stone-50  py-12 lg:py-24 ${futura.className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-center lg:text-start">
                    {footerColumns.map((column, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-700">{column.title}</h3>
                            {column.links.map((link, linkIndex) => (
                                    <FooterLink key={linkIndex} href={link.href}>
                                        {link.label}
                                    </FooterLink>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-400 pt-6 lg:pt-12">
                    © {new Date().getFullYear()} CityBank. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default CityBankFooter;
