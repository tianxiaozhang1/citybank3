// components/CurvedDottedLine.tsx
import React from 'react';

interface CurvedDottedLineProps {
  width?: string;
  height?: string;
  strokeColor?: string;
  strokeWidth?: number;
  dashArray?: string; // e.g., "5 5" for 5px dash, 5px gap
  pathData: string; // <--- Make pathData a required prop
  viewBox?: string; // <--- Optional: make viewBox configurable too
}

const CurvedDottedLine: React.FC<CurvedDottedLineProps> = ({
  width = '100%',
  height = '100%',
  strokeColor = '#6d8c3f', // Tailwind's gray-400 equivalent
  strokeWidth = 2,
  dashArray = '3 3', // Default: 5px dash, 5px gap
  pathData, // <--- Destructure the new prop
  
  // Define the path for a light curve.
  // M = Move to (x,y)
  // Q = Quadratic Bezier Curve (control_x, control_y, end_x, end_y)
  // The numbers here are relative to the SVG's viewBox, so they scale.
  // Adjust these values to change the curve's shape and start/end points.
  // For a gentler curve, you might adjust the control point:
  // const pathData = "M 10 50 Q 50 25 90 50";
  // Or for more control, use Cubic Bezier (C control1_x control1_y, control2_x control2_y, end_x end_y)
  // const pathData = "M 10 50 C 30 10, 70 10, 90 50";

  viewBox = "0 0 100 100", // Default viewBox, but can be overridden
}) => {
  return ( 
    <div style={{ width, height }}>
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox} // Use the viewBox prop
        preserveAspectRatio="none"
      >
        <path
          d={pathData} // <--- Use the pathData prop here
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