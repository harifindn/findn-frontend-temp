"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function PricingSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-20 h-[60vh]">
            <div className="max-w-5xl mx-auto px-8 text-center">
                <h2 className="text-2xl font-bold mb-8">{t("pricing")}</h2>
                <p className="mb-2">{t("pricingDescription")}</p>
                <p className="text-gray-600">{t("pricingConsult")}</p>
            </div>
        </section>
    );
}
