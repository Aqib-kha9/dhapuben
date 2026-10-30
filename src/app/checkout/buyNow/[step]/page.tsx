'use client';

import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';
import CheckoutClient from '../../CheckoutClient';

function BuyNowStepWrapper() {
  const params = useParams();
  const step = params.step as string;
  const initialStep = step === 'request_address' ? 2 : 1;

  return <CheckoutClient initialStep={initialStep} />;
}

export default function BuyNowPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center text-xs text-gray-500">
          Loading checkout...
        </div>
      }
    >
      <BuyNowStepWrapper />
    </Suspense>
  );
}

