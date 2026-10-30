'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/data';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  products: Product[];
}

export default function ProductSection({
  title,
  subtitle,
  viewAllLink,
  products,
}: ProductSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <section className="my-1 sm:my-10">
      {/* Mobile Header: Centered Heading + Centered Underlined VIEW ALL (Exact match to screenshot) */}
      <div className="sm:hidden text-center mb-2">
        <h2 className="text-[13px] sm:text-lg font-bold uppercase tracking-wider text-[#1e293b] font-quicksand">
          {title}
        </h2>
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-900 underline underline-offset-2 mt-0.5 inline-block hover:text-[#ff6f00] transition active:scale-95"
          >
            VIEW ALL
          </Link>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden sm:flex items-end justify-between mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-xs sm:text-sm font-bold text-[#ff6f00] hover:text-[#e66400] flex items-center space-x-1 group transition mr-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </Link>
          )}

          <div className="flex items-center space-x-1">
            <button
              onClick={() => scroll('left')}
              className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-600 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1.5 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-600 transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div
        ref={scrollRef}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 px-3 sm:px-0"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
