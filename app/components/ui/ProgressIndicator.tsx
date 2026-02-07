"use client";

interface ProgressIndicatorProps {
    totalSteps: number;
    currentStep: number;
}

export default function ProgressIndicator({ totalSteps, currentStep }: ProgressIndicatorProps) {
    return (
        <div className="flex items-center gap-2 mb-8">
            {Array.from({ length: totalSteps }, (_, i) => (
                <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${i < currentStep
                            ? "w-3 bg-[#00B894]"
                            : i === currentStep
                                ? "w-6 bg-[#00B894]/30"
                                : "w-6 bg-gray-200"
                        }`}
                />
            ))}
        </div>
    );
}
