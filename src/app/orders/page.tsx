'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Package,
  CheckCircle2,
  Truck,
  Clock,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import { storeInfo } from '@/lib/data';

interface Order {
  orderId: string;
  date: string;
  items: any[];
  shippingAddress: any;
  paymentMethod: string;
  totalAmount: number;
  status: string;
  estimatedDelivery: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = JSON.parse(localStorage.getItem('dhapuben_orders') || '[]');
      if (saved && saved.length > 0) {
        setOrders(saved);
      } else {
        // Sample default order for demo
        setOrders([
          {
            orderId: 'DW-482910',
            date: '28 Oct 2026',
            status: 'Out for Delivery',
            estimatedDelivery: 'Today by 7:00 PM',
            paymentMethod: 'UPI Payment',
            totalAmount: 1448,
            shippingAddress: {
              fullName: 'Aakash Verma',
              address: 'B-204 Green Meadows, Vijay Nagar',
              city: 'Indore',
              state: 'Madhya Pradesh',
              pincode: '452010',
              phone: '9993004819',
            },
            items: [
              {
                product: {
                  id: 'cOqjoAyO6dxQ',
                  title: 'DHAPUBEN WELLNESS Pure Sea Buckthorn Concentrate SHOTS 30ML × 30 SHOTS',
                  selling_price: 999,
                  images: [
                    'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/DHAPUBEN_WELLNESS_Pure_Sea_Buckthorn_Concentrate_SHOTS__Convenient_Pure_Sea_Buckthorn__30ML___30_SHOTS__01BBLDA27O_2026-10-03_1.png',
                  ],
                  relative_url: '/DHAPUBEN-WELLNESS-Pure-Sea-Buckthorn-Concentrate-SHOTS.-Convenient-Pure-Sea/catalogue/cOqjoAyO6dxQ/X7CqR-Cw',
                },
                quantity: 1,
                selectedSize: '30ML × 30 SHOTS',
              },
              {
                product: {
                  id: '5rHpa8kH',
                  title: 'Peanut Butter Almond Crunchy | 26G Protein | Non GMO',
                  selling_price: 449,
                  images: [
                    'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/68f3481f317e68f10ef0c11c/cat_img/almond_crunchy_1761393501032_qsjwz4e9gydjn6v.jpg',
                  ],
                  relative_url: '/Peanut-Butter-Almond-Crunchy--26G-Protein---Non/catalogue/5rHpa8kH/r1BtYtOw',
                },
                quantity: 1,
                selectedSize: '500g',
              },
            ],
          },
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-semibold">My Orders</span>
      </nav>

      <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Order Tracking & History
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Check the live shipment status of your wellness orders
          </p>
        </div>
      </div>

      {!mounted ? (
        <div className="py-12 text-center text-xs text-gray-400">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-md mx-auto shadow-sm space-y-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mx-auto">
            <Package className="w-8 h-8" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">No Orders Placed Yet</h2>
          <p className="text-xs text-gray-500">
            Once you place an order, you can monitor its dispatch and live tracking status right here.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-2.5 bg-[#ff6f00] text-white font-bold text-xs rounded-xl"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-7 shadow-sm space-y-6"
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-gray-500">Order ID:</span>
                    <span className="text-base font-extrabold text-[#ff6f00]">
                      #{order.orderId}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Placed on: <strong>{order.date}</strong> • Paid via: <strong>{order.paymentMethod}</strong>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                    ● {order.status}
                  </span>
                </div>
              </div>

              {/* Tracking Progress Steps */}
              <div className="py-2">
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold mb-1 shadow-sm">
                      ✓
                    </div>
                    <span className="text-[11px] font-bold text-gray-800">Confirmed</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold mb-1 shadow-sm">
                      ✓
                    </div>
                    <span className="text-[11px] font-bold text-gray-800">Processed</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#ff6f00] text-white flex items-center justify-center text-xs font-bold mb-1 shadow-sm animate-pulse">
                      <Truck className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-[#ff6f00]">In Transit</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold mb-1">
                      4
                    </div>
                    <span className="text-[11px] font-medium text-gray-400">Delivered</span>
                  </div>
                </div>
                <div className="w-3/4 mx-auto bg-gray-200 h-1 rounded-full -mt-7 mb-7 -z-10 relative" />
              </div>

              {/* Items List */}
              <div className="space-y-3 divide-y divide-gray-100">
                {order.items.map((it, idx) => (
                  <div key={idx} className="pt-3 flex items-center space-x-4">
                    <div className="relative w-16 h-16 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100 p-1">
                      <Image
                        src={it.product.images[0] || ''}
                        alt={it.product.title}
                        fill
                        className="object-contain"
                        sizes="70px"
                      />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={it.product.relative_url || '#'}
                        className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#ff6f00] transition line-clamp-1"
                      >
                        {it.product.title}
                      </Link>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Quantity: <strong>{it.quantity}</strong> {it.selectedSize ? `• ${it.selectedSize}` : ''}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-gray-900">
                      ₹{it.product.selling_price * it.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Address & Actions Footer */}
              <div className="bg-gray-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <span className="font-bold text-gray-700 block">Shipping Address:</span>
                  <p className="text-gray-600">
                    {order.shippingAddress.fullName}, {order.shippingAddress.address},{' '}
                    {order.shippingAddress.city}, {order.shippingAddress.state} -{' '}
                    {order.shippingAddress.pincode}
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <a
                    href={`https://wa.me/919993004819?text=Hi%20Dhapuben%20Wellness,%20I%20have%20an%20inquiry%20regarding%20Order%20%23${order.orderId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 bg-emerald-600 text-white rounded-lg font-bold flex items-center space-x-1 hover:bg-emerald-700 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Help on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

