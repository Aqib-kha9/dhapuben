'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Phone, Mail, MapPin, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function AboutUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">About Us</span>
      </nav>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8">
        <div>
          <div className="text-xs font-bold text-[#ff6f00] uppercase tracking-wider mb-1">
            Our Story & Values
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            About {storeInfo.name}
          </h1>
        </div>

        {/* Brand Banner */}
        <div className="p-6 rounded-2xl bg-[#fff8f0] border border-[#ffeed6] space-y-3">
          <p className="text-base sm:text-lg font-bold text-[#0f4a73] leading-snug">
            &ldquo;Empowering wellness with premium, science-backed nutrition and health products for a balanced, energetic, and vibrant life.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            At {storeInfo.name}, we believe true wellness starts with genuine purity. We source nature&apos;s most potent nutritional powerhouses—from pure wildcrafted Himalayan Sea Buckthorn berries of Leh Ladakh to unrefined date palm jaggery, organic apple cider vinegar, and protein-packed nut butters.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#ffeed6] flex items-center justify-center text-[#ff6f00] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Uncompromising Purity</h3>
            <p className="text-xs text-gray-600 mt-1">
              Zero artificial fillers, harmful preservatives, or unnecessary additives. Only 100% genuine goodness.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#ffeed6] flex items-center justify-center text-[#ff6f00] mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Science-Backed Nutrition</h3>
            <p className="text-xs text-gray-600 mt-1">
              Carefully formulated nutritional profiles rich in rare Omegas, bio-flavonoids, antioxidants, and minerals.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#ffeed6] flex items-center justify-center text-[#ff6f00] mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900">Customer Dedication</h3>
            <p className="text-xs text-gray-600 mt-1">
              Empowering individuals and families across India with personalized WhatsApp customer care and transparency.
            </p>
          </div>
        </div>

        {/* Contact Us Details */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Get In Touch With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <Phone className="w-4 h-4 text-[#ff6f00] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-900 block">WhatsApp Support:</span>
                <span className="text-gray-600">{storeInfo.phone}</span>
                <span className="text-[11px] text-gray-400 block mt-0.5">Support Time: {storeInfo.support_hours}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <Mail className="w-4 h-4 text-[#ff6f00] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-900 block">Email Us:</span>
                <span className="text-gray-600 break-all">{storeInfo.email}</span>
                <span className="text-[11px] text-gray-400 block mt-0.5">We respond within 24 hours</span>
              </div>
            </div>

            <div className="sm:col-span-2 flex items-start space-x-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <MapPin className="w-4 h-4 text-[#ff6f00] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-900 block">Registered Business Address:</span>
                <span className="text-gray-600">{storeInfo.address}</span>
                <span className="text-[11px] text-gray-500 block mt-0.5 font-medium">Entity: {storeInfo.company_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

