'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Shield } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">Privacy Policy</span>
      </nav>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#ffeed6] flex items-center justify-center text-[#ff6f00]">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-xs text-gray-500">Last updated: 2026</p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            Your personal information is always kept confidential with <strong>{storeInfo.name}</strong> (operated under <strong>{storeInfo.company_name}</strong>). We value the trust you place in us and take your privacy seriously.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Personal Information That We Collect</h2>
          <p>
            When you browse our website, create an account, place an order, or contact customer care, we may collect information including your name, shipping/billing address, email address, contact telephone number, and payment transaction references.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Uses of the Information Collected</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
            <li>Process and fulfill orders efficiently with prompt courier dispatch.</li>
            <li>Send order tracking updates, dispatch status, and delivery confirmations.</li>
            <li>Provide direct WhatsApp and customer support for queries or concerns.</li>
            <li>Send news, nutritional insights, and exclusive discount promotional offers.</li>
            <li>Enhance online browsing and security on our shopping platform.</li>
          </ul>

          <h2 className="text-base font-bold text-gray-900 pt-2">Data Security & Protection</h2>
          <p>
            We implement industry-standard encryption protocols (SSL/TLS) for data transfer. Payment transactions are processed securely through certified gateway partners—we never store your credit/debit card numbers or UPI PINs on our servers.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Contacting Us Regarding Privacy</h2>
          <p>
            If you have any questions or wish to update or delete your details, please reach out to our grievance officer at <strong>{storeInfo.email}</strong> or WhatsApp us at <strong>{storeInfo.phone}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

