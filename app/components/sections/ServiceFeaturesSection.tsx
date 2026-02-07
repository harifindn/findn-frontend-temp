"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function ServiceFeaturesSection() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f5f7f9] py-16">
            <div className="max-w-5xl mx-auto px-8">
                <h2 className="text-2xl font-bold text-center mb-12">{t("serviceFeatures")}</h2>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left side - Animation description */}
                    <div className="md:w-1/3 text-gray-600 text-sm">
                        <p>{t("simpleAnimation")}</p>
                        <p>{t("easyToUnderstand")}</p>
                    </div>

                    {/* Right side - Features list */}
                    <div className="md:w-2/3 space-y-8">
                        <div>
                            <h3 className="font-bold text-lg mb-2">{t("feature1")}</h3>
                            <p className="text-gray-600 text-sm">{t("featureDescription")}</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-2">{t("feature2")}</h3>
                            <p className="text-gray-600 text-sm">{t("featureDescription")}</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-2">{t("feature3")}</h3>
                            <p className="text-gray-600 text-sm">{t("featureDescription")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
