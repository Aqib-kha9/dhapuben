'use client';

import React, { Suspense } from 'react';
import CheckoutClient from './CheckoutClient';

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-xs text-gray-500">
          Loading checkout...
        </div>
      }
    >
      <CheckoutClient initialStep={1} />
    </Suspense>
  );
}
