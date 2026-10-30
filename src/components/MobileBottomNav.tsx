'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Menu, X, ChevronRight } from 'lucide-react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [browseOpen, setBrowseOpen] = useState(false);

  return (
    <>
      {/* Fixed Bottom Navigation Bar on Mobile (Taller height matching original site) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 h-16 px-4 flex justify-around items-center md:hidden shadow-sm">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 ${
            pathname === '/' ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Home className="w-5.5 h-5.5 stroke-[1.8]" />
          <span className="text-[11px] mt-1 tracking-tight font-semibold">Home</span>
        </Link>

        {/* 2. Orders */}
        <Link
          href="/orders"
          className={`flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 ${
            pathname === '/orders' ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <User className="w-5.5 h-5.5 stroke-[1.8]" />
          <span className="text-[11px] mt-1 tracking-tight font-semibold">Orders</span>
        </Link>

        {/* 3. Browse */}
        <button
          onClick={() => setBrowseOpen(!browseOpen)}
          className={`flex flex-col items-center justify-center flex-1 py-1.5 transition active:scale-95 ${
            browseOpen ? 'text-[#ff6f00] font-bold' : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Browse Categories"
        >
          <Menu className="w-5.5 h-5.5 stroke-[1.8]" />
          <span className="text-[11px] mt-1 tracking-tight font-semibold">Browse</span>
        </button>
      </nav>

      {/* Browse Bottom Sheet / Drawer */}
      {browseOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end md:hidden">
          <div
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setBrowseOpen(false)}
          />

          <div className="relative bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto p-5 z-10 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="text-base font-bold text-gray-900">Browse Collections</h3>
              <button
                onClick={() => setBrowseOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1.5 mb-5">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Main Categories
              </span>
              <Link
                href="/HEALTH-CARE-PRODUCT/collection/o6R3aiM6"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-800 hover:bg-[#fff8f0] hover:text-[#ff6f00] transition"
              >
                <span>HEALTH CARE PRODUCT</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link
                href="/JUICE/collection/Ui0vRNuY"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-800 hover:bg-[#fff8f0] hover:text-[#ff6f00] transition"
              >
                <span>JUICE & CONCENTRATES</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link
                href="/SKIN-CARE-PRODUCT/collection/N0q7mtDj"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-800 hover:bg-[#fff8f0] hover:text-[#ff6f00] transition"
              >
                <span>SKIN CARE PRODUCT</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link
                href="/Amazing-Deals/collection/a-FOpMt_"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-800 hover:bg-[#fff8f0] hover:text-[#ff6f00] transition"
              >
                <span>AMAZING DEALS (40%+ OFF)</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link
                href="/featured/best-sellers"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-800 hover:bg-[#fff8f0] hover:text-[#ff6f00] transition"
              >
                <span>BEST SELLERS</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link
                href="/featured/all-products"
                onClick={() => setBrowseOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-800 hover:bg-[#fff8f0] hover:text-[#ff6f00] transition"
              >
                <span>ALL PRODUCTS</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>

            <div className="space-y-1.5 border-t pt-4">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Filter By Budget
              </span>
              <div className="grid grid-cols-3 gap-2">
                <Link
                  href="/Under-299/collection/DtTeR7xW"
                  onClick={() => setBrowseOpen(false)}
                  className="p-2 text-center rounded-lg bg-gray-50 text-xs font-semibold text-gray-700 hover:bg-[#ff6f00] hover:text-white transition"
                >
                  Under ₹299
                </Link>
                <Link
                  href="/Under-499/collection/TeKLevFT"
                  onClick={() => setBrowseOpen(false)}
                  className="p-2 text-center rounded-lg bg-gray-50 text-xs font-semibold text-gray-700 hover:bg-[#ff6f00] hover:text-white transition"
                >
                  Under ₹499
                </Link>
                <Link
                  href="/Under-999/collection/VxDVTB3l"
                  onClick={() => setBrowseOpen(false)}
                  className="p-2 text-center rounded-lg bg-gray-50 text-xs font-semibold text-gray-700 hover:bg-[#ff6f00] hover:text-white transition"
                >
                  Under ₹999
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
