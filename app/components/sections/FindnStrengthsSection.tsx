"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function FindnStrengthsSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-20 h-[50vh]">
            <div className="max-w-5xl mx-auto px-9 text-center">
                <h2 className="text-4xl font-bold mb-8">{t("findnStrengths")}</h2>
                <p className="text-gray-600 mb-2 text-2xl">{t("strengthsDescription")}</p>
                <p className="text-gray-600 text-xl">{t("strengthsExample")}</p>
            </div>
        </section>
    );
}
