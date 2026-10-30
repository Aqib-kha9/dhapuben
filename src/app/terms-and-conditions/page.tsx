'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">Terms & Conditions</span>
      </nav>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#ffeed6] flex items-center justify-center text-[#ff6f00]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-xs text-gray-500">Official policies governing usage of {storeInfo.name}</p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            {storeInfo.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this website. By accessing or purchasing from our website, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Section 1 – Online Store Terms</h2>
          <p>
            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any unauthorized or illegal purpose, nor violate any applicable laws in your jurisdiction.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Section 2 – General Conditions</h2>
          <p>
            We reserve the right to refuse service to anyone for valid commercial or regulatory reasons at any time. You understand that your content (not including sensitive payment details) may be transferred unencrypted and involve transmissions over various networks.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Section 3 – Accuracy, Completeness & Timeliness of Information</h2>
          <p>
            We strive to provide accurate nutritional and ingredient information for all wellness products. However, individual health results may vary. Products are not intended to diagnose, treat, cure, or prevent any medical disease without consulting a medical professional.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Section 4 – Modifications to the Service and Prices</h2>
          <p>
            Prices for our products are subject to change without prior notice. We reserve the right at any time to modify or discontinue any product line or promotional offer without liability to you or any third-party.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Section 5 – Products or Services</h2>
          <p>
            Certain products may be available exclusively online through the website. These products may have limited quantities and are subject to return or exchange strictly in accordance with our Return Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

