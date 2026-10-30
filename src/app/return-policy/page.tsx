'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, RotateCcw, AlertCircle } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function ReturnPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">Return & Refund Policy</span>
      </nav>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#ffeed6] flex items-center justify-center text-[#ff6f00]">
            <RotateCcw className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Return and Refund Policy</h1>
            <p className="text-xs text-gray-500">Transparent guidelines for order cancellations and replacements</p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-base font-bold text-gray-900">Cancellation Policy</h2>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 flex items-start space-x-3 text-xs">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              In case there is an order cancellation, please do so <strong>before it is dispatched</strong> from our warehouse. Once the product is shipped, it cannot be canceled via the website and standard return terms apply.
            </p>
          </div>

          <h2 className="text-base font-bold text-gray-900 pt-2">Return Eligibility</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Returns and replacements are applicable to damaged in-transit goods, defective seals, or wrong item shipments.
            </li>
            <li>
              Due to hygiene and consumable food safety regulations, opened, consumed, or tampered bottles/jars of health drinks, jaggery, and juices cannot be returned once unsealed unless defective.
            </li>
            <li>
              Customers must notify us within <strong>48 hours of delivery</strong> with unboxing pictures or video of the affected parcel.
            </li>
          </ul>

          <h2 className="text-base font-bold text-gray-900 pt-2">Refund Processing</h2>
          <p>
            Once your return request is approved and the product is verified at our facility, refunds are initiated within <strong>2 to 4 business days</strong> back to your original source of payment (UPI/Bank/Card). For Cash on Delivery orders, bank account details will be requested for direct IMPS transfer.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">How to Request a Replacement</h2>
          <p>
            Simply reach out to our customer care team on WhatsApp at <strong>{storeInfo.phone}</strong> or send an email with your Order ID to <strong>{storeInfo.email}</strong>. Our support team will assist you immediately.
          </p>
        </div>
      </div>
    </div>
  );
}

