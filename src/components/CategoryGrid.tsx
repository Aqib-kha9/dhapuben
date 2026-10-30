'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/data';

export default function CategoryGrid() {
  return (
    <section className="my-5 sm:my-10">
      {/* Section Title (Centered uppercase matching screenshot) */}
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-base sm:text-xl font-bold uppercase tracking-wider text-[#1e293b] font-quicksand">
          SHOP BY CATEGORY
        </h2>
      </div>

      {/* Categories in a Single Row (3 columns on both mobile & desktop matching screenshot) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-md sm:max-w-xl mx-auto px-1 sm:px-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.link}
            className="group flex flex-col items-center text-center transition active:scale-95"
          >
            {/* Circular Category Badge with Orange Border (Exact match to screenshot) */}
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-[#ff9e40] bg-white overflow-hidden p-0.5 shadow-xs group-hover:scale-105 group-hover:border-[#ff6f00] transition-all duration-300">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src={cat.src_url}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 80px, 120px"
                />
              </div>
            </div>

            {/* Title (Multi-line centered uppercase matching screenshot) */}
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-tight text-gray-700 group-hover:text-[#ff6f00] transition mt-2 leading-tight max-w-[85px] sm:max-w-[110px] text-center">
              {cat.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
