"use client";

import { useTranslation } from "../../i18n/useTranslation";

interface HeroSectionProps {
    onTrialClick: () => void;
}

export default function HeroSection({ onTrialClick }: HeroSectionProps) {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e8f5f2] to-white">
            <main className="max-w-4xl mx-auto px-8 pt-16 pb-24 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-relaxed mb-6">
                    {t("heroTitle1")}
                    <br />
                    {t("heroTitle2")}
                </h1>
                <p className="text-gray-600 mb-10">{t("heroSubtitle")}</p>

                {/* Email Input Form */}
                <form
                    className="flex items-center justify-center gap-2 max-w-lg mx-auto mb-16"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onTrialClick();
                    }}
                >
                    <input
                        type="email"
                        placeholder=""
                        className="flex-1 px-4 py-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B894] focus:border-transparent"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-[#00B894] text-white rounded-md font-medium hover:bg-[#00A384] transition-colors whitespace-nowrap"
                    >
                        {t("tryFree")}
                    </button>
                </form>

                {/* Product Image Placeholder */}
                <div className="bg-gray-100 mx-auto max-w-7xl aspect-[16/10] flex items-center justify-center translate-y-24">
                    <span className="text-gray text-lg">{t("productImage")}</span>
                </div>
            </main>
        </div>
    );
}
