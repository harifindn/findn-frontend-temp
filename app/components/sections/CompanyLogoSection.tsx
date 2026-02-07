"use client";

import { useTranslation } from "../../i18n/useTranslation";

export default function CompanyLogoSection() {
    const { t } = useTranslation();

    return (
        <div className="bg-white flex justify-center items-center w-full h-[25vh]">
            <p className="text-3xl">{t("introducingCompanyLogo")}</p>
        </div>
    );
}
