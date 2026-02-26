"use client";

import React, { useCallback, useRef, useState, KeyboardEvent, ClipboardEvent } from "react";
import { cn } from "@/lib/utils";

const DIGITS = 6;

export interface OTPInputProps {
    length?: number;
    value: string;
    onChange: (value: string) => void;
    onComplete?: (value: string) => void;
    disabled?: boolean;
    error?: boolean;
    className?: string;
    inputClassName?: string;
}

export function OTPInput({
    length = DIGITS,
    value,
    onChange,
    onComplete,
    disabled = false,
    error = false,
    className,
    inputClassName,
}: OTPInputProps) {
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const digits = value.split("").concat(Array(Math.max(0, length - value.length)).fill(""));

    const focusInput = useCallback(
        (index: number) => {
            if (index < 0 || index >= length) return;
            inputRefs.current[index]?.focus();
            setFocusedIndex(index);
        },
        [length]
    );

    const setDigit = useCallback(
        (index: number, digit: string) => {
            if (!/^\d*$/.test(digit)) return;
            const next = value.split("");
            next[index] = digit.slice(-1);
            const newValue = next.join("").slice(0, length);
            onChange(newValue);
            if (digit && index < length - 1) focusInput(index + 1);
            if (newValue.length === length) onComplete?.(newValue);
        },
        [value, length, onChange, onComplete, focusInput]
    );

    const handleKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>, index: number) => {
            if (e.key === "Backspace" && !value[index] && index > 0) {
                focusInput(index - 1);
                setDigit(index - 1, "");
            } else if (e.key === "ArrowLeft") {
                focusInput(index - 1);
            } else if (e.key === "ArrowRight") {
                focusInput(index + 1);
            }
        },
        [value, focusInput, setDigit]
    );

    const handlePaste = useCallback(
        (e: ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
            if (!pasted) return;
            onChange(pasted);
            if (pasted.length === length) {
                onComplete?.(pasted);
                inputRefs.current[length - 1]?.blur();
            } else {
                focusInput(pasted.length);
            }
        },
        [length, onChange, onComplete, focusInput]
    );

    return (
        <div className={cn("flex justify-center gap-2 sm:gap-3", className)} role="group" aria-label="Code de vérification">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    value={digits[index] ?? ""}
                    onChange={(e) => setDigit(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    disabled={disabled}
                    className={cn(
                        "w-11 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-bold rounded-btn border bg-slate-50/80 text-slate-900 transition-all outline-none",
                        "focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:bg-white",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        error && "border-red-400 focus:ring-red-400 focus:border-red-400",
                        focusedIndex === index && "ring-2 ring-primary-500 border-primary-500 bg-white",
                        inputClassName
                    )}
                    aria-label={`Chiffre ${index + 1} sur ${length}`}
                />
            ))}
        </div>
    );
}
