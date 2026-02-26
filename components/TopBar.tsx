"use client";

import Link from "next/link";
import { User } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-slate-800 text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-center py-2.5">
                    <Link
                        href="/login"
                        className="flex items-center gap-2 hover:text-primary-300 transition-colors"
                    >
                        <User className="w-4 h-4 shrink-0" />
                        Espace client
                    </Link>
                </div>
            </div>
        </div>
    );
}
