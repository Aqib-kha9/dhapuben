'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Star } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const { addToCart } = useCart();

  const mainImage =
    product.images[0] ||
    'https://d1311wbk6unapo.cloudfront.net/NushopWebsiteAsset/tr:w-300,,f-webp,fo-auto/68f3481f317e68f10ef0c11c_logo_4HQQ6K3B5L_2025-10-30';

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    router.push(`/checkout?product_id=${product.id}&sku_id=${product.sku_id}&quantity=1`);
  };

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition flex flex-col justify-between h-full shadow-xs">
      {/* Product Image & Badges */}
      <div className="relative w-full pt-[100%] bg-white p-3 overflow-hidden">
        {/* Discount Badge (Matching Screenshot: Rounded red badge e.g. 55% OFF) */}
        {product.discount > 0 && (
          <div className="absolute top-2.5 left-2.5 z-10 bg-[#e11d48] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-xs">
            {product.discount}% OFF
          </div>
        )}

        <Link href={product.relative_url} className="absolute inset-0 flex items-center justify-center p-3">
          <div className="relative w-full h-full">
            <Image
              src={mainImage}
              alt={product.title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </Link>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white border-t border-gray-50">
        <div>
          {/* Title */}
          <Link href={product.relative_url}>
            <h3
              title={product.title}
              className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-1 hover:text-[#ff6f00] transition leading-snug"
            >
              {product.title}
            </h3>
          </Link>

          {/* Rating matching screenshot: ★ 4.4 Brand Rating */}
          <div className="flex items-center space-x-1 mt-1 text-[11px] text-[#ff7a00] font-medium">
            <Star className="w-3 h-3 fill-[#ff7a00] text-[#ff7a00]" />
            <span className="font-bold">{product.rating || '4.4'}</span>
            <span className="text-[10px] text-[#ff8c21]">Brand Rating</span>
          </div>
        </div>

        {/* Pricing & Direct Buy Now Action */}
        <div className="mt-2 pt-1">
          <div className="flex items-baseline space-x-1.5 mb-2 flex-wrap">
            <span className="text-sm sm:text-base font-extrabold text-gray-900">
              ₹{product.selling_price}
            </span>
            {product.mrp > product.selling_price && (
              <span className="text-[11px] sm:text-xs text-gray-400 line-through">
                ₹{product.mrp}
              </span>
            )}
            {product.discount > 0 && (
              <span className="text-[11px] sm:text-xs font-bold text-[#ff6f00]">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Direct Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="w-full py-2 px-3 bg-[#ff6f00] hover:bg-[#e66400] text-white font-bold text-xs uppercase tracking-wider rounded-md flex items-center justify-center shadow-xs hover:shadow transition active:scale-[0.98]"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}
