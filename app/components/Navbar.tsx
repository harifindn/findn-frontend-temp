"use client";

import Image from "next/image";
import { useTranslation } from "../i18n/useTranslation";
import LanguageToggle from "./LanguageToggle";

interface NavbarProps {
    onLoginClick: () => void;
    onDemoClick: () => void;
    onTrialClick: () => void;
}

export default function Navbar({ onLoginClick, onDemoClick, onTrialClick }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <nav className="flex items-center bg-white justify-between py-4 max-w-7xl mx-auto">
            <div className="flex items-center">
                <Image
                    src="/findn_logo.png"
                    alt="find{n} - Don't search, find."
                    width={140}
                    height={50}
                    priority
                />
            </div>
            <div className="flex items-center gap-6">
                <LanguageToggle />
                <button
                    onClick={onLoginClick}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                    {t("login")}
                </button>
                <button
                    onClick={onDemoClick}
                    className="px-5 py-2.5 border-2 border-[#00B894] text-[#00B894] rounded-md font-medium hover:bg-[#00B894]/5 transition-colors"
                >
                    {t("viewDemo")}
                </button>
                <button
                    onClick={onTrialClick}
                    className="px-5 py-2.5 bg-[#00B894] text-white rounded-md font-medium hover:bg-[#00A384] transition-colors"
                >
                    {t("tryFree")}
                </button>
            </div>
        </nav>
    );
}
