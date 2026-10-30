'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Truck, CheckCircle2, Clock } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">Shipping Policy</span>
      </nav>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 border-b pb-4">
          <div className="w-10 h-10 rounded-xl bg-[#ffeed6] flex items-center justify-center text-[#ff6f00]">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Shipping Policy</h1>
            <p className="text-xs text-gray-500">Pan-India delivery guidelines and dispatch timelines</p>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-4">
          <p>
            We ship across all pin codes in India and negotiate the best rates and fastest dispatch for our customers at <strong>{storeInfo.name}</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Clock className="w-5 h-5 text-[#ff6f00] mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Order Processing</h3>
              <p className="text-xs text-gray-600 mt-1">
                Orders placed Monday through Saturday IST will be processed on the same or following business day and shipped within 1-2 business days from our warehouse.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
              <h3 className="font-bold text-gray-900 text-sm">Free Delivery Threshold</h3>
              <p className="text-xs text-gray-600 mt-1">
                Enjoy <strong>FREE Shipping</strong> on all orders equal to or above ₹849! Orders below ₹849 have a flat nominal delivery fee of ₹49.
              </p>
            </div>
          </div>

          <h2 className="text-base font-bold text-gray-900 pt-2">Transit & Delivery Timelines</h2>
          <p>
            Standard delivery timeline is <strong>3 to 5 business days</strong> for major metro cities and <strong>4 to 7 business days</strong> for tier-2/3 regions and remote locations.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Tracking Your Consignment</h2>
          <p>
            As soon as your parcel is dispatched, you will receive a tracking link via SMS, Email, and WhatsApp. You can also monitor real-time shipment status on our <Link href="/orders" className="text-[#ff6f00] font-bold hover:underline">Orders</Link> page.
          </p>

          <h2 className="text-base font-bold text-gray-900 pt-2">Need Help With Your Shipment?</h2>
          <p>
            If you experience any delays or wish to modify delivery instructions, contact our team immediately at <strong>{storeInfo.phone}</strong> or email <strong>{storeInfo.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

