import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function Card({ children, className, title }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${className}`}>
      {title && <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{title}</h2>}
      {children}
    </div>
  );
}