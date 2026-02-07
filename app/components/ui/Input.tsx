"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
}

export default function Input({ fullWidth = true, className = "", ...props }: InputProps) {
    const baseClasses = "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B894] focus:border-transparent";
    const widthClass = fullWidth ? "w-full" : "";

    return (
        <input
            className={`${baseClasses} ${widthClass} ${className}`}
            {...props}
        />
    );
}
