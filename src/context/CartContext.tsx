'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/data';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  mrpTotal: number;
  savingsTotal: number;
  shippingFee: number;
  appliedCoupon: string | null;
  couponDiscount: number;
  finalTotal: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dhapuben_cart');
      if (saved) {
        setItems(JSON.parse(saved));
      }
      const savedCoupon = localStorage.getItem('dhapuben_coupon');
      if (savedCoupon) {
        setAppliedCoupon(savedCoupon);
      }
    } catch (e) {
      console.error('Failed reading cart from localStorage', e);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem('dhapuben_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed saving cart', e);
    }
  }, [items, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    if (appliedCoupon) {
      localStorage.setItem('dhapuben_coupon', appliedCoupon);
    } else {
      localStorage.removeItem('dhapuben_coupon');
    }
  }, [appliedCoupon, isInitialized]);

  const addToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prev, { product, quantity, selectedSize: selectedSize || product.sizes[0]?.size }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.selling_price * item.quantity,
    0
  );

  const mrpTotal = items.reduce(
    (sum, item) => sum + item.product.mrp * item.quantity,
    0
  );

  const savingsTotal = mrpTotal - subtotal;

  // Free shipping on order >= 849, else 49
  const shippingFee = subtotal >= 849 || subtotal === 0 ? 0 : 49;

  let couponDiscount = 0;
  if (appliedCoupon === 'BUPMER10') {
    if (subtotal >= 849) {
      couponDiscount = Math.min(100, Math.round(subtotal * 0.1));
    }
  } else if (appliedCoupon === 'SAVE50') {
    couponDiscount = Math.round(subtotal * 0.05);
  }

  const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee);

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'BUPMER10') {
      if (subtotal < 849) {
        return { success: false, message: 'Minimum order amount of ₹849 required for BUPMER10' };
      }
      setAppliedCoupon('BUPMER10');
      return { success: true, message: 'Coupon BUPMER10 applied! You saved 10%.' };
    }
    if (clean === 'SAVE50') {
      setAppliedCoupon('SAVE50');
      return { success: true, message: 'Coupon SAVE50 applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try BUPMER10.' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        mrpTotal,
        savingsTotal,
        shippingFee,
        appliedCoupon,
        couponDiscount,
        finalTotal,
        applyCoupon,
        removeCoupon,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

