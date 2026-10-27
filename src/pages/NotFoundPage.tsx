import React from 'react';
import { Home, Package, Mail } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-md w-full bg-[#0B101B] rounded-2xl border border-[#292D36] p-8 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/30 font-mono font-bold text-2xl flex items-center justify-center mx-auto">
          404
        </div>

        <div>
          <h1 className="text-2xl font-light text-[#F5F5F7] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs text-[#C2C6D0] mt-2 leading-relaxed">
            The technical document or corporate page you are seeking does not exist or has been relocated within the Emertech catalogue.
          </p>
        </div>

        <div className="pt-2 flex flex-col space-y-2.5">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#00E5E5] hover:bg-[#00E5E5]/90 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/hardware/')}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] bg-[#050505] hover:bg-[#151D2E] border border-[#41434A] rounded-lg transition-colors"
          >
            <Package className="w-4 h-4 mr-2 text-[#969DAA]" />
            <span>Browse Hardware</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/contact/')}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#00E5E5] bg-[#050505] hover:bg-[#00E5E5]/10 border border-[#00E5E5]/40 rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Contact Engineering Desk</span>
          </button>
        </div>
      </div>
    </div>
  );
}
