'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { banners } from '@/lib/data';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full my-0 sm:my-4 group">
      {/* Slider Banner Box (Full edge-to-edge on mobile) */}
      <div className="relative w-full aspect-[1/1.08] sm:aspect-[21/9] bg-gray-100 overflow-hidden sm:rounded-2xl">
        {banners.map((banner, idx) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Link href={banner.link} className="block relative w-full h-full">
              <Image
                src={banner.src_url}
                alt={banner.title || 'Dhapuben Wellness Banner'}
                fill
                priority={idx === 0}
                className="object-cover sm:object-contain object-center"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </Link>
          </div>
        ))}

        {/* Desktop Navigation Arrows (hidden on mobile) */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-800 items-center justify-center shadow-md transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-800 items-center justify-center shadow-md transition opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 3 Dots Indicator Directly Below Banner (Exact match to screenshot) */}
      <div className="flex items-center justify-center space-x-1.5 pt-2 pb-1.5">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full ${
              idx === current
                ? 'w-2 h-2 bg-[#ff6f00]'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
