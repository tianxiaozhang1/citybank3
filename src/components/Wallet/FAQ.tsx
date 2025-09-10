// components/Accordion.tsx

"use client"; // This is a client component in Next.js App Router

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Using Lucide React for the chevron icon

import localFont from 'next/font/local'
const futura = localFont({ src: '../../fontFiles/FuturaCyrillicBook.ttf' })
// const futuraBold = localFont({ src: '../../fontFiles/FuturaCyrillicBold.ttf' })
// const futuraLight = localFont({ src: '../../fontFiles/FuturaCyrillicLight.ttf' })

// Interface for a single accordion item's data
interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

// Props for the AccordionItem component
interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

/**
 * Renders a single accordion item, managing its open/closed state visually.
 * @param {AccordionItemProps} props - The properties for the accordion item.
 */
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`border-b border-gray-200 last:border-b-0 ${futura.className}`}>
      {/* Accordion Header (Question) */}
      <button
        className={`flex justify-between items-center w-full py-6 px-6 text-left text-2xl text-gray-600 cursor-pointer transition-colors duration-200 ease-in-out font-semibold ${futura.className}`}
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
      >
        <span>{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 lg:w-8 lg:h-8 text-gray-800 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Accordion Content (Answer) */}
      <div
        id={`accordion-content-${item.id}`}
        role="region"
        aria-hidden={!isOpen}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 pt-2 pb-6 px-6 text-start' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        {/*
          FIX: Use dangerouslySetInnerHTML to render HTML content from the answer string.
          The answer string itself will now contain the <p> tags for paragraphs
          and actual characters instead of HTML entities.
        */}
        <div
          className="text-gray-800 text-xl" // Apply text styles to the container div
          dangerouslySetInnerHTML={{ __html: item.answer }}
        />
      </div>
    </div>
  );
};

/**
 * A multi-select accordion component that displays a list of questions and answers.
 * Users can open multiple accordion items simultaneously.
 */
const Accordion: React.FC = () => {
  // State to keep track of which accordion items are currently open
  // Stores an array of item IDs that are open
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Hardcoded data for the accordion
  const accordionData: AccordionItemData[] = [
    {
      id: 'item-1',
      question: 'What is City Wallet?',
      // Replaced &mdash; with actual em dash character
      answer: 'City Wallet is an app on your phone, tablet and smart watch that securely and conveniently organizes your credit and debit cards, boarding passes, tickets, car keys, rewards cards and more — all in one place.'
    },
    {
      id: 'item-2',
      question: 'How safe is City Wallet?',
      // Replaced &apos; with actual apostrophe character
      answer: `In a word, very. Your cards are securely associated with your City Account to help you add and manage your cards and passes across devices. For added security, City Cloud encrypts your Wallet data when it's sent over the internet and stores it in an encrypted format when it's on City Bank servers.`
    },
    {
      id: 'item-3',
      question: 'How do I use City Wallet?',
      // Replaced <br/><br/> with actual <p> tags for multiple paragraphs
      // Replaced &apos; with actual apostrophe character
      answer: `<p>It is easy to use different cards and passes in City Wallet. Some passes can automatically appear based on time and location, like a boarding pass when you arrive at the airport.</p><p> </p><p>If you have a credit, debit or rewards card in Wallet that works with City Pay, just double-click the Home button to open Wallet and use your card from the reader. On iPhone X or later, double-click the side button.</p><p>You can also use Express Transit without having to wake or unlock your phone.</p>`
    }
  ];

  /**
   * Toggles the open/closed state of an accordion item.
   * If the item is already open, it closes it. If closed, it opens it.
   * Supports multiple open items.
   * @param {string} id - The ID of the accordion item to toggle.
   */
  const handleToggle = (id: string) => {
    setOpenItems(prevOpenItems => {
      if (prevOpenItems.includes(id)) {
        // If the item is already open, remove it (close it)
        return prevOpenItems.filter(itemId => itemId !== id);
      } else {
        // If the item is closed, add it (open it)
        return [...prevOpenItems, id];
      }
    });
  };

  return (
    <div className="w-full mx-auto my-12 p-6 ">
      <h2 className={`text-7xl font-bold text-gray-700 mb-6 text-center ${futura.className}`}>Questions? Answers.</h2>
      {accordionData.map(item => (
        <AccordionItem
          key={item.id} // Unique key for list rendering
          item={item}
          isOpen={openItems.includes(item.id)} // Check if this item's ID is in the openItems array
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
