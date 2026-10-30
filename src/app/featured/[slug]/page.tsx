'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/lib/data';

export default function FeaturedCollectionPage() {
  const params = useParams();
  const slug = (params.slug as string) || 'all-products';

  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low' | 'discount'>('featured');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const pageTitle = useMemo(() => {
    switch (slug) {
      case 'new-arrivals':
        return 'New Arrivals';
      case 'best-sellers':
        return 'Best Sellers';
      case 'all-products':
      default:
        return 'All Products';
    }
  }, [slug]);

  const baseProducts = useMemo(() => {
    if (slug === 'new-arrivals') {
      return products.slice(0, 14);
    }
    if (slug === 'best-sellers') {
      return products.filter((p) => p.categories.includes('Best Sellers') || p.discount >= 35);
    }
    return products;
  }, [slug]);

  // Extract all categories available in this set
  const categoriesList = useMemo(() => {
    const set = new Set<string>();
    baseProducts.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ['all', ...Array.from(set)];
  }, [baseProducts]);

  const filteredAndSorted = useMemo(() => {
    let result = [...baseProducts];
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categories.includes(selectedCategory));
    }

    if (sortBy === 'low-high') {
      result.sort((a, b) => a.selling_price - b.selling_price);
    } else if (sortBy === 'high-low') {
      result.sort((a, b) => b.selling_price - a.selling_price);
    } else if (sortBy === 'discount') {
      result.sort((a, b) => b.discount - a.discount);
    }
    return result;
  }, [baseProducts, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">{pageTitle}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Showing {filteredAndSorted.length} premium wellness items
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
            <option value="featured">Featured / Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="py-4 flex items-center space-x-2 overflow-x-auto no-scrollbar">
        {categoriesList.slice(0, 8).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              selectedCategory === cat
                ? 'bg-[#ff6f00] text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            {cat === 'all' ? 'All Items' : cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-4">
          {filteredAndSorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 my-8">
          <p className="text-base font-bold text-gray-800">No products found in this category.</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="mt-3 px-4 py-2 bg-[#ff6f00] text-white text-xs font-bold rounded-lg"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
}

