'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/image';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Lock,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  QrCode,
  Banknote,
  MessageCircle,
} from 'lucide-react';
import { products, storeInfo, Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';

export default function CheckoutClient({ initialStep = 1 }: { initialStep?: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items: cartItems, clearCart } = useCart();

  const productId = searchParams.get('product_id');
  const skuId = searchParams.get('sku_id');
  const qtyParam = searchParams.get('quantity');
  const quantity = qtyParam ? parseInt(qtyParam, 10) || 1 : 1;

  // Selected single product for "Buy Now" flow
  const buyNowProduct = useMemo(() => {
    if (productId) {
      return products.find((p) => p.id === productId || p.sku_id === skuId) || products[0];
    }
    if (cartItems.length > 0) {
      return cartItems[0].product;
    }
    // Fallback default (Liver Care juice matching user's screenshot)
    return (
      products.find((p) => p.title.toLowerCase().includes('liver')) || products[0]
    );
  }, [productId, skuId, cartItems]);

  const activeQty = productId ? quantity : cartItems.length > 0 ? cartItems[0].quantity : 1;
  const activeSize = buyNowProduct.sizes[0]?.size || buyNowProduct.weight || '750 ml';

  // Checkout Steps: 1 = Login (Mobile), 2 = Address, 3 = Payment
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  // Step 1: Mobile Form
  const [mobileNumber, setMobileNumber] = useState('7803927245');
  const isMobileValid = mobileNumber.replace(/\D/g, '').length === 10;

  // Step 2: Address Form
  const [addressData, setAddressData] = useState({
    fullName: '',
    houseBuilding: '',
    roadArea: '',
    pincode: '',
    city: 'Indore',
    state: 'Madhya Pradesh',
  });

  const isAddressValid =
    addressData.fullName.trim().length > 1 &&
    addressData.houseBuilding.trim().length > 1 &&
    addressData.roadArea.trim().length > 1 &&
    addressData.pincode.replace(/\D/g, '').length === 6;

  // Step 3: Payment Form
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<any>(null);

  // Price calculations
  const itemPrice = buyNowProduct.selling_price * activeQty;
  const onlineDiscount = paymentMethod !== 'cod' ? 50 : 0;
  const grandTotal = Math.max(0, itemPrice - onlineDiscount);

  // Handle Step 1 -> Step 2
  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMobileValid) return;
    setCurrentStep(2);
  };

  // Handle Step 2 -> Step 3
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAddressValid) return;
    setCurrentStep(3);
  };

  // Handle Step 3: Place Order
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const confettiModule: any = await import('canvas-confetti');
      const confetti = confettiModule.default || confettiModule;
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      console.warn('Confetti load issue', err);
    }

    setTimeout(() => {
      const orderId = `DW-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderDate = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });

      const orderRecord = {
        orderId,
        date: orderDate,
        items: [
          {
            product: buyNowProduct,
            quantity: activeQty,
            selectedSize: activeSize,
          },
        ],
        shippingAddress: {
          fullName: addressData.fullName || 'Customer',
          phone: mobileNumber,
          address: `${addressData.houseBuilding}, ${addressData.roadArea}`,
          city: addressData.city,
          state: addressData.state,
          pincode: addressData.pincode,
        },
        paymentMethod:
          paymentMethod === 'upi'
            ? 'UPI / QR'
            : paymentMethod === 'card'
            ? 'Debit/Credit Card'
            : 'Cash on Delivery',
        totalAmount: grandTotal,
        status: 'Order Confirmed',
        estimatedDelivery: '3-4 Business Days',
      };

      try {
        const existing = JSON.parse(localStorage.getItem('dhapuben_orders') || '[]');
        localStorage.setItem('dhapuben_orders', JSON.stringify([orderRecord, ...existing]));
      } catch (err) {
        console.error(err);
      }

      setOrderConfirmed(orderRecord);
      clearCart();
      setIsSubmitting(false);
    }, 1000);
  };

  // Top announcement text changes based on step (matching screenshots!)
  const announcementText =
    currentStep === 1
      ? 'Extra discounts up to 200 at checkout.'
      : 'Save Min 50% on all orders and get free shipping';

  // Render Order Confirmation screen if placed
  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
        {/* Top bar */}
        <div className="bg-[#ff6f00] text-white text-xs font-medium py-2 text-center">
          Order Completed Successfully
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12 flex-1 flex flex-col justify-center">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-lg text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                Order Confirmed
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 pt-2">
                Thank You for Your Order!
              </h1>
              <p className="text-xs text-gray-500">
                Confirmation SMS & WhatsApp details sent to +91 {mobileNumber}
              </p>
            </div>

            {/* Details Box */}
            <div className="bg-[#fffaf5] border border-[#ffeed6] rounded-2xl p-5 text-left space-y-4 text-xs">
              <div className="flex justify-between items-center border-b border-[#ffeed6] pb-3">
                <div>
                  <span className="text-gray-500">Order ID:</span>
                  <span className="font-extrabold text-[#ff6f00] text-sm block">
                    #{orderConfirmed.orderId}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500">Estimated Delivery:</span>
                  <span className="font-bold text-gray-800 block">
                    {orderConfirmed.estimatedDelivery}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-bold text-gray-800 block mb-1">Delivering To:</span>
                  <p className="text-gray-600">{orderConfirmed.shippingAddress.fullName}</p>
                  <p className="text-gray-600">{orderConfirmed.shippingAddress.address}</p>
                  <p className="text-gray-600">
                    {orderConfirmed.shippingAddress.city}, {orderConfirmed.shippingAddress.state} -{' '}
                    {orderConfirmed.shippingAddress.pincode}
                  </p>
                  <p className="text-gray-600">Mob: +91 {orderConfirmed.shippingAddress.phone}</p>
                </div>
                <div>
                  <span className="font-bold text-gray-800 block mb-1">Payment:</span>
                  <p className="text-gray-600">Method: <strong>{orderConfirmed.paymentMethod}</strong></p>
                  <p className="text-gray-600 text-sm font-bold text-gray-900 pt-1">
                    Amount Paid: ₹{orderConfirmed.totalAmount}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <NextLink
                href="/orders"
                className="w-full sm:w-auto px-6 py-3 bg-[#ff6f00] text-white font-bold text-xs rounded-xl hover:bg-[#e66400] transition shadow"
              >
                Track Live Status
              </NextLink>
              <NextLink
                href="/"
                className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold text-xs rounded-xl hover:bg-gray-50 transition"
              >
                Continue Shopping
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between">
      <div>
        {/* 1. Top Orange Announcement Bar */}
        <div className="bg-[#ff6f00] text-white text-xs sm:text-sm font-medium py-2 px-4 text-center">
          {announcementText}
        </div>

        {/* 2. Header Bar with Back & Round Logo */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between border-b border-gray-100">
          <button
            onClick={() => {
              if (currentStep > 1) {
                setCurrentStep(currentStep - 1);
              } else {
                router.push('/');
              }
            }}
            className="flex items-center space-x-1.5 text-gray-800 hover:text-[#ff6f00] transition font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Checkout</span>
          </button>

          {/* Round Logo on top-right (matching screenshot) */}
          <NextLink href="/" className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-200">
            <Image
              src={storeInfo.favicon || storeInfo.logo}
              alt={storeInfo.name}
              fill
              className="object-contain p-0.5"
            />
          </NextLink>
        </div>

        {/* 3. Stepper (1 Login — 2 Address — 3 Payment) */}
        <div className="max-w-md mx-auto px-4 pt-8 pb-10">
          <div className="flex items-center justify-between relative">
            {/* Connector Line 1-2 */}
            <div
              className={`absolute top-4 left-[20%] right-[50%] h-[1.5px] -z-0 transition-colors duration-300 ${
                currentStep >= 2 ? 'bg-[#ff6f00]' : 'bg-gray-300'
              }`}
            />
            {/* Connector Line 2-3 */}
            <div
              className={`absolute top-4 left-[50%] right-[20%] h-[1.5px] -z-0 transition-colors duration-300 ${
                currentStep >= 3 ? 'bg-[#ff6f00]' : 'bg-gray-300'
              }`}
            />

            {/* Step 1: Login */}
            <div
              onClick={() => setCurrentStep(1)}
              className="flex flex-col items-center cursor-pointer z-10 select-none"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep > 1
                    ? 'bg-[#ff6f00] text-white'
                    : currentStep === 1
                    ? 'border-2 border-gray-800 text-gray-900 bg-white font-extrabold'
                    : 'border border-gray-300 text-gray-400 bg-white'
                }`}
              >
                {currentStep > 1 ? <Check className="w-4 h-4 stroke-[3]" /> : '1'}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium ${
                  currentStep === 1 ? 'text-gray-900 font-bold' : 'text-gray-500'
                }`}
              >
                Login
              </span>
            </div>

            {/* Step 2: Address */}
            <div
              onClick={() => {
                if (isMobileValid) setCurrentStep(2);
              }}
              className="flex flex-col items-center cursor-pointer z-10 select-none"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep > 2
                    ? 'bg-[#ff6f00] text-white'
                    : currentStep === 2
                    ? 'border-2 border-gray-800 text-gray-900 bg-white font-extrabold'
                    : 'border border-gray-300 text-gray-400 bg-white'
                }`}
              >
                {currentStep > 2 ? <Check className="w-4 h-4 stroke-[3]" /> : '2'}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium ${
                  currentStep === 2 ? 'text-gray-900 font-bold' : 'text-gray-500'
                }`}
              >
                Address
              </span>
            </div>

            {/* Step 3: Payment */}
            <div
              onClick={() => {
                if (isMobileValid && isAddressValid) setCurrentStep(3);
              }}
              className="flex flex-col items-center cursor-pointer z-10 select-none"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  currentStep === 3
                    ? 'border-2 border-[#ff6f00] text-[#ff6f00] bg-white font-extrabold'
                    : 'border border-gray-300 text-gray-400 bg-white'
                }`}
              >
                3
              </div>
              <span
                className={`text-xs mt-1.5 font-medium ${
                  currentStep === 3 ? 'text-gray-900 font-bold' : 'text-gray-500'
                }`}
              >
                Payment
              </span>
            </div>
          </div>
        </div>

        {/* 4. Main Two-Column Layout (Bag on Left, Step Forms on Right) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Bag (matching screenshot) */}
            <div className="md:col-span-5 space-y-3">
              <h2 className="text-base font-bold text-gray-900">Bag</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg p-3.5 flex space-x-3.5 shadow-sm">
                <div className="relative w-20 h-20 bg-gray-50 rounded border border-gray-100 overflow-hidden shrink-0 p-1">
                  <Image
                    src={buyNowProduct.images[0] || ''}
                    alt={buyNowProduct.title}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xs sm:text-[13px] font-medium text-gray-800 leading-snug line-clamp-3">
                    {buyNowProduct.title}
                  </h3>
                  
                  <div className="mt-2 text-xs text-gray-500">
                    Size: {activeSize} / Qty: {activeQty}
                  </div>

                  <div className="mt-1 text-sm font-bold text-gray-900">
                    ₹{itemPrice}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Step Forms (matching screenshots 1 & 2) */}
            <div className="md:col-span-7">
              
              {/* STEP 1: Enter Mobile Number */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Enter Mobile No*
                    </label>

                    {/* WhatsApp Mobile Input Container */}
                    <div className="border border-gray-300 rounded-md p-2.5 flex items-center space-x-2 bg-white focus-within:border-[#ff6f00] focus-within:ring-1 focus-within:ring-[#ff6f00] transition">
                      {/* WhatsApp Icon */}
                      <div className="w-5 h-5 bg-[#25D366] rounded-full flex items-center justify-center text-white shrink-0">
                        <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                      </div>

                      <span className="text-xs font-semibold text-gray-700 select-none">
                        +91
                      </span>

                      <input
                        type="tel"
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="7803927245"
                        className="flex-1 text-xs font-semibold text-gray-900 focus:outline-none bg-transparent tracking-wider"
                        autoFocus
                      />

                      {/* Green Checkmark Circle when 10 digits entered */}
                      {isMobileValid && (
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleMobileSubmit}
                    disabled={!isMobileValid}
                    className="w-full py-3 bg-[#ff6f00] hover:bg-[#e66400] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm rounded-md transition shadow-sm"
                  >
                    Continue
                  </button>

                  {/* Terms & Privacy Policy Note */}
                  <p className="text-[11px] text-gray-500 text-center pt-2">
                    By proceeding, I agree to the{' '}
                    <NextLink href="/terms-and-conditions" className="text-gray-700 underline">
                      T&C
                    </NextLink>{' '}
                    &{' '}
                    <NextLink href="/privacy-policy" className="text-gray-700 underline">
                      Privacy Policy
                    </NextLink>
                  </p>

                  {/* Powered By ShopDeck Strip */}
                  <div className="pt-3 text-center">
                    <div className="inline-block px-4 py-1.5 bg-gray-100 rounded text-[11px] text-gray-500">
                      Powered by <strong className="text-gray-700">ShopDeck</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Address Form */}
              {currentStep === 2 && (
                <form onSubmit={handleAddressSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name*"
                      value={addressData.fullName}
                      onChange={(e) => setAddressData({ ...addressData, fullName: e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#ff6f00]"
                      autoFocus
                    />
                  </div>

                  {/* House No./ Building Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      House No./ Building Name*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="House No./ Building Name*"
                      value={addressData.houseBuilding}
                      onChange={(e) =>
                        setAddressData({ ...addressData, houseBuilding: e.target.value })
                      }
                      className="w-full border border-gray-300 rounded-md p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#ff6f00]"
                    />
                  </div>

                  {/* Road Name / Area Colony */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Road Name / Area Colony*
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Road Name / Area Colony*"
                      value={addressData.roadArea}
                      onChange={(e) => setAddressData({ ...addressData, roadArea: e.target.value })}
                      className="w-full border border-gray-300 rounded-md p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#ff6f00]"
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Pincode*
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="Pincode*"
                      value={addressData.pincode}
                      onChange={(e) =>
                        setAddressData({
                          ...addressData,
                          pincode: e.target.value.replace(/\D/g, ''),
                        })
                      }
                      className="w-full border border-gray-300 rounded-md p-2.5 text-xs text-gray-900 focus:outline-none focus:border-[#ff6f00]"
                    />
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    disabled={!isAddressValid}
                    className={`w-full py-3 font-bold text-xs sm:text-sm rounded-md transition shadow-sm ${
                      isAddressValid
                        ? 'bg-[#ff6f00] hover:bg-[#e66400] text-white cursor-pointer'
                        : 'bg-[#d1d5db] text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Continue
                  </button>

                  {/* Terms & Privacy Policy Note */}
                  <p className="text-[11px] text-gray-500 text-center pt-2">
                    By proceeding, I agree to the{' '}
                    <NextLink href="/terms-and-conditions" className="text-gray-700 underline">
                      T&C
                    </NextLink>{' '}
                    &{' '}
                    <NextLink href="/privacy-policy" className="text-gray-700 underline">
                      Privacy Policy
                    </NextLink>
                  </p>

                  {/* Powered By ShopDeck Strip */}
                  <div className="pt-3 text-center">
                    <div className="inline-block px-4 py-1.5 bg-gray-100 rounded text-[11px] text-gray-500">
                      Powered by <strong className="text-gray-700">ShopDeck</strong>
                    </div>
                  </div>
                </form>
              )}

              {/* STEP 3: Payment Form */}
              {currentStep === 3 && (
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 pb-1">
                    Select Payment Method
                  </h3>

                  <div className="space-y-2.5">
                    {/* UPI Option */}
                    <label
                      className={`flex items-start p-3.5 border rounded-lg cursor-pointer transition ${
                        paymentMethod === 'upi'
                          ? 'border-[#ff6f00] bg-[#fffaf5]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="mt-0.5 text-[#ff6f00] focus:ring-[#ff6f00]"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-900">
                            UPI / QR (GPay, PhonePe, Paytm, BHIM)
                          </span>
                          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            EXTRA ₹50 OFF
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Instant verification & fast dispatch
                        </p>
                      </div>
                    </label>

                    {/* Card Option */}
                    <label
                      className={`flex items-start p-3.5 border rounded-lg cursor-pointer transition ${
                        paymentMethod === 'card'
                          ? 'border-[#ff6f00] bg-[#fffaf5]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="mt-0.5 text-[#ff6f00] focus:ring-[#ff6f00]"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-900">
                            Debit / Credit Card / Net Banking
                          </span>
                          <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            EXTRA ₹50 OFF
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Visa, MasterCard, RuPay cards accepted
                        </p>
                      </div>
                    </label>

                    {/* Cash on Delivery */}
                    <label
                      className={`flex items-start p-3.5 border rounded-lg cursor-pointer transition ${
                        paymentMethod === 'cod'
                          ? 'border-[#ff6f00] bg-[#fffaf5]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payMethod"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="mt-0.5 text-[#ff6f00] focus:ring-[#ff6f00]"
                      />
                      <div className="ml-3 flex-1">
                        <span className="text-xs font-bold text-gray-900">
                          Cash on Delivery (COD)
                        </span>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          Pay cash or UPI upon delivery
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Price Summary Breakdown */}
                  <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-100 space-y-1.5 text-xs">
                    <div className="flex justify-between text-gray-600">
                      <span>Item Total</span>
                      <span>₹{itemPrice}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span className="text-emerald-600 font-bold">FREE</span>
                    </div>
                    {onlineDiscount > 0 && (
                      <div className="flex justify-between text-emerald-600 font-medium">
                        <span>Online Payment Discount</span>
                        <span>-₹{onlineDiscount}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-extrabold text-sm text-gray-900">
                      <span>Amount Payable</span>
                      <span className="text-[#ff6f00]">₹{grandTotal}</span>
                    </div>
                  </div>

                  {/* Place Order CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#ff6f00] hover:bg-[#e66400] text-white font-extrabold text-xs sm:text-sm rounded-md transition shadow flex items-center justify-center space-x-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Placing Order...</span>
                    ) : (
                      <>
                        <PackageCheck className="w-4 h-4" />
                        <span>PAY & PLACE ORDER (₹{grandTotal})</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <div className="inline-block px-4 py-1.5 bg-gray-100 rounded text-[11px] text-gray-500">
                      Powered by <strong className="text-gray-700">ShopDeck</strong>
                    </div>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

