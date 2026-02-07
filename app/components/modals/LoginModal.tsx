"use client";

import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useTranslation } from "../../i18n/useTranslation";
import { useAppStore } from "../../store/useAppStore";

export default function LoginModal() {
    const { t } = useTranslation();
    const isLoginModalOpen = useAppStore((state) => state.isLoginModalOpen);
    const loginEmail = useAppStore((state) => state.loginEmail);
    const loginPassword = useAppStore((state) => state.loginPassword);
    const rememberMe = useAppStore((state) => state.rememberMe);
    const closeLoginModal = useAppStore((state) => state.closeLoginModal);
    const setLoginEmail = useAppStore((state) => state.setLoginEmail);
    const setLoginPassword = useAppStore((state) => state.setLoginPassword);
    const setRememberMe = useAppStore((state) => state.setRememberMe);

    return (
        <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
            <div className="p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {t("loginTitle")}
                </h2>

                {/* Email Input */}
                <Input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder={t("emailPlaceholder")}
                    className="mb-4"
                />

                {/* Password Input */}
                <Input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder={t("passwordPlaceholder")}
                    className="mb-6"
                />

                {/* Remember Me Checkbox */}
                <label className="flex items-center gap-3 mb-8 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-[#00B894] focus:ring-[#00B894]"
                    />
                    <span className="text-gray-700">{t("keepLoggedIn")}</span>
                </label>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                    <Button onClick={closeLoginModal}>
                        {t("login")}
                    </Button>
                    <a
                        href="#"
                        className="text-[#00B894] hover:text-[#00A384] font-medium transition-colors"
                    >
                        {t("forgotPassword")}
                    </a>
                </div>
            </div>
        </Modal>
    );
}
