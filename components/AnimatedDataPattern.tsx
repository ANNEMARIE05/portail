"use client";

import React from "react";
import { motion } from "framer-motion";

type Variant = "grid" | "dots" | "waves" | "circuit" | "code-grid";

type Props = {
    variant?: Variant;
    className?: string;
    opacity?: number;
};

/** Grille de points style data, légèrement animée */
function DotsPattern({ opacity = 0.4 }: { opacity?: number }) {
    const rows = 12;
    const cols = 20;
    const dots = Array.from({ length: rows * cols }, (_, i) => ({
        id: i,
        row: Math.floor(i / cols),
        col: i % cols,
        delay: (i % 5) * 0.15 + (Math.floor(i / cols) % 3) * 0.1,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-0 flex flex-wrap content-start justify-start gap-[2px] p-4">
                {dots.map((d) => (
                    <motion.span
                        key={d.id}
                        className="rounded-full bg-primary-500/30"
                        style={{ width: 4, height: 4, opacity }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 2.5,
                            delay: d.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

/** Grille lignes style blueprint - apparition progressive */
function GridPattern({ opacity = 0.12 }: { opacity?: number }) {
    const cell = 36;
    const vLines = 18;
    const hLines = 14;
    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: vLines }, (_, i) => (
                    <motion.line
                        key={`v-${i}`}
                        x1={i * cell}
                        y1={0}
                        x2={i * cell}
                        y2="100%"
                        stroke="currentColor"
                        strokeWidth={0.5}
                        className="text-slate-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.03,
                            ease: "easeOut",
                        }}
                    />
                ))}
                {Array.from({ length: hLines }, (_, i) => (
                    <motion.line
                        key={`h-${i}`}
                        x1={0}
                        y1={i * cell}
                        x2="100%"
                        y2={i * cell}
                        stroke="currentColor"
                        strokeWidth={0.5}
                        className="text-slate-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.03 + 0.1,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

/** Lignes ondulées type signal / data flow */
function WavesPattern({ opacity = 0.15 }: { opacity?: number }) {
    const paths = [
        "M0 40 Q100 20 200 40 T400 40 T600 40 T800 40",
        "M0 80 Q150 60 300 80 T600 80 T800 80",
        "M0 120 Q80 100 200 120 T400 120 T600 120 T800 120",
    ];
    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                {paths.map((d, i) => (
                    <motion.path
                        key={i}
                        d={d}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1}
                        className="text-primary-500"
                        style={{ opacity }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity,
                        }}
                        transition={{
                            pathLength: { duration: 1.5, delay: i * 0.2, ease: "easeInOut" },
                            opacity: { duration: 0.5, delay: i * 0.2 },
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

/** Motif type circuit / nodes */
function CircuitPattern({ opacity = 0.2 }: { opacity?: number }) {
    const size = 32;
    const nodes = [
        [2, 2], [5, 2], [8, 2], [2, 5], [5, 5], [8, 5], [2, 8], [5, 8], [8, 8],
    ];
    return (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="circuit-nodes" width={size * 10} height={size * 10} patternUnits="userSpaceOnUse">
                        {nodes.map(([x, y], i) => (
                            <motion.circle
                                key={i}
                                cx={x * size}
                                cy={y * size}
                                r={3}
                                fill="currentColor"
                                className="text-primary-500"
                                style={{ opacity }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [0, 1.2, 1],
                                    opacity: [0, opacity * 1.2, opacity],
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.08,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                            />
                        ))}
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-nodes)" />
            </svg>
        </div>
    );
}

/** Grille type code / terminal */
function CodeGridPattern({ opacity = 0.08 }: { opacity?: number }) {
    return (
        <div
            className="absolute inset-0 opacity-90"
            aria-hidden
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgb(100 116 139 / ${opacity}) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(100 116 139 / ${opacity}) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
            }}
        >
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            />
        </div>
    );
}

export default function AnimatedDataPattern({
    variant = "grid",
    className = "",
    opacity,
}: Props) {
    const defaultOpacity = variant === "dots" ? 0.4 : variant === "code-grid" ? 0.08 : 0.12;
    const value = opacity ?? defaultOpacity;

    return (
        <div className={`pointer-events-none absolute inset-0 ${className}`}>
            {variant === "grid" && <GridPattern opacity={value} />}
            {variant === "dots" && <DotsPattern opacity={value} />}
            {variant === "waves" && <WavesPattern opacity={value} />}
            {variant === "circuit" && <CircuitPattern opacity={value} />}
            {variant === "code-grid" && <CodeGridPattern opacity={value} />}
        </div>
    );
}
