// components/CurvedDottedLine.tsx
import React from 'react';

interface CurvedDottedLineProps {
  width?: string;
  height?: string;
  strokeColor?: string;
  strokeWidth?: number;
  dashArray?: string;
  pathData: string;
  viewBox?: string;
  // Change to RefObject for clarity if you are creating it with useRef in the parent,
  // but React.Ref works fine as it's a union type.
  svgRef?: React.Ref<SVGSVGElement>;
}

const CurvedDottedLine: React.FC<CurvedDottedLineProps> = ({
  width = '100%',
  height = '100%',
  strokeColor = '#6d8c3f', // Tailwind's gray-400 equivalent
  strokeWidth = 2,
  dashArray = '3 3', // Default: 5px dash, 5px gap
  pathData,
  viewBox = "0 0 100 100",
  svgRef,
}) => {
  return (
    <div style={{ width, height }}>
      <svg
        ref={svgRef} // Assign the ref to the SVG element
        width="100%"
        height="100%"
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default CurvedDottedLine;