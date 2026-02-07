import { create } from "zustand";
import { Language } from "../i18n/translations";

type TrialStep =
  | "email"
  | "confirmation"
  | "password"
  | "name"
  | "phone"
  | "company"
  | "department"
  | "employeeCount"
  | "country";

interface DemoModalState {
  isModalOpen: boolean;
  currentStep: number;
  selectedStrategies: string[];
  selectedIndustry: string | null;
  email: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phone: string;
  companyName: string;
  department: string;
  employeeCount: string;
  country: string;
  privacyConsent: boolean;
}

interface TrialModalState {
  isTrialModalOpen: boolean;
  trialEmail: string;
  marketingConsent: boolean;
  trialStep: TrialStep;
  trialPassword: string;
  trialPasswordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  trialLastName: string;
  trialFirstName: string;
  trialLastNameKana: string;
  trialFirstNameKana: string;
  trialPhone: string;
  trialCompanyName: string;
  trialDepartment: string;
  trialEmployeeCount: string;
  trialCountry: string;
  trialPrivacyConsent: boolean;
}

interface LoginModalState {
  isLoginModalOpen: boolean;
  loginEmail: string;
  loginPassword: string;
  rememberMe: boolean;
}

interface LanguageState {
  language: Language;
}

interface AppState extends DemoModalState, TrialModalState, LoginModalState, LanguageState {
  // Language Actions
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  // Demo Modal Actions
  openDemoModal: () => void;
  closeDemoModal: () => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  toggleStrategy: (strategy: string) => void;
  setSelectedIndustry: (industry: string | null) => void;
  setEmail: (email: string) => void;
  setLastName: (lastName: string) => void;
  setFirstName: (firstName: string) => void;
  setLastNameKana: (lastNameKana: string) => void;
  setFirstNameKana: (firstNameKana: string) => void;
  setPhone: (phone: string) => void;
  setCompanyName: (companyName: string) => void;
  setDepartment: (department: string) => void;
  setEmployeeCount: (employeeCount: string) => void;
  setCountry: (country: string) => void;
  setPrivacyConsent: (consent: boolean) => void;

  // Trial Modal Actions
  openTrialModal: () => void;
  closeTrialModal: () => void;
  setTrialStep: (step: TrialStep) => void;
  setTrialEmail: (email: string) => void;
  setMarketingConsent: (consent: boolean) => void;
  setTrialPassword: (password: string) => void;
  setTrialPasswordConfirm: (password: string) => void;
  setShowPassword: (show: boolean) => void;
  setShowPasswordConfirm: (show: boolean) => void;
  setTrialLastName: (lastName: string) => void;
  setTrialFirstName: (firstName: string) => void;
  setTrialLastNameKana: (lastNameKana: string) => void;
  setTrialFirstNameKana: (firstNameKana: string) => void;
  setTrialPhone: (phone: string) => void;
  setTrialCompanyName: (companyName: string) => void;
  setTrialDepartment: (department: string) => void;
  setTrialEmployeeCount: (employeeCount: string) => void;
  setTrialCountry: (country: string) => void;
  setTrialPrivacyConsent: (consent: boolean) => void;
  handleTrialSubmit: () => void;
  handleResendEmail: () => void;
  handleTrialNextStep: () => void;

  // Login Modal Actions
  openLoginModal: () => void;
  closeLoginModal: () => void;
  setLoginEmail: (email: string) => void;
  setLoginPassword: (password: string) => void;
  setRememberMe: (remember: boolean) => void;
}

const totalSteps = 9;

