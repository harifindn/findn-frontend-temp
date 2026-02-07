"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function CustomerVoiceSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f5f7f9] py-16">
            <div className="max-w-5xl mx-auto px-8">
                <h2 className="text-2xl font-bold text-center mb-12">{t("customerVoice")}</h2>

                {/* Testimonial Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Image placeholder */}
                        <div className="md:w-1/3 bg-gray-100 aspect-square md:aspect-auto min-h-[200px]" />

                        {/* Content */}
                        <div className="md:w-2/3 p-8">
                            <h3 className="font-bold text-lg mb-4">{t("companyName")}</h3>
                            <p className="text-gray-800 font-medium mb-4">
                                {t("customerVoiceTitle")}
                            </p>
                            <p className="text-gray-600 text-sm mb-6">
                                {t("customerVoiceDescription")}
                            </p>
                            <div>
                                <p className="font-medium">{t("customerName")}</p>
                                <p className="text-gray-500 text-sm">{t("customerPosition")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button className="text-gray-600 hover:text-gray-900 transition-colors text-2xl">
                        ◀
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 transition-colors text-2xl">
                        ▶
                    </button>
                </div>
            </div>
        </section>
    );
}
