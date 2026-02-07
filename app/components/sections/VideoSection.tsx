"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function VideoSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f5f7f9] py-16 h-[50vh]">
            <div className="max-w-3xl mx-auto px-8 text-center flex flex-col justify-center items-center">
                <p className="text-gray-600 text-xl leading-relaxed mb-8">
                    {t("videoDescription1")}
                    <br />
                    {t("videoDescription2")}
                    <br />
                    {t("videoDescription3")}
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                    <span className="text-sm">▶</span>
                    <span>{t("play")}</span>
                </button>
            </div>
        </section>
    );
}
