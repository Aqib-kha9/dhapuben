'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, Sparkles, HeartHandshake } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSection from '@/components/ProductSection';
import TrustBadges from '@/components/TrustBadges';
import { products, getFeaturedProducts } from '@/lib/data';

export default function HomePage() {
  const newArrivals = getFeaturedProducts('new');
  const amazingDeals = getFeaturedProducts('deals');
  const inTheSpotlight = getFeaturedProducts('spotlight');
  const bestSellers = getFeaturedProducts('best');

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 sm:py-6 space-y-2 sm:space-y-12">
      {/* 1. Hero Banner Carousel (Full edge-to-edge on mobile, matching screenshot) */}
      <HeroSlider />

      {/* 2. New Arrivals Section (Directly under banner dots, matching screenshot) */}
      <ProductSection
        title="NEW ARRIVALS"
        subtitle="Fresh wellness additions to empower your daily routine"
        viewAllLink="/featured/new-arrivals"
        products={newArrivals}
      />

      {/* 3. Shop By Category */}
      <div className="px-3 sm:px-0">
        <CategoryGrid />
      </div>

      {/* 4. Amazing Deals Section */}
      <ProductSection
        title="AMAZING DEALS"
        subtitle="Exclusive discounts of 40% and above for healthy living"
        viewAllLink="/Amazing-Deals/collection/a-FOpMt_"
        products={amazingDeals}
      />

      {/* 5. Promotional Poster Banner: HEALTH TREATS (Exact match to original reference site) */}
      <div className="my-4 sm:my-8 px-0 sm:px-0">
        <Link
          href="/Amazing-Deals/collection/a-FOpMt_"
          className="block relative w-full aspect-[1/1.01] sm:aspect-[21/9] overflow-hidden sm:rounded-2xl shadow-xs group"
        >
          <Image
            src="/health_treats_banner_hd.png"
            alt="Health Treats - Tasty & Nutritious"
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </Link>
      </div>

      {/* 6. In The Spotlight Section */}
      <ProductSection
        title="IN THE SPOTLIGHT"
        subtitle="Handpicked favorites loved by thousands across India"
        viewAllLink="/IN-THE-SPOTLIGHT/collection/h6m3I5yM"
        products={inTheSpotlight}
      />

      {/* 7. Best Sellers Section */}
      <ProductSection
        title="BEST SELLERS"
        subtitle="Top rated formulas with highest customer satisfaction"
        viewAllLink="/featured/best-sellers"
        products={bestSellers}
      />

      {/* 8. Why Choose Us Features */}
      <div className="px-3 sm:px-0">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Why Thousands Trust DHAPUBEN WELLNESS
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Science-backed formulations crafted with 100% genuine ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[#fafafa] border border-gray-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#ffeed6] text-[#ff6f00] flex items-center justify-center mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">100% Pure & Non-GMO</h3>
              <p className="text-xs text-gray-500 mt-1">
                Zero artificial preservatives, unadulterated high vitality nutrition.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fafafa] border border-gray-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#ffeed6] text-[#ff6f00] flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Lab Tested Quality</h3>
              <p className="text-xs text-gray-500 mt-1">
                Every batch undergoes stringent multi-stage purity testing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fafafa] border border-gray-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#ffeed6] text-[#ff6f00] flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">High Altitude Sourced</h3>
              <p className="text-xs text-gray-500 mt-1">
                Wildcrafted berries and cold-processed natural dates jaggery.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fafafa] border border-gray-100 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#ffeed6] text-[#ff6f00] flex items-center justify-center mb-3">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">Customer First</h3>
              <p className="text-xs text-gray-500 mt-1">
                Direct personal support and transparent customer service policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Trust Badges Strip */}
      <div className="px-3 sm:px-0">
        <TrustBadges />
      </div>
    </div>
  );
}
