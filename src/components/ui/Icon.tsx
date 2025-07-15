import { type LucideIcon } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

interface IconProps {
    iconName: LucideIcon;
    enableTooltip: boolean;
    tooltipText?: string;
    tooltipDirection?: 'top' | 'bottom' | 'left' | 'right';
    onClick?: () => void;
    className?: string;
}

export default function Icon({
    iconName,
    enableTooltip = false,
    tooltipText,
    tooltipDirection = 'right',
    onClick,
    className
}: IconProps) {
    const [showTooltip, setShowTooltip] = useState(false);

    const getTooltipPosition = () => {
        switch (tooltipDirection) {
            case 'top':
                return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
            case 'bottom':
                return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
            case 'left':
                return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
            case 'right':
            default:
                return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
        }
    };

    const getTooltipArrow = () => {
        switch (tooltipDirection) {
            case 'top':
                return 'top-full left-1/2 transform -translate-x-1/2 border-t-primary';
            case 'bottom':
                return 'bottom-full left-1/2 transform -translate-x-1/2 border-b-primary';
            case 'left':
                return 'left-full top-1/2 transform -translate-y-1/2 border-l-primary';
            case 'right':
            default:
                return 'right-full top-1/2 transform -translate-y-1/2 border-r-primary';
        }
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={onClick}
        >
            <div className="">
                {React.createElement(iconName, { className: `text-icon hover:text-primary transition-colors duration-200 ease-linear cursor-pointer size-5 ${className}` })}
            </div>

            {enableTooltip && showTooltip && (
                <motion.div
                    initial={{ opacity: 0, y: tooltipDirection === 'top' ? -10 : tooltipDirection === 'bottom' ? 10 : 0, x: tooltipDirection === 'left' ? -10 : tooltipDirection === 'right' ? 10 : 0 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: tooltipDirection === 'top' ? -10 : tooltipDirection === 'bottom' ? 10 : 0, x: tooltipDirection === 'left' ? -10 : tooltipDirection === 'right' ? 10 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute z-50 ${getTooltipPosition()}`}
                >
                    <div className="bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {tooltipText}
                        <div className={`absolute w-0 h-0 border-4 border-transparent ${getTooltipArrow()}`}></div>
                    </div>
                </motion.div>
            )}
        </div>
    );
} 