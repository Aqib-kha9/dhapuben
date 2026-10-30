'use client';

import React from 'react';
import Image from 'next/image';
import { trustMarkers } from '@/lib/data';

export default function TrustBadges() {
  return (
    <section className="my-12 py-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trustMarkers.map((marker, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-[#ffeed6] transition"
            >
              <div className="relative w-14 h-14 shrink-0">
                <Image
                  src={marker.icon}
                  alt={marker.label}
                  fill
                  className="object-contain"
                  sizes="60px"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{marker.label}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{marker.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

