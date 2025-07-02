import React from 'react';

interface ChartPlaceholderProps {
  title: string;
  height?: string;
}

export default function ChartPlaceholder({ title, height = 'h-64' }: ChartPlaceholderProps) {
  return (
    <div className={`flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-md ${height} text-gray-500 dark:text-gray-400 text-sm`}>
      <p>{title} Chart Placeholder</p>
    </div>
  );
}