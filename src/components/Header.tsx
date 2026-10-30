'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Search, ShoppingBag, Package, X } from 'lucide-react';
import { storeInfo } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { totalItems, setIsCartDrawerOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileSearchOpen(false);
    }
  };

  const navLinks = [
    { title: 'HOME', href: '/' },
    { title: 'HEALTH CARE PRODUCT', href: '/HEALTH-CARE-PRODUCT/collection/o6R3aiM6' },
    { title: 'JUICE', href: '/JUICE/collection/Ui0vRNuY' },
    { title: 'SKIN CARE PRODUCT', href: '/SKIN-CARE-PRODUCT/collection/N0q7mtDj' },
    { title: 'AMAZING DEALS', href: '/Amazing-Deals/collection/a-FOpMt_' },
    { title: 'BEST SELLERS', href: '/featured/best-sellers' },
    { title: 'ALL PRODUCTS', href: '/featured/all-products' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Mobile Header (Taller, spacious height matching original site) */}
        <div className="md:hidden flex items-center justify-between h-16 px-1">
          {/* Left: Search Icon */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="p-2 text-gray-800 hover:text-[#ff6f00] transition active:scale-95"
            aria-label="Search"
          >
            <Search className="w-6 h-6 stroke-[1.8]" />
          </button>

          {/* Center: Round Floral Logo with Registered Mark */}
          <Link href="/" className="relative flex items-center justify-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-200/90 flex items-center justify-center shadow-xs">
              <Image
                src={storeInfo.roundLogo || storeInfo.favicon}
                alt={storeInfo.name}
                fill
                priority
                className="object-contain p-0.5"
                sizes="40px"
              />
            </div>
            <span className="absolute -top-0.5 -right-2 text-[8px] font-bold text-gray-500 leading-none select-none">
              ®
            </span>
          </Link>

          {/* Right: Shopping Bag */}
          <button
            onClick={() => setIsCartDrawerOpen(true)}
            className="relative p-2 text-gray-800 hover:text-[#ff6f00] transition active:scale-95"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
            {mounted && totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-[#ff6f00] text-white text-[9px] font-extrabold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {mobileSearchOpen && (
          <div className="md:hidden py-2 pb-3 border-t border-gray-100">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-8 py-1.5 border border-gray-300 rounded-full text-xs focus:outline-none focus:border-[#ff6f00] bg-gray-50"
                autoFocus
              />
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <button
                type="button"
                onClick={() => setMobileSearchOpen(false)}
                className="absolute right-2.5 text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between py-3 gap-4">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="relative h-11 w-56">
              <Image
                src={storeInfo.logo}
                alt={storeInfo.name}
                fill
                priority
                className="object-contain object-left"
                sizes="240px"
              />
            </div>
          </Link>

          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-lg mx-6 relative flex items-center"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for pure berry juices, jaggery, nut butter..."
              className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ff6f00] focus:ring-1 focus:ring-[#ff6f00] transition bg-gray-50/50"
            />
            <Search className="absolute left-3.5 w-4 h-4 text-gray-400" />
            <button
              type="submit"
              className="absolute right-1.5 px-3.5 py-1 bg-[#ff6f00] text-white text-xs font-semibold rounded-full hover:bg-[#e66400] transition"
            >
              Search
            </button>
          </form>

          <div className="flex items-center space-x-6">
            <Link
              href="/orders"
              className="flex items-center space-x-1.5 text-gray-700 hover:text-[#ff6f00] transition text-sm font-semibold"
            >
              <Package className="w-5 h-5 text-gray-600" />
              <span>Orders</span>
            </Link>

            <button
              onClick={() => setIsCartDrawerOpen(true)}
              className="relative flex items-center space-x-1.5 text-gray-700 hover:text-[#ff6f00] transition text-sm font-semibold p-1"
              aria-label="Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-gray-700" />
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#ff6f00] text-white text-[11px] font-bold rounded-full h-5 min-w-5 px-1 flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="font-bold">Bag</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Category Navigation Bar */}
      <nav className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center space-x-8 text-xs font-bold tracking-wider text-gray-700 py-3 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className={`transition pb-1 border-b-2 ${
                      isActive
                        ? 'border-[#ff6f00] text-[#ff6f00]'
                        : 'border-transparent hover:text-[#ff6f00] hover:border-[#ff6f00]'
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
