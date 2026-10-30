'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { announcements } from '@/lib/data';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with 10% off... as in original site

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-[#ff6f00] text-white text-[11px] sm:text-xs font-semibold select-none relative overflow-hidden py-1.5 px-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-0.5 text-white/80 hover:text-white transition shrink-0"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 text-center truncate px-2 tracking-tight transition-all duration-300">
          <span>{announcements[currentIndex]}</span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="p-0.5 text-white/80 hover:text-white transition shrink-0"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
