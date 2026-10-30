'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { storeInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 text-gray-700">
      {/* Trust Marker Feature Bar */}
      <div className="border-b border-gray-100 bg-[#fffaf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-[#ffeed6] flex items-center justify-center text-[#ff6f00] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">100% Authentic & Natural</h4>
                <p className="text-xs text-gray-500">Pure, science-backed wellness formulas</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-[#ffeed6] flex items-center justify-center text-[#ff6f00] shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Free Express Shipping</h4>
                <p className="text-xs text-gray-500">Free delivery on orders ₹849 and above</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-[#ffeed6] flex items-center justify-center text-[#ff6f00] shrink-0">
                <RefreshCw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Dedicated Support</h4>
                <p className="text-xs text-gray-500">Direct WhatsApp support Mon - Sat</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src={storeInfo.logo}
                alt={storeInfo.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs leading-relaxed text-gray-600">
              {storeInfo.description}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={storeInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#ff6f00] hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={storeInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#ff6f00] hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/HEALTH-CARE-PRODUCT/collection/o6R3aiM6" className="hover:text-[#ff6f00] transition">
                  Health Care Products
                </Link>
              </li>
              <li>
                <Link href="/JUICE/collection/Ui0vRNuY" className="hover:text-[#ff6f00] transition">
                  Juices & Concentrates
                </Link>
              </li>
              <li>
                <Link href="/SKIN-CARE-PRODUCT/collection/N0q7mtDj" className="hover:text-[#ff6f00] transition">
                  Skin Care Formulations
                </Link>
              </li>
              <li>
                <Link href="/Amazing-Deals/collection/a-FOpMt_" className="hover:text-[#ff6f00] transition">
                  Amazing Deals
                </Link>
              </li>
              <li>
                <Link href="/featured/best-sellers" className="hover:text-[#ff6f00] transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/featured/all-products" className="hover:text-[#ff6f00] transition">
                  All Catalog Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Policies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Customer Policies
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/about-us" className="hover:text-[#ff6f00] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-[#ff6f00] transition">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-[#ff6f00] transition">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="hover:text-[#ff6f00] transition">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#ff6f00] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#ff6f00] transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs text-gray-600">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#ff6f00] shrink-0 mt-0.5" />
                <span>{storeInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#ff6f00] shrink-0" />
                <span>{storeInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#ff6f00] shrink-0" />
                <span className="break-all">{storeInfo.email}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-[#ff6f00] shrink-0" />
                <span>{storeInfo.support_hours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 {storeInfo.name} ({storeInfo.company_name}). All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-gray-600">100% Safe Payments:</span>
            <span>UPI • Debit/Credit Cards • Net Banking • Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

