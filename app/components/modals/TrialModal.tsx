"use client";

import { useEffect, useRef } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
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

export default function TrialModal() {
    const { t } = useTranslation();
    const confirmationTimerRef = useRef<NodeJS.Timeout | null>(null);

    // State
    const isTrialModalOpen = useAppStore((state) => state.isTrialModalOpen);
    const trialEmail = useAppStore((state) => state.trialEmail);
    const marketingConsent = useAppStore((state) => state.marketingConsent);
    const trialStep = useAppStore((state) => state.trialStep);
    const trialPassword = useAppStore((state) => state.trialPassword);
    const trialPasswordConfirm = useAppStore((state) => state.trialPasswordConfirm);
    const showPassword = useAppStore((state) => state.showPassword);
    const showPasswordConfirm = useAppStore((state) => state.showPasswordConfirm);
    const trialLastName = useAppStore((state) => state.trialLastName);
    const trialFirstName = useAppStore((state) => state.trialFirstName);
    const trialLastNameKana = useAppStore((state) => state.trialLastNameKana);
    const trialFirstNameKana = useAppStore((state) => state.trialFirstNameKana);
    const trialPhone = useAppStore((state) => state.trialPhone);
    const trialCompanyName = useAppStore((state) => state.trialCompanyName);
    const trialDepartment = useAppStore((state) => state.trialDepartment);
    const trialEmployeeCount = useAppStore((state) => state.trialEmployeeCount);
    const trialCountry = useAppStore((state) => state.trialCountry);
    const trialPrivacyConsent = useAppStore((state) => state.trialPrivacyConsent);

    // Actions
    const closeTrialModal = useAppStore((state) => state.closeTrialModal);
    const setTrialStep = useAppStore((state) => state.setTrialStep);
    const setTrialEmail = useAppStore((state) => state.setTrialEmail);
    const setMarketingConsent = useAppStore((state) => state.setMarketingConsent);
    const setTrialPassword = useAppStore((state) => state.setTrialPassword);
    const setTrialPasswordConfirm = useAppStore((state) => state.setTrialPasswordConfirm);
    const setShowPassword = useAppStore((state) => state.setShowPassword);
    const setShowPasswordConfirm = useAppStore((state) => state.setShowPasswordConfirm);
    const setTrialLastName = useAppStore((state) => state.setTrialLastName);
    const setTrialFirstName = useAppStore((state) => state.setTrialFirstName);
    const setTrialLastNameKana = useAppStore((state) => state.setTrialLastNameKana);
    const setTrialFirstNameKana = useAppStore((state) => state.setTrialFirstNameKana);
    const setTrialPhone = useAppStore((state) => state.setTrialPhone);
    const setTrialCompanyName = useAppStore((state) => state.setTrialCompanyName);
    const setTrialDepartment = useAppStore((state) => state.setTrialDepartment);
    const setTrialEmployeeCount = useAppStore((state) => state.setTrialEmployeeCount);
    const setTrialCountry = useAppStore((state) => state.setTrialCountry);
    const setTrialPrivacyConsent = useAppStore((state) => state.setTrialPrivacyConsent);
    const handleTrialSubmit = useAppStore((state) => state.handleTrialSubmit);
    const handleResendEmail = useAppStore((state) => state.handleResendEmail);
    const handleTrialNextStep = useAppStore((state) => state.handleTrialNextStep);

    // Auto-advance from confirmation step to password step after 2 seconds
    useEffect(() => {
        if (trialStep === "confirmation") {
            confirmationTimerRef.current = setTimeout(() => {
                setTrialStep("password");
            }, 2000);
        }

        return () => {
            if (confirmationTimerRef.current) {
                clearTimeout(confirmationTimerRef.current);
                confirmationTimerRef.current = null;
            }
        };
    }, [trialStep, setTrialStep]);

    const ProgressIndicatorSmall = ({ totalSteps, currentStep }: { totalSteps: number; currentStep: number }) => (
        <div className="flex items-center gap-2 mb-8">
            {Array.from({ length: totalSteps }, (_, i) => (
                <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${i < currentStep ? "w-3 bg-[#00B894]" : "w-6 bg-gray-200"
                        }`}
                />
            ))}
        </div>
    );

    return (
        <Modal isOpen={isTrialModalOpen} onClose={closeTrialModal}>
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("freeTrial")}</h2>

                {trialStep === "email" && (
                    <>
                        <p className="text-gray-700 mb-4">{t("enterWorkEmail")}</p>

                        <Input
                            type="email"
                            value={trialEmail}
                            onChange={(e) => setTrialEmail(e.target.value)}
                            placeholder={t("emailPlaceholder")}
                            className="mb-6"
                        />

                        <label className="flex items-start gap-3 mb-8 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={marketingConsent}
                                onChange={(e) => setMarketingConsent(e.target.checked)}
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#00B894] focus:ring-[#00B894]"
                            />
                            <span className="text-sm text-gray-600">
                                {t("marketingConsentText")}
                                <br />
                                {t("marketingConsentSuffix")}
                                <a href="#" className="underline hover:text-gray-900">
                                    {t("marketingConsentLink")}
                                </a>
                                {t("marketingConsentEnd")}
                            </span>
                        </label>

                        <Button onClick={handleTrialSubmit}>{t("emailVerify")}</Button>
                    </>
                )}

                {trialStep === "confirmation" && (
                    <>
                        <p className="text-gray-700 mb-1">{t("confirmationSent")}</p>
                        <p className="text-gray-700 mb-8">{t("checkInbox")}</p>

                        <Button variant="secondary" onClick={handleResendEmail}>
                            {t("resendToDifferentEmail")}
                        </Button>
                    </>
                )}

                {trialStep === "password" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={0} />

                        <p className="text-gray-700 mb-4">{t("setPassword")}</p>

                        <div className="relative mb-4">
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={trialPassword}
                                onChange={(e) => setTrialPassword(e.target.value)}
                                placeholder={t("passwordPlaceholder")}
                                className="pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="relative mb-8">
                            <Input
                                type={showPasswordConfirm ? "text" : "password"}
                                value={trialPasswordConfirm}
                                onChange={(e) => setTrialPasswordConfirm(e.target.value)}
                                placeholder={t("passwordConfirmPlaceholder")}
                                className="pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600"
                            >
                                {showPasswordConfirm ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <Button onClick={handleTrialNextStep}>{t("nextStep")}</Button>
                    </>
                )}

                {trialStep === "name" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={2} />

                        <p className="text-gray-700 mb-4">{t("enterName")}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <Input
                                type="text"
                                value={trialLastName}
                                onChange={(e) => setTrialLastName(e.target.value)}
                                placeholder={t("lastNamePlaceholder")}
                            />
                            <Input
                                type="text"
                                value={trialFirstName}
                                onChange={(e) => setTrialFirstName(e.target.value)}
                                placeholder={t("firstNamePlaceholder")}
                            />
                        </div>

                        <p className="text-gray-700 mb-4">{t("enterNameKana")}</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <Input
                                type="text"
                                value={trialLastNameKana}
                                onChange={(e) => setTrialLastNameKana(e.target.value)}
                                placeholder={t("lastNameKanaPlaceholder")}
                            />
                            <Input
                                type="text"
                                value={trialFirstNameKana}
                                onChange={(e) => setTrialFirstNameKana(e.target.value)}
                                placeholder={t("firstNameKanaPlaceholder")}
                            />
                        </div>

                        <Button onClick={handleTrialNextStep}>{t("nextStep")}</Button>
                    </>
                )}

                {trialStep === "phone" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={3} />

                        <p className="text-gray-700 mb-4">{t("enterPhone")}</p>

                        <Input
                            type="tel"
                            value={trialPhone}
                            onChange={(e) => setTrialPhone(e.target.value)}
                            placeholder={t("phonePlaceholder")}
                            className="mb-8"
                        />

                        <div className="flex items-center gap-4">
                            <Button onClick={handleTrialNextStep}>{t("nextStep")}</Button>
                            <Button variant="ghost" onClick={handleTrialNextStep}>{t("skip")}</Button>
                        </div>
                    </>
                )}

                {trialStep === "company" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={4} />

                        <p className="text-gray-700 mb-4">{t("enterCompanyName")}</p>

                        <Input
                            type="text"
                            value={trialCompanyName}
                            onChange={(e) => setTrialCompanyName(e.target.value)}
                            placeholder={t("companyNamePlaceholder")}
                            className="mb-8"
                        />

                        <Button onClick={handleTrialNextStep}>{t("nextStep")}</Button>
                    </>
                )}

                {trialStep === "department" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={5} />

                        <p className="text-gray-700 mb-4">{t("enterDepartment")}</p>

                        <Input
                            type="text"
                            value={trialDepartment}
                            onChange={(e) => setTrialDepartment(e.target.value)}
                            placeholder={t("departmentPlaceholder")}
                            className="mb-8"
                        />

                        <Button onClick={handleTrialNextStep}>{t("nextStep")}</Button>
                    </>
                )}

                {trialStep === "employeeCount" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={6} />

                        <p className="text-gray-700 mb-4">{t("selectEmployeeCount")}</p>

                        <div className="mb-8">
                            <Select
                                value={trialEmployeeCount}
                                onChange={(e) => setTrialEmployeeCount(e.target.value)}
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

                        <Button onClick={handleTrialNextStep}>{t("nextStep")}</Button>
                    </>
                )}

                {trialStep === "country" && (
                    <>
                        <ProgressIndicatorSmall totalSteps={6} currentStep={6} />

                        <p className="text-gray-700 mb-4">{t("selectCountry")}</p>

                        <div className="mb-6">
                            <Select
                                value={trialCountry}
                                onChange={(e) => setTrialCountry(e.target.value)}
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
                                checked={trialPrivacyConsent}
                                onChange={(e) => setTrialPrivacyConsent(e.target.checked)}
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
                            onClick={handleTrialNextStep}
                            disabled={!trialPrivacyConsent}
                            className={`px-8 py-3 rounded-lg font-medium transition-colors ${trialPrivacyConsent
                                    ? "bg-[#00B894] text-white hover:bg-[#00A384]"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {t("toFreeTrial")}
                        </button>
                    </>
                )}
            </div>
        </Modal>
    );
}
