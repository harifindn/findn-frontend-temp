"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function FeaturedFunctionsSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-20 h-screen">
            <div className="max-w-5xl mx-auto px-8 text-center">
                <h2 className="text-2xl font-bold mb-8">{t("featuredFunctions")}</h2>
                <p className="text-gray-600">{t("featuredFunctionsDescription")}</p>
            </div>
        </section>
    );
}
