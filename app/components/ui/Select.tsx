"use client";

import { SelectHTMLAttributes, ReactNode } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode;
    fullWidth?: boolean;
}

export default function Select({ children, fullWidth = true, className = "", ...props }: SelectProps) {
    const baseClasses = "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] focus:border-transparent appearance-none bg-white";
    const widthClass = fullWidth ? "w-full" : "";

    return (
        <div className={`relative ${fullWidth ? "w-full" : ""}`}>
            <select
                className={`${baseClasses} ${widthClass} ${className}`}
                {...props}
            >
                {children}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}
