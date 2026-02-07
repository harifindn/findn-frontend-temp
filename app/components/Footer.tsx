"use client";

import { useTranslation } from "../i18n/useTranslation";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-white py-12">
            <div className="max-w-5xl mx-auto px-8">
                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-gray-600 hover:text-gray-900 text-sm"
                        >
                            {t("footerLink")}
                        </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                            {t("companyInfo")}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                            {t("termsOfService")}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                            {t("privacyPolicy")}
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm">{t("copyright")}</p>
                </div>
            </div>
        </footer>
    );
}
