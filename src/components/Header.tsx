'use client'; // Required for components with interactivity (useState, useEffect)

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Using Next.js Link for navigation
import { lora } from '../fonts'

// Assuming Inter font is set up globally or via next/font as commented previously.
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
// Then apply inter.className to the body or a top-level div.

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // For closing mobile menu on link click
}

// Desktop Navigation Link Component
const NavLink: React.FC<NavLinkProps> = ({ href, children, className = "", onClick }) => (
  <Link href={href} passHref>
    <div
      onClick={onClick}
      className={`text-neutral-700 hover:text-neutral-900 px-3 py-2 text-base font-medium transition-colors duration-150 cursor-pointer ${className}`}
    >
      {children}
    </div>
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink: React.FC<NavLinkProps> = ({ href, children, className = "", onClick }) => (
  <Link href={href} passHref>
    <div
      onClick={onClick}
      className={`block text-neutral-700 hover:text-neutral-900 py-3 text-base font-medium border-b border-neutral-200 transition-colors duration-150 cursor-pointer ${className}`}
    >
      {children}
    </div>
  </Link>
);

const CityBankHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openAccountCSS = "bg-neutral-50 hover:bg-white text-stone-600 border-2 border-stone-300"

  // Effect to handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '/banking', label: 'Banking' },
    { href: '/mortgage', label: 'Mortgage' },
    { href: '/investment', label: 'Investment' },
    { href: '/insurance', label: 'Insurance' },
  ];

  return (
    // Header container: white background, subtle shadow, sticky, z-index for layering
    <header className={`bg-white shadow-sm sticky top-0 z-50 ${lora.className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for alignment: items-center, justify-between, reduced height */}
        <div className="flex items-center justify-between h-20"> {/* Reduced height to h-20 (80px) */}
          {/* Logo */}
          <div className='flex items-center'>
            <div className="flex-shrink-0">
                <Link href="/" passHref>
                {/* Logo text: reduced size, dark grey color */}
                <div className="text-2xl font-semibold text-neutral-800 cursor-pointer">
                    CityBank
                </div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:ml-12 lg:items-center lg:space-x-5 xl:space-x-7">
                {navItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                    {item.label}
                </NavLink>
                ))}
            </nav>
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:block">
            <Link href="/banking/open-account" passHref>
              <div className={` px-5 py-2.5 rounded-xl text-base font-medium transition-colors duration-150 cursor-pointer ${openAccountCSS}`}>
                Open An Account
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-neutral-900 focus:outline-none p-2 cursor-pointer"
              aria-label="Open mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  // Close Icon (X)
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className='cursor-pointer' />
                ) : (
                  // Hamburger Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Backdrop for mobile menu: semi-transparent black, blurs background */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/25 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu} // Close menu when clicking backdrop
          aria-hidden="true"
        ></div>
      )}
      {/* Menu Panel: slides in from the right */}
      <div
        id="mobile-menu-panel"
        className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs sm:max-w-sm bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out transform
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5"> {/* Reduced padding slightly */}
          {/* Mobile Menu Header: Logo and Close Button */}
          <div className="flex justify-between items-center mb-7"> {/* Adjusted margin */}
            <Link href="/" passHref>
              <div onClick={toggleMobileMenu} className="text-xl font-semibold text-neutral-800 cursor-pointer">
                CityBank
              </div>
            </Link>
            <button
              id="mobile-close-button"
              onClick={toggleMobileMenu}
              className="text-neutral-500 hover:text-neutral-700 p-2"
              aria-label="Close mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <MobileNavLink key={item.label} href={item.href} onClick={toggleMobileMenu}>
                {item.label}
              </MobileNavLink>
            ))}
            {/* Mobile Call to Action Button */}
            <Link href="/banking/open-account" passHref>
              <div
                onClick={toggleMobileMenu}
                className={`mt-6 block w-full text-center px-5 py-3 rounded-md text-base font-medium transition-colors duration-150 cursor-pointer ${openAccountCSS}`}
              >
                Open An Account
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CityBankHeader;

// Example of how to use it in a page (e.g., app/layout.tsx or app/page.tsx)
/*
import CityBankHeader from './CityBankHeader'; // Adjust path as needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter"> // Example: applying a font globally
        <CityBankHeader />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28"> // Added pt-28 to account for sticky header height + some space
          {children}
        </main>
      </body>
    </html>
  );
}
*/

/*
// Dummy content for a page to demonstrate the header:
// app/page.tsx or similar

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Page Content</h1>
      <p className="mb-4">Scroll down to see the sticky header in action.</p>
      <div className="h-screen bg-neutral-100 rounded-lg p-8">
        <p>More content here...</p>
      </div>
      <div className="h-screen bg-neutral-200 rounded-lg p-8 mt-8">
        <p>Even more content...</p>
      </div>
    </>
  );
}
*/
