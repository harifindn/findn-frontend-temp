"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function ContactSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f5f7f9] py-16">
            <div className="max-w-4xl mx-auto px-8">
                <h2 className="text-2xl font-bold text-center mb-8">{t("contact")}</h2>

                {/* Contact Form Placeholder */}
                <div className="bg-white rounded-lg p-12 min-h-[300px] flex items-center justify-center">
                    <p className="text-gray-600">{t("contactForm")}</p>
                </div>
            </div>
        </section>
    );
}
