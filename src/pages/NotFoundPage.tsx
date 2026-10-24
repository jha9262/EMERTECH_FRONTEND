import React from 'react';
import { ArrowLeft, Home, Package, Mail } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-600 font-mono font-bold text-2xl flex items-center justify-center mx-auto">
          404
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            The technical document or corporate page you are seeking does not exist or has been relocated within the Emertech catalogue.
          </p>
        </div>

        <div className="pt-2 flex flex-col space-y-2.5">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/hardware/')}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
          >
            <Package className="w-4 h-4 mr-2 text-slate-500" />
            <span>Browse Hardware</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/contact/')}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 hover:bg-orange-100 rounded transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Contact Engineering Desk</span>
          </button>
        </div>
      </div>
    </div>
  );
}
