import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-4 bg-slate-50">
            <Loader2 className="w-10 h-10 text-primary-600 animate-spin" aria-hidden />
            <span className="text-slate-500 text-sm font-medium">Chargement...</span>
        </div>
    );
}