export const useAppStore = create<AppState>((set, get) => ({
  // Demo Modal Initial State
  isModalOpen: false,
  currentStep: 1,
  selectedStrategies: [],
  selectedIndustry: null,
  email: "",
  lastName: "",
  firstName: "",
  lastNameKana: "",
  firstNameKana: "",
  phone: "",
  companyName: "",
  department: "",
  employeeCount: "",
  country: "",
  privacyConsent: false,

  // Trial Modal Initial State
  isTrialModalOpen: false,
  trialEmail: "",
  marketingConsent: false,
  trialStep: "email",
  trialPassword: "",
  trialPasswordConfirm: "",
  showPassword: false,
  showPasswordConfirm: false,
  trialLastName: "",
  trialFirstName: "",
  trialLastNameKana: "",
  trialFirstNameKana: "",
  trialPhone: "",
  trialCompanyName: "",
  trialDepartment: "",
  trialEmployeeCount: "",
  trialCountry: "",
  trialPrivacyConsent: false,

  // Login Modal Initial State
  isLoginModalOpen: false,
  loginEmail: "",
  loginPassword: "",
  rememberMe: false,

  // Language State
  language: "ja" as Language,

  // Language Actions
  setLanguage: (language) => set({ language }),
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === "ja" ? "en" : "ja",
    })),

  // Demo Modal Actions
  openDemoModal: () => set({ isModalOpen: true }),
  closeDemoModal: () =>
    set({
      isModalOpen: false,
      currentStep: 1,
      selectedStrategies: [],
      selectedIndustry: null,
      email: "",
      lastName: "",
      firstName: "",
      lastNameKana: "",
      firstNameKana: "",
      phone: "",
      companyName: "",
      department: "",
      employeeCount: "",
      country: "",
      privacyConsent: false,
    }),
  setCurrentStep: (step) => set({ currentStep: step }),
  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < totalSteps) {
      set({ currentStep: currentStep + 1 });
    }
  },
  toggleStrategy: (strategy) =>
    set((state) => ({
      selectedStrategies: state.selectedStrategies.includes(strategy)
        ? state.selectedStrategies.filter((s) => s !== strategy)
        : [...state.selectedStrategies, strategy],
    })),
  setSelectedIndustry: (industry) => set({ selectedIndustry: industry }),
  setEmail: (email) => set({ email }),
  setLastName: (lastName) => set({ lastName }),
  setFirstName: (firstName) => set({ firstName }),
  setLastNameKana: (lastNameKana) => set({ lastNameKana }),
  setFirstNameKana: (firstNameKana) => set({ firstNameKana }),
  setPhone: (phone) => set({ phone }),
  setCompanyName: (companyName) => set({ companyName }),
  setDepartment: (department) => set({ department }),
  setEmployeeCount: (employeeCount) => set({ employeeCount }),
  setCountry: (country) => set({ country }),
  setPrivacyConsent: (consent) => set({ privacyConsent: consent }),

  // Trial Modal Actions
  openTrialModal: () => set({ isTrialModalOpen: true }),
  closeTrialModal: () =>
    set({
      isTrialModalOpen: false,
      trialEmail: "",
      marketingConsent: false,
      trialStep: "email",
      trialPassword: "",
      trialPasswordConfirm: "",
      showPassword: false,
      showPasswordConfirm: false,
      trialLastName: "",
      trialFirstName: "",
      trialLastNameKana: "",
      trialFirstNameKana: "",
      trialPhone: "",
      trialCompanyName: "",
      trialDepartment: "",
      trialEmployeeCount: "",
      trialCountry: "",
      trialPrivacyConsent: false,
    }),
  setTrialStep: (step) => set({ trialStep: step }),
  setTrialEmail: (email) => set({ trialEmail: email }),
  setMarketingConsent: (consent) => set({ marketingConsent: consent }),
  setTrialPassword: (password) => set({ trialPassword: password }),
  setTrialPasswordConfirm: (password) => set({ trialPasswordConfirm: password }),
  setShowPassword: (show) => set({ showPassword: show }),
  setShowPasswordConfirm: (show) => set({ showPasswordConfirm: show }),
  setTrialLastName: (lastName) => set({ trialLastName: lastName }),
  setTrialFirstName: (firstName) => set({ trialFirstName: firstName }),
  setTrialLastNameKana: (lastNameKana) => set({ trialLastNameKana: lastNameKana }),
  setTrialFirstNameKana: (firstNameKana) => set({ trialFirstNameKana: firstNameKana }),
  setTrialPhone: (phone) => set({ trialPhone: phone }),
  setTrialCompanyName: (companyName) => set({ trialCompanyName: companyName }),
  setTrialDepartment: (department) => set({ trialDepartment: department }),
  setTrialEmployeeCount: (employeeCount) => set({ trialEmployeeCount: employeeCount }),
  setTrialCountry: (country) => set({ trialCountry: country }),
  setTrialPrivacyConsent: (consent) => set({ trialPrivacyConsent: consent }),
  handleTrialSubmit: () => set({ trialStep: "confirmation" }),
  handleResendEmail: () =>
    set({
      trialStep: "email",
      trialEmail: "",
      marketingConsent: false,
    }),
  handleTrialNextStep: () => {
    const { trialStep, closeTrialModal } = get();
    if (trialStep === "password") {
      set({ trialStep: "name" });
    } else if (trialStep === "name") {
      set({ trialStep: "phone" });
    } else if (trialStep === "phone") {
      set({ trialStep: "company" });
    } else if (trialStep === "company") {
      set({ trialStep: "department" });
    } else if (trialStep === "department") {
      set({ trialStep: "employeeCount" });
    } else if (trialStep === "employeeCount") {
      set({ trialStep: "country" });
    } else if (trialStep === "country") {
      closeTrialModal();
    }
  },

  // Login Modal Actions
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () =>
    set({
      isLoginModalOpen: false,
      loginEmail: "",
      loginPassword: "",
      rememberMe: false,
    }),
  setLoginEmail: (email) => set({ loginEmail: email }),
  setLoginPassword: (password) => set({ loginPassword: password }),
  setRememberMe: (remember) => set({ rememberMe: remember }),
}));
