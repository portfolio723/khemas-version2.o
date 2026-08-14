/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { QuickEnquiry } from './components/QuickEnquiry';
import { DeliveryDisclaimer } from './components/DeliveryDisclaimer';
import { QuoteModal } from './components/QuoteModal';
import { MobileStickyCTAs } from './components/MobileStickyCTAs';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string>('');
  const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0]);

  const handleOpenQuote = (productName?: string) => {
    setSelectedQuoteProduct(productName || activeProduct?.name || PRODUCTS[0].name);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  const handleScrollToCatalogue = () => {
    const el = document.getElementById('catalogue') || document.getElementById('glass-tube');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col selection:bg-neutral-200 selection:text-neutral-900">
      {/* Top Header */}
      <Header onRequestQuote={() => handleOpenQuote()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Compact Hero */}
        <Hero
          onGetDetails={handleScrollToCatalogue}
          onRequestQuote={() => handleOpenQuote()}
        />

        {/* Product Catalogue with Sticky Navigation and Gallery */}
        <ProductCatalog
          products={PRODUCTS}
          onRequestQuote={handleOpenQuote}
          onActiveProductChange={setActiveProduct}
        />

        {/* Quick Enquiry Section */}
        <QuickEnquiry />
      </main>

      {/* Delivery Disclaimer & Footer */}
      <DeliveryDisclaimer />

      {/* Persistent Mobile CTAs */}
      <MobileStickyCTAs
        onOpenQuote={() => handleOpenQuote(activeProduct?.name)}
        activeProductName={activeProduct?.name}
      />

      {/* Quote Request Modal / Bottom Sheet */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialProduct={selectedQuoteProduct}
      />
    </div>
  );
}
