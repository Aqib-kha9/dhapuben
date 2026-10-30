'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/lib/data';

export default function CategoryCollectionPage() {
  const params = useParams();
  const categoryRaw = (params.slug as string) || '';
  const collectionId = (params.collectionId as string) || '';

  const cleanCategoryName = decodeURIComponent(categoryRaw).replace(/-/g, ' ');

  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low' | 'discount'>('featured');

  // Filter products by category or collectionId
  const collectionProducts = useMemo(() => {
    const searchTarget = cleanCategoryName.toLowerCase();
    
    // Direct or fuzzy matching
    let list = products.filter((p) => {
      // Check in categories array
      const matchesCategory = p.categories.some((c) =>
        c.toLowerCase().includes(searchTarget) || searchTarget.includes(c.toLowerCase())
      );
      // Check in title or slug
      const matchesText =
        p.title.toLowerCase().includes(searchTarget) ||
        p.slug.toLowerCase().includes(searchTarget);

      // Price filters
      if (searchTarget.includes('under 299')) return p.selling_price < 299;
      if (searchTarget.includes('under 499')) return p.selling_price < 499;
      if (searchTarget.includes('under 999')) return p.selling_price < 999;
      if (searchTarget.includes('deals')) return p.discount >= 40 || p.categories.includes('Amazing Deals');
      if (searchTarget.includes('spotlight')) return p.categories.includes('IN THE SPOTLIGHT');
      if (searchTarget.includes('best seller')) return p.categories.includes('Best Sellers');

      return matchesCategory || matchesText;
    });

    if (list.length === 0) {
      // Fallback to products matching related health/juice/skincare
      list = products.slice(0, 12);
    }

    if (sortBy === 'low-high') {
      list.sort((a, b) => a.selling_price - b.selling_price);
    } else if (sortBy === 'high-low') {
      list.sort((a, b) => b.selling_price - a.selling_price);
    } else if (sortBy === 'discount') {
      list.sort((a, b) => b.discount - a.discount);
    }

    return list;
  }, [cleanCategoryName, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-400">Collections</span>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold uppercase">{cleanCategoryName}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight uppercase">
            {cleanCategoryName}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Discover {collectionProducts.length} curated products in this collection
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center space-x-3">
          <SlidersHorizontal className="w-4 h-4 text-gray-500 hidden sm:block" />
          <span className="text-xs font-semibold text-gray-600 hidden sm:inline">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-700 focus:outline-none focus:border-[#ff6f00]"
          >
            <option value="featured">Featured / Recommended</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {collectionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

