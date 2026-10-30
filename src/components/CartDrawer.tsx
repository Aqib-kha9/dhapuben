'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Tag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    savingsTotal,
    shippingFee,
    couponDiscount,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isCartDrawerOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode) return;
    const res = applyCoupon(couponCode);
    setCouponMsg({ type: res.success ? 'success' : 'error', text: res.message });
    if (res.success) setCouponCode('');
  };

  const amountNeededForFreeShipping = Math.max(0, 849 - subtotal);
  const freeShippingPercent = Math.min(100, Math.round((subtotal / 849) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#ff6f00]" />
              <h2 className="text-base font-bold text-gray-900">Your Shopping Bag ({items.length})</h2>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#fff8f0] px-4 py-2.5 border-b border-[#ffeed6] text-xs">
            {amountNeededForFreeShipping > 0 ? (
              <div>
                <p className="text-gray-700 font-medium">
                  Add <span className="font-bold text-[#ff6f00]">₹{amountNeededForFreeShipping}</span> more to get <span className="font-bold text-emerald-600">FREE Shipping</span>!
                </p>
                <div className="w-full bg-gray-200 h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#ff6f00] h-full rounded-full transition-all duration-300"
                    style={{ width: `${freeShippingPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center text-emerald-700 font-semibold space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Congratulations! You qualify for FREE Delivery</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-800">Your bag is empty</h3>
                <p className="text-xs text-gray-500 max-w-xs">
                  Discover our pure and natural wellness supplements and nourishment essentials.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="mt-2 px-5 py-2 bg-[#ff6f00] text-white text-xs font-bold rounded-lg hover:bg-[#e66400] transition"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex space-x-3 bg-white p-3 border border-gray-100 rounded-xl shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <Image
                      src={item.product.images[0] || ''}
                      alt={item.product.title}
                      fill
                      className="object-contain p-1"
                      sizes="80px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-gray-800 line-clamp-2 pr-2">
                          {item.product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-baseline space-x-2 mt-1">
                        <span className="text-xs font-bold text-gray-900">
                          ₹{item.product.selling_price}
                        </span>
                        {item.product.mrp > item.product.selling_price && (
                          <span className="text-[11px] text-gray-400 line-through">
                            ₹{item.product.mrp}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-md bg-gray-50 px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-gray-600 hover:text-[#ff6f00] p-0.5"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-2.5 text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-gray-600 hover:text-[#ff6f00] p-0.5"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-3">
              {/* Coupon Row */}
              <div className="space-y-1.5">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-lg text-xs">
                    <div className="flex items-center space-x-1.5 font-semibold">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Coupon &apos;{appliedCoupon}&apos; Applied (-₹{couponDiscount})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-red-500 hover:text-red-700 font-bold ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Coupon Code (e.g. BUPMER10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-xs uppercase focus:outline-none focus:border-[#ff6f00] bg-white"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-gray-800 text-white text-xs font-bold rounded-lg hover:bg-black transition"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponMsg && (
                  <p
                    className={`text-[11px] font-medium ${
                      couponMsg.type === 'success' ? 'text-emerald-600' : 'text-red-500'
                    }`}
                  >
                    {couponMsg.text}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1 text-xs text-gray-600 pt-2 border-t border-gray-200">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>
                {savingsTotal > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Retail Savings</span>
                    <span>-₹{savingsTotal}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Coupon Discount</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total Amount</span>
                  <span className="text-[#ff6f00] text-base">₹{finalTotal}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-full py-3 bg-[#ff6f00] text-white text-center font-bold text-sm rounded-xl hover:bg-[#e66400] shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bag"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-full py-2 bg-white border border-gray-300 text-gray-700 text-center font-semibold text-xs rounded-xl hover:bg-gray-50 transition block"
                >
                  View Full Cart & Offers
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

