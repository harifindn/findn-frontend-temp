"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    children: ReactNode;
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors";

    const variantClasses = {
        primary: "bg-[#00B894] text-white hover:bg-[#00A384]",
        secondary: "border-2 border-[#00B894] text-[#00B894] hover:bg-[#00B894]/5",
        ghost: "text-[#00B894] hover:text-[#00A384]",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
