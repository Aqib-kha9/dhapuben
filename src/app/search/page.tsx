'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search as SearchIcon, X, SlidersHorizontal, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, Product } from '@/lib/data';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState<'relevance' | 'low-high' | 'high-low' | 'discount'>('relevance');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under300' | '300to600' | 'above600'>('all');

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
      );
    });

    if (priceFilter === 'under300') {
      list = list.filter((p) => p.selling_price < 300);
    } else if (priceFilter === '300to600') {
      list = list.filter((p) => p.selling_price >= 300 && p.selling_price <= 600);
    } else if (priceFilter === 'above600') {
      list = list.filter((p) => p.selling_price > 600);
    }

    if (sortBy === 'low-high') {
      list.sort((a, b) => a.selling_price - b.selling_price);
    } else if (sortBy === 'high-low') {
      list.sort((a, b) => b.selling_price - a.selling_price);
    } else if (sortBy === 'discount') {
      list.sort((a, b) => b.discount - a.discount);
    }

    return list;
  }, [query, priceFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">Search</span>
      </nav>

      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto my-4">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search healthy juices, peanut butter, date jaggery, creams..."
            className="w-full pl-11 pr-10 py-3.5 border-2 border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-[#ff6f00] bg-white shadow-sm transition"
            autoFocus
          />
          <SearchIcon className="absolute left-4 w-5 h-5 text-gray-400" />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 text-gray-400 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter and Count Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-gray-200 gap-4 mt-6">
        <div className="text-sm text-gray-600">
          Found <strong className="text-gray-900">{filteredProducts.length}</strong> items{' '}
          {query ? `for "${query}"` : 'in catalog'}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Price Range Pills */}
          <div className="flex items-center space-x-1.5 text-xs">
            <button
              onClick={() => setPriceFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition font-medium ${
                priceFilter === 'all'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              All Prices
            </button>
            <button
              onClick={() => setPriceFilter('under300')}
              className={`px-3 py-1.5 rounded-lg border transition font-medium ${
                priceFilter === 'under300'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              Under ₹300
            </button>
            <button
              onClick={() => setPriceFilter('300to600')}
              className={`px-3 py-1.5 rounded-lg border transition font-medium ${
                priceFilter === '300to600'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              ₹300 - ₹600
            </button>
            <button
              onClick={() => setPriceFilter('above600')}
              className={`px-3 py-1.5 rounded-lg border transition font-medium ${
                priceFilter === 'above600'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              Above ₹600
            </button>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-700 focus:outline-none focus:border-[#ff6f00]"
          >
            <option value="relevance">Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="discount">Highest Discount</option>
          </select>
        </div>
      </div>

      {/* Grid Results */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 my-8 space-y-3">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mx-auto">
            <SearchIcon className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">No matching products found</h2>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            Try checking your spelling or search for popular wellness items like &ldquo;Buckthorn&rdquo;, &ldquo;Peanut Butter&rdquo;, or &ldquo;Jaggery&rdquo;.
          </p>
          <button
            onClick={() => {
              setQuery('');
              setPriceFilter('all');
            }}
            className="mt-2 px-5 py-2 bg-[#ff6f00] text-white text-xs font-bold rounded-lg hover:bg-[#e66400] transition"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}

