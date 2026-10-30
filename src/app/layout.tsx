import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ServiceWorkerCleaner from '@/components/ServiceWorkerCleaner';
import { storeInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: `${storeInfo.name} | Natural Wellness, Nutrition & Skincare`,
  description: storeInfo.description,
  icons: {
    icon: storeInfo.favicon,
    shortcut: storeInfo.favicon,
    apple: storeInfo.favicon,
  },
  openGraph: {
    title: storeInfo.name,
    description: storeInfo.description,
    images: [{ url: storeInfo.logo }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-[#fafafa]" suppressHydrationWarning>
        <ServiceWorkerCleaner />
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
