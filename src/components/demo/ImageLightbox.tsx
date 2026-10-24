import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, CheckCircle2, Layers } from 'lucide-react';
import { DemoScreenshot } from '../../data/demo-screenshots';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: DemoScreenshot[];
  currentIndex: number;
  onNavigateIndex: (index: number) => void;
}

export function ImageLightbox({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onNavigateIndex,
}: ImageLightboxProps) {
  const currentItem = screenshots[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigateIndex((currentIndex - 1 + screenshots.length) % screenshots.length);
      } else if (e.key === 'ArrowRight') {
        onNavigateIndex((currentIndex + 1) % screenshots.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, screenshots.length, onClose, onNavigateIndex]);

  if (!isOpen || !currentItem) return null;

  const handlePrev = () => {
    onNavigateIndex((currentIndex - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = () => {
    onNavigateIndex((currentIndex + 1) % screenshots.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-md text-white overflow-hidden animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
    >
      {/* Top Action Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-800 shrink-0 bg-slate-950/80">
        <div className="flex items-center space-x-3 min-w-0 pr-4">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-widest font-semibold shrink-0">
            {currentItem.badge}
          </span>
          <div className="min-w-0">
            <h2 className="text-sm sm:text-base font-bold text-white truncate">
              {currentItem.title}
            </h2>
            <p className="text-xs text-slate-400 truncate hidden sm:block">
              {currentItem.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 shrink-0">
          <span className="font-mono text-xs text-slate-400 px-3 py-1 rounded bg-slate-900 border border-slate-800">
            {currentIndex + 1} / {screenshots.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
            aria-label="Close lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Preview Workspace */}
      <div className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-0">
        {/* Navigation Arrow: Previous */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-orange-600 text-white flex items-center justify-center border border-slate-700 transition-all shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
          aria-label="Previous screenshot (Left arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Screenshot Image Container */}
        <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
          <img
            src={currentItem.imagePath}
            alt={currentItem.title}
            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-slate-800 transition-all duration-200"
          />
        </div>

        {/* Navigation Arrow: Next */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-orange-600 text-white flex items-center justify-center border border-slate-700 transition-all shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
          aria-label="Next screenshot (Right arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Description Strip */}
      <div className="px-6 py-4 border-t border-slate-800/90 bg-[#050816] shrink-0">
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentItem.caption}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {currentItem.keyFeatures.map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center text-[11px] font-mono text-slate-400 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md"
              >
                <CheckCircle2 className="w-3 h-3 text-orange-500 mr-1.5 shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
