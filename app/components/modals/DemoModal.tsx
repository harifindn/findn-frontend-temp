"use client";

import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import ProgressIndicator from "../ui/ProgressIndicator";
import { useTranslation } from "../../i18n/useTranslation";
import { useAppStore } from "../../store/useAppStore";

const employeeCountOptions = [
    "1 - 9",
    "10 - 49",
    "50 - 99",
    "100 - 299",
    "300 - 999",
    "1000+",
];

const totalSteps = 9;

export default function DemoModal() {
    const { t } = useTranslation();

    // State
    const isModalOpen = useAppStore((state) => state.isModalOpen);
    const currentStep = useAppStore((state) => state.currentStep);
    const selectedStrategies = useAppStore((state) => state.selectedStrategies);
    const selectedIndustry = useAppStore((state) => state.selectedIndustry);
    const email = useAppStore((state) => state.email);
    const lastName = useAppStore((state) => state.lastName);
    const firstName = useAppStore((state) => state.firstName);
    const lastNameKana = useAppStore((state) => state.lastNameKana);
    const firstNameKana = useAppStore((state) => state.firstNameKana);
    const phone = useAppStore((state) => state.phone);
    const companyName = useAppStore((state) => state.companyName);
    const department = useAppStore((state) => state.department);
    const employeeCount = useAppStore((state) => state.employeeCount);
    const country = useAppStore((state) => state.country);
    const privacyConsent = useAppStore((state) => state.privacyConsent);

    // Actions
    const closeDemoModal = useAppStore((state) => state.closeDemoModal);
    const nextStep = useAppStore((state) => state.nextStep);
    const toggleStrategy = useAppStore((state) => state.toggleStrategy);
    const setSelectedIndustry = useAppStore((state) => state.setSelectedIndustry);
    const setEmail = useAppStore((state) => state.setEmail);
    const setLastName = useAppStore((state) => state.setLastName);
    const setFirstName = useAppStore((state) => state.setFirstName);
    const setLastNameKana = useAppStore((state) => state.setLastNameKana);
    const setFirstNameKana = useAppStore((state) => state.setFirstNameKana);
    const setPhone = useAppStore((state) => state.setPhone);
    const setCompanyName = useAppStore((state) => state.setCompanyName);
    const setDepartment = useAppStore((state) => state.setDepartment);
    const setEmployeeCount = useAppStore((state) => state.setEmployeeCount);
    const setCountry = useAppStore((state) => state.setCountry);
    const setPrivacyConsent = useAppStore((state) => state.setPrivacyConsent);

    return (
        <Modal isOpen={isModalOpen} onClose={closeDemoModal} maxWidth="2xl">
            <div className="p-8 pt-6">
                {/* Progress Indicator */}
                <ProgressIndicator totalSteps={totalSteps} currentStep={currentStep} />

                {/* Step 1: Strategy Selection */}
                {currentStep === 1 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-6">{t("selectStrategy")}</p>

                        {/* Strategy Options */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {[
                                { key: "customerAcquisition", ja: "顧客獲得戦略" },
                                { key: "differentiation", ja: "差別化戦略" },
                                { key: "customerExperience", ja: "顧客体験向上戦略" },
                                { key: "partnership", ja: "提携・エコシステム戦略" },
                                { key: "riskManagement", ja: "リスク管理・信頼性戦略" },
                            ].map((strategy) => (
                                <button
                                    key={strategy.key}
                                    onClick={() => toggleStrategy(strategy.ja)}
                                    className={`px-4 py-3 rounded-lg border-2 transition-all ${selectedStrategies.includes(strategy.ja)
                                            ? "border-[#00B894] bg-[#00B894]/5 text-[#00B894]"
                                            : "border-gray-200 text-gray-700 hover:border-gray-300"
                                        }`}
                                >
                                    {t(strategy.key as keyof typeof import("../../i18n/translations").translations.ja)}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={nextStep}>{t("skip")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 2: Industry Selection */}
                {currentStep === 2 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-6">{t("selectIndustry")}</p>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                            {[
                                { id: "saas", titleKey: "saas", subtitleKey: "saasSubtitle" },
                                { id: "ecommerce", titleKey: "ecommerce", subtitleKey: "ecommerceSubtitle" },
                                { id: "finance", titleKey: "finance", subtitleKey: "financeSubtitle" },
                            ].map((industry) => (
                                <button
                                    key={industry.id}
                                    onClick={() => setSelectedIndustry(industry.id)}
                                    className={`p-4 rounded-lg border-2 text-left transition-all ${selectedIndustry === industry.id
                                            ? "border-[#00B894] bg-[#00B894]/5"
                                            : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <div className="font-bold text-gray-900 mb-1">
                                        {t(industry.titleKey as keyof typeof import("../../i18n/translations").translations.ja)}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {t(industry.subtitleKey as keyof typeof import("../../i18n/translations").translations.ja)}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {[
                                { id: "healthcare", titleKey: "healthcare", subtitleKey: "healthcareSubtitle" },
                                { id: "other", titleKey: "other", subtitleKey: "" },
                            ].map((industry) => (
                                <button
                                    key={industry.id}
                                    onClick={() => setSelectedIndustry(industry.id)}
                                    className={`p-4 rounded-lg border-2 text-left transition-all ${selectedIndustry === industry.id
                                            ? "border-[#00B894] bg-[#00B894]/5"
                                            : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <div className="font-bold text-gray-900 mb-1">
                                        {t(industry.titleKey as keyof typeof import("../../i18n/translations").translations.ja)}
                                    </div>
                                    {industry.subtitleKey && (
                                        <div className="text-sm text-gray-500">
                                            {t(industry.subtitleKey as keyof typeof import("../../i18n/translations").translations.ja)}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={nextStep}>{t("skip")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 3: Email Input */}
                {currentStep === 3 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-4">{t("enterWorkEmail")}</p>

                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("emailPlaceholder")}
                            className="mb-8"
                        />

                        <div className="mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 4: Name Input */}
                {currentStep === 4 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>

                        <p className="text-gray-600 mb-3">{t("enterName")}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <Input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder={t("lastNamePlaceholder")}
                            />
                            <Input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder={t("firstNamePlaceholder")}
                            />
                        </div>

                        <p className="text-gray-600 mb-3">{t("enterNameKana")}</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <Input
                                type="text"
                                value={lastNameKana}
                                onChange={(e) => setLastNameKana(e.target.value)}
                                placeholder={t("lastNameKanaPlaceholder")}
                            />
                            <Input
                                type="text"
                                value={firstNameKana}
                                onChange={(e) => setFirstNameKana(e.target.value)}
                                placeholder={t("firstNameKanaPlaceholder")}
                            />
                        </div>

                        <div className="mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 5: Phone Number Input */}
                {currentStep === 5 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-4">{t("enterPhone")}</p>

                        <Input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder={t("phonePlaceholder")}
                            className="mb-8"
                        />

                        <div className="flex items-center gap-4 mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={nextStep}>{t("skip")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 6: Company Name Input */}
                {currentStep === 6 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-4">{t("enterCompanyName")}</p>

                        <Input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder={t("companyNamePlaceholder")}
                            className="mb-8"
                        />

                        <div className="flex items-center gap-4 mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={nextStep}>{t("skip")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 7: Department/Job Title Input */}
                {currentStep === 7 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-4">{t("enterDepartment")}</p>

                        <Input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder={t("departmentPlaceholder")}
                            className="mb-8"
                        />

                        <div className="flex items-center gap-4 mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={nextStep}>{t("skip")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 8: Employee Count Selection */}
                {currentStep === 8 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-4">{t("selectEmployeeCount")}</p>

                        <div className="mb-8">
                            <Select
                                value={employeeCount}
                                onChange={(e) => setEmployeeCount(e.target.value)}
                            >
                                <option value="" disabled>
                                    {t("selectPlaceholder")}
                                </option>
                                {employeeCountOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Select>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <Button onClick={nextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={nextStep}>{t("skip")}</Button>
                        </div>

                        <p className="text-sm text-gray-500">
                            {t("privacyNotice")}
                            <a href="#" className="underline hover:text-gray-700">
                                {t("privacyNoticeLink")}
                            </a>
                            {t("privacyNoticeSuffix")}
                        </p>
                    </>
                )}

                {/* Step 9: Country Selection and Consent */}
                {currentStep === 9 && (
                    <>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            {t("freeDemo")}
                        </h2>
                        <p className="text-gray-600 mb-4">{t("selectCountry")}</p>

                        <div className="mb-6">
                            <Select
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="" disabled>
                                    {t("selectPlaceholder")}
                                </option>
                                {[
                                    { key: "japan", value: "日本" },
                                    { key: "usa", value: "アメリカ" },
                                    { key: "china", value: "中国" },
                                    { key: "korea", value: "韓国" },
                                    { key: "taiwan", value: "台湾" },
                                    { key: "singapore", value: "シンガポール" },
                                    { key: "other", value: "その他" },
                                ].map((option) => (
                                    <option key={option.key} value={option.value}>
                                        {t(option.key as keyof typeof import("../../i18n/translations").translations.ja)}
                                    </option>
                                ))}
                            </Select>
                        </div>

                        <label className="flex items-start gap-3 mb-8 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={privacyConsent}
                                onChange={(e) => setPrivacyConsent(e.target.checked)}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#00B894] focus:ring-[#00B894]"
                            />
                            <span className="text-sm text-gray-600">
                                findn
                                <a href="#" className="text-[#00B894] underline">
                                    {t("privacyNoticeLink")}
                                </a>
                                {t("privacyConsentText")}
                                <span className="text-[#00B894]">{t("required")}</span>
                            </span>
                        </label>

                        <button
                            onClick={closeDemoModal}
                            disabled={!privacyConsent}
                            className={`px-8 py-3 rounded-lg font-medium transition-colors ${privacyConsent
                                    ? "bg-[#00B894] text-white hover:bg-[#00A384]"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {t("toProductDemo")}
                        </button>
                    </>
                )}
            </div>
        </Modal>
    );
}
