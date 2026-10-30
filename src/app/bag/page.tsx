'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Tag,
  ArrowRight,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function BagPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    mrpTotal,
    savingsTotal,
    shippingFee,
    couponDiscount,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = codeToApply || couponInput;
    if (!code) return;
    const res = applyCoupon(code);
    setCouponFeedback(res);
    if (res.success) setCouponInput('');
  };

  const amountNeededForFreeShipping = Math.max(0, 849 - subtotal);
  const freeShippingPercent = Math.min(100, Math.round((subtotal / 849) * 100));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">Shopping Bag</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
        Shopping Bag ({mounted ? items.length : 0} {items.length === 1 ? 'item' : 'items'})
      </h1>

      {!mounted ? (
        <div className="py-12 text-center text-xs text-gray-400">Loading shopping bag...</div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-lg mx-auto shadow-sm space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#fff8f0] flex items-center justify-center text-[#ff6f00] mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Your Shopping Bag is Empty</h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Looks like you haven&apos;t added any wellness treasures yet. Explore our range of pure sea buckthorn juices, date jaggery, and nutrition essentials.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#ff6f00] text-white font-bold text-sm rounded-xl hover:bg-[#e66400] transition shadow-md"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Items */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Free Shipping Meter */}
            <div className="bg-[#fff8f0] p-4 rounded-xl border border-[#ffeed6] text-xs">
              {amountNeededForFreeShipping > 0 ? (
                <div>
                  <p className="text-gray-800 font-medium">
                    Shop for <span className="font-bold text-[#ff6f00]">₹{amountNeededForFreeShipping}</span> more to unlock <span className="font-bold text-emerald-600">FREE Delivery</span>!
                  </p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-[#ff6f00] h-full rounded-full transition-all duration-300"
                      style={{ width: `${freeShippingPercent}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center text-emerald-700 font-bold space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Yay! You unlocked FREE Standard Shipping across India.</span>
                </div>
              )}
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 shadow-sm overflow-hidden">
              {items.map((item) => (
                <div key={item.product.id} className="p-4 sm:p-6 flex space-x-4">
                  {/* Thumbnail */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100 p-2">
                    <Image
                      src={item.product.images[0] || ''}
                      alt={item.product.title}
                      fill
                      className="object-contain"
                      sizes="110px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link href={item.product.relative_url}>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 hover:text-[#ff6f00] transition line-clamp-2">
                            {item.product.title}
                          </h3>
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 p-1 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {item.selectedSize && (
                        <div className="text-xs text-gray-500 mt-1 font-medium">
                          Option: <span className="text-gray-800 font-semibold">{item.selectedSize}</span>
                        </div>
                      )}

                      <div className="flex items-baseline space-x-2 mt-2">
                        <span className="text-base font-extrabold text-gray-900">
                          ₹{item.product.selling_price}
                        </span>
                        {item.product.mrp > item.product.selling_price && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{item.product.mrp}
                          </span>
                        )}
                        {item.product.discount > 0 && (
                          <span className="text-xs font-bold text-emerald-600">
                            ({item.product.discount}% OFF)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 mt-4">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-gray-600 hover:text-[#ff6f00] p-1"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold px-3 text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-gray-600 hover:text-[#ff6f00] p-1"
                          aria-label="Increase"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-xs text-gray-500">
                        Item Subtotal: <strong>₹{item.product.selling_price * item.quantity}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Coupons & Order Summary */}
          <div className="space-y-6">
            
            {/* Coupon Box */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
              <div className="flex items-center space-x-2">
                <Tag className="w-5 h-5 text-[#ff6f00]" />
                <h2 className="text-sm font-bold text-gray-900">Apply Promo Code</h2>
              </div>

              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs">
                  <div className="font-semibold">
                    Code &apos;{appliedCoupon}&apos; Applied (-₹{couponDiscount})
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-red-500 hover:text-red-700 font-bold ml-2 underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter Coupon (e.g. BUPMER10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs uppercase focus:outline-none focus:border-[#ff6f00]"
                    />
                    <button
                      onClick={() => handleApplyCoupon()}
                      className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-black transition"
                    >
                      Apply
                    </button>
                  </div>

                  {couponFeedback && (
                    <p
                      className={`text-xs font-medium ${
                        couponFeedback.success ? 'text-emerald-600' : 'text-red-500'
                      }`}
                    >
                      {couponFeedback.message}
                    </p>
                  )}

                  {/* Available Coupon Quick Tap */}
                  <div
                    onClick={() => handleApplyCoupon('BUPMER10')}
                    className="cursor-pointer p-3 rounded-xl bg-orange-50/60 border border-orange-200/60 hover:bg-orange-50 transition text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#ff6f00] bg-white px-2 py-0.5 rounded border border-orange-200">
                        BUPMER10
                      </span>
                      <span className="text-[11px] font-bold text-[#ff6f00]">TAP TO APPLY</span>
                    </div>
                    <p className="text-[11px] text-gray-600 pt-1">
                      10% off upto ₹100 on minimum order of ₹849
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bill Summary */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
              <h2 className="text-sm font-bold text-gray-900 border-b pb-3">
                Order Summary
              </h2>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Total MRP</span>
                  <span className="font-semibold text-gray-800">₹{mrpTotal}</span>
                </div>
                {savingsTotal > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount on MRP</span>
                    <span>-₹{savingsTotal}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Coupon Savings</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Charges</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-extrabold text-gray-900">
                  <span>Total Payable</span>
                  <span className="text-[#ff6f00]">₹{finalTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => router.push('/checkout')}
                className="w-full py-3.5 bg-[#ff6f00] text-white font-bold text-sm rounded-xl hover:bg-[#e66400] shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-[11px] text-gray-400 flex items-center justify-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Safe & Secure Encryption Checkout</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

