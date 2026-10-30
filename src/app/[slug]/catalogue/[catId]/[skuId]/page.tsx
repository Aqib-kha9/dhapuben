'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  ShoppingBag,
  Zap,
  Tag,
  Check,
  ChevronRight,
} from 'lucide-react';
import { products, Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { catId, skuId, slug } = params as { catId: string; skuId: string; slug: string };
  const { addToCart } = useCart();

  // Find product by id, slug or match
  const product =
    products.find((p) => p.id === catId || p.sku_id === skuId || p.slug === slug) ||
    products[0];

  const [selectedImage, setSelectedImage] = useState<string>(product.images[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size || product.weight);
  const [addedToast, setAddedToast] = useState(false);

  // Sync image if product changes
  React.useEffect(() => {
    if (product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].size);
    }
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize);
    router.push(`/checkout?product_id=${product.id}&sku_id=${product.sku_id}&quantity=${quantity}`);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.categories.some((c) => product.categories.includes(c)))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#0f4a73] text-white px-5 py-3 rounded-xl shadow-xl flex items-center space-x-2.5 animate-bounce">
          <Check className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold">Added to bag!</span>
        </div>
      )}

      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-6 overflow-x-auto no-scrollbar">
        <Link href="/" className="hover:text-[#ff6f00] transition">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link
          href={`/featured/all-products`}
          className="hover:text-[#ff6f00] transition whitespace-nowrap"
        >
          {product.categories[0] || 'Products'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-800 font-medium truncate max-w-xs">{product.title}</span>
      </nav>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-4 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
        
        {/* Left: Gallery */}
        <div className="flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 overflow-x-auto sm:overflow-y-auto max-h-[480px] no-scrollbar shrink-0">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 bg-gray-50 transition shrink-0 ${
                    selectedImage === img
                      ? 'border-[#ff6f00] ring-2 ring-[#ff6f00]/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.title} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Main Photo */}
          <div className="relative flex-1 aspect-square bg-[#fafafa] rounded-2xl overflow-hidden border border-gray-100 p-4 flex items-center justify-center">
            {product.discount > 0 && (
              <span className="absolute top-4 left-4 z-10 bg-[#e11d48] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                {product.discount}% OFF
              </span>
            )}
            <div className="relative w-full h-full">
              <Image
                src={selectedImage || product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
          </div>
        </div>

        {/* Right: Info & Actions */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Brand */}
            <div className="text-xs font-bold text-[#ff6f00] uppercase tracking-wider">
              DHAPUBEN WELLNESS
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md text-xs font-bold">
                <span>{product.rating}</span>
                <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600 ml-1" />
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {product.review_count} Verified Reviews & Ratings
              </span>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-gray-50/80 rounded-xl border border-gray-100 space-y-1">
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{product.selling_price}
                </span>
                {product.mrp > product.selling_price && (
                  <span className="text-base text-gray-400 line-through">
                    ₹{product.mrp}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Save ₹{product.mrp - product.selling_price} ({product.discount}%)
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-500">Inclusive of all applicable taxes</p>
            </div>

            {/* Coupon Promo Banner */}
            <div className="flex items-start space-x-2.5 p-3 bg-[#fff8f0] border border-[#ffeed6] rounded-xl text-xs text-gray-800">
              <Tag className="w-4 h-4 text-[#ff6f00] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#ff6f00]">Special Online Offer</p>
                <p className="text-gray-600">
                  Use coupon code <span className="font-bold text-gray-900 bg-white px-1.5 py-0.5 rounded border border-gray-200">BUPMER10</span> to get 10% instant off on min order of ₹849!
                </p>
              </div>
            </div>

            {/* Variant / Size Picker */}
            {product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Pack Size / Option:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(s.size)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition ${
                        selectedSize === s.size
                          ? 'border-[#ff6f00] bg-[#fff8f0] text-[#ff6f00] shadow-sm'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 rounded-lg bg-white px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-600 hover:text-[#ff6f00] p-1"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-bold px-4 text-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-600 hover:text-[#ff6f00] p-1"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Buy Now (Prominent Highlighted) & Small Cart Button */}
            <div className="flex items-center space-x-3 pt-3">
              {/* Highlighted Big BUY NOW Button */}
              <button
                onClick={handleBuyNow}
                className="flex-1 py-3.5 px-6 bg-[#ff6f00] hover:bg-[#e66400] text-white font-extrabold text-sm sm:text-base rounded-xl transition flex items-center justify-center space-x-2 shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <Zap className="w-5 h-5 fill-white" />
                <span>BUY NOW</span>
              </button>

              {/* Small subtle Add to Cart button */}
              <button
                onClick={handleAddToCart}
                title="Add to Bag"
                className="py-3.5 px-4 border-2 border-gray-300 hover:border-[#ff6f00] text-gray-700 hover:text-[#ff6f00] font-bold text-xs rounded-xl hover:bg-[#fff8f0] transition flex items-center justify-center space-x-1.5 shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Add to Bag</span>
              </button>
            </div>

            {/* Delivery & Trust Highlights */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center">
              <div className="p-2.5 rounded-lg bg-gray-50 flex flex-col items-center">
                <Truck className="w-5 h-5 text-[#ff6f00] mb-1" />
                <span className="text-[11px] font-bold text-gray-800">Fast Delivery</span>
                <span className="text-[10px] text-gray-500">3-4 business days</span>
              </div>
              <div className="p-2.5 rounded-lg bg-gray-50 flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-[#ff6f00] mb-1" />
                <span className="text-[11px] font-bold text-gray-800">100% Genuine</span>
                <span className="text-[10px] text-gray-500">Pure & natural</span>
              </div>
              <div className="p-2.5 rounded-lg bg-gray-50 flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-[#ff6f00] mb-1" />
                <span className="text-[11px] font-bold text-gray-800">Easy Returns</span>
                <span className="text-[10px] text-gray-500">Hassle-free support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details & Specifications */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Description */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-b pb-3">
              Product Description
            </h2>
            <div className="mt-4 text-xs sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {product.description || (
                <p>
                  Experience the exceptional health benefits of {product.title}. Crafted
                  with precision and natural integrity to foster your vitality, nourishment, and
                  overall well-being.
                </p>
              )}
            </div>
          </div>

          {/* Key Features Table */}
          {product.features && product.features.length > 0 && (
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                Product Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between p-2.5 bg-gray-50 rounded-lg text-xs"
                  >
                    <span className="font-semibold text-gray-600 capitalize">
                      {feat.label.replace(/_/g, ' ')}:
                    </span>
                    <span className="text-gray-900 font-medium text-right">{feat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Ratings & Breakdown */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6 h-fit">
          <h2 className="text-lg font-bold text-gray-900 border-b pb-3">
            Customer Reviews
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-extrabold text-gray-900">{product.rating}</div>
            <div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Based on {product.review_count} ratings
              </p>
            </div>
          </div>

          {/* Rating Bars */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-12 text-gray-600">5 Star</span>
              <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[85%]" />
              </div>
              <span className="text-gray-400">85%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-12 text-gray-600">4 Star</span>
              <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[12%]" />
              </div>
              <span className="text-gray-400">12%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-12 text-gray-600">3 Star</span>
              <div className="flex-1 bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full w-[3%]" />
              </div>
              <span className="text-gray-400">3%</span>
            </div>
          </div>

          {/* Verified Customer Testimonial */}
          <div className="border-t border-gray-100 pt-4 space-y-3">
            <div className="bg-gray-50 p-3 rounded-xl text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">Sunita Sharma</span>
                <span className="text-[10px] text-emerald-600 font-semibold">✓ Verified Buyer</span>
              </div>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Amazing purity and taste! Has made a notable difference in my energy and digestion. Highly recommended.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 p-3 flex items-center justify-between shadow-xl">
        <div>
          <div className="text-[11px] text-gray-500">Price:</div>
          <div className="text-base font-bold text-gray-900">
            ₹{product.selling_price * quantity}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleAddToCart}
            className="p-2.5 border border-gray-300 text-gray-700 hover:text-[#ff6f00] rounded-lg"
            title="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button
            onClick={handleBuyNow}
            className="px-6 py-2.5 bg-[#ff6f00] text-white text-xs font-extrabold rounded-lg shadow flex items-center space-x-1.5"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>BUY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
