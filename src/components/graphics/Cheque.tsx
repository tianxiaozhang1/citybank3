import React from 'react';

// Re-implement the cn function directly within this file
const cn = (...args: (string | undefined | { [key: string]: boolean })[]): string => {
    return args.filter(Boolean).map(arg => {
        if (typeof arg === 'string') {
            return arg;
        } else if (typeof arg === 'object') {
            return Object.entries(arg)
                .filter(([, value]) => value)
                .map(([key]) => key)
                .join(' ');
        }
        return '';
    }).join(' ');
};

interface ChequeProps {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
}

const PixelatedCheque: React.FC<ChequeProps> = ({ backgroundColor, textColor, accentColor }) => {
    return (
        <div
            className={cn(
                "w-full max-w-md md:max-w-lg lg:max-w-xl flex", // Responsive width
                "bg-transparent", // Ensure the main container is transparent
                "py-6 md:py-8 lg:py-10",     // Vertical padding - increased padding
                "px-0",       // No horizontal padding on the main container
                "overflow-hidden", // Clip the pixelated edges
                "relative"         // Needed for absolute positioning of elements
            )}
        >
            {/* Left side (Amount in words) - Invisible, takes up space */}
            <div
                className={cn(
                    "w-1/2 md:w-2/3 lg:w-3/4", // Takes up most of the width
                    "flex flex-col justify-center",
                    "px-6 md:px-8 lg:px-10",  // Padding, same as right side - increased padding
                    "text-transparent"  // Make text transparent
                )}
            >
                <div className="text-sm md:text-base lg:text-lg font-mono">PAY TO THE ORDER OF</div>
                <div className="text-lg md:text-xl lg:text-2xl font-mono">John Doe</div>
                <div className="text-xs md:text-sm lg:text-base font-mono">ONE HUNDRED TWENTY THREE DOLLARS AND 45/100</div>
            </div>

            {/* Right side (Cheque Details) */}
            <div
                className={cn(
                    "w-1/2 md:w-1/3 lg:w-1/4", // Takes up less width
                    "bg-gradient-to-r from-transparent to-", // Gradient effect
                    `to-${backgroundColor}`, // Blend with the background
                    "border-l-2", // Left border
                    `border-${accentColor}`,
                    "px-6 md:px-8 lg:px-10",  // Padding - increased padding
                    "flex flex-col justify-between", // Space out content
                    "items-end",             // Right-align content
                    "relative overflow-hidden" // Important for pixelated effect and absolute positioning
                )}
                style={{
                    // Create the pixelated effect using a shadow.
                    // Increased shadow spread to make pixels larger
                    boxShadow: `
                        4px 0 0 0 ${accentColor},
                        8px 0 0 0 ${accentColor},
                        12px 0 0 0 ${accentColor},
                        16px 0 0 0 ${accentColor},
                        20px 0 0 0 ${accentColor},
                        24px 0 0 0 ${accentColor},
                        28px 0 0 0 ${accentColor},
                        32px 0 0 0 ${accentColor},
                        36px 0 0 0 ${accentColor},
                        40px 0 0 0 ${accentColor},
                        44px 0 0 0 ${accentColor},
                        48px 0 0 0 ${accentColor},
                        52px 0 0 0 ${accentColor},
                        56px 0 0 0 ${accentColor},
                        60px 0 0 0 ${accentColor},
                        64px 0 0 0 ${accentColor},
                        68px 0 0 0 ${accentColor},
                        72px 0 0 0 ${accentColor},
                        76px 0 0 0 ${accentColor},
                        80px 0 0 0 ${accentColor},
                        84px 0 0 0 ${accentColor},
                        88px 0 0 0 ${accentColor},
                        92px 0 0 0 ${accentColor},
                        96px 0 0 0 ${accentColor},
                        100px 0 0 0 ${accentColor},
                        104px 0 0 0 ${accentColor},
                        108px 0 0 0 ${accentColor},
                        112px 0 0 0 ${accentColor},
                        116px 0 0 0 ${accentColor},
                        120px 0 0 0 ${accentColor},
                        124px 0 0 0 ${accentColor},
                        128px 0 0 0 ${accentColor},
                        132px 0 0 0 ${accentColor},
                        136px 0 0 0 ${accentColor},
                        140px 0 0 0 ${accentColor},
                        144px 0 0 0 ${accentColor},
                        148px 0 0 0 ${accentColor},
                        152px 0 0 0 ${accentColor},
                        156px 0 0 0 ${accentColor},
                        160px 0 0 0 ${accentColor}
                    `
                }}
            >
                {/* Cheque Number */}
                <div className={cn(
                    "text-base md:text-lg lg:text-xl font-mono", // Increased font size
                    `text-${textColor}`
                )}>
                    1234567890
                </div>

                {/* Bank Name and Location */}
                <div className={cn(
                    "text-sm md:text-base lg:text-lg font-mono",
                    `text-${textColor}`
                )}>
                    <div>Bank Name</div>
                    <div>Branch Location</div>
                </div>

                {/* Date */}
                <div className={cn(
                    "text-sm md:text-base lg:text-lg font-mono",
                    `text-${textColor}`
                )}>
                    <div>Date:</div>
                    <div>MM/DD/YYYY</div>
                </div>

                {/* Amount in Numbers */}
                <div className={cn(
                    "text-2xl md:text-3xl lg:text-4xl font-mono", // Increased font size
                    `text-${textColor}`
                )}>
                    $123.45
                </div>
            </div>
        </div>
    );
};

const BankCheque = () => {
    // Define your color variables here
    const chequeBackgroundColor = 'gray-100'; // Light gray
    const chequeTextColor = 'gray-800';     // Dark gray
    const chequeAccentColor = 'blue-500';       // Blue

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <PixelatedCheque
                backgroundColor={chequeBackgroundColor}
                textColor={chequeTextColor}
                accentColor={chequeAccentColor}
            />
        </div>
    );
};

export default BankCheque;
