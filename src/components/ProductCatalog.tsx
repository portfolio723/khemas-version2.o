import React, { useEffect, useState, useRef } from 'react';
import { Product } from '../types';
import { ProductNav } from './ProductNav';
import { MobileProductRail } from './MobileProductRail';
import { ProductSection } from './ProductSection';

interface ProductCatalogProps {
  products: Product[];
  onRequestQuote: (productName: string) => void;
  onActiveProductChange: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onRequestQuote,
  onActiveProductChange,
}) => {
  const [activeProductId, setActiveProductId] = useState<string>(products[0]?.id || 'glass-tube');
  const isUserScrollingRef = useRef(false);

  // Sync active product changes to parent
  useEffect(() => {
    const current = products.find((p) => p.id === activeProductId);
    if (current) {
      onActiveProductChange(current);
    }
  }, [activeProductId, products, onActiveProductChange]);

  // IntersectionObserver for scroll synchronization
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isUserScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-product-id');
          if (id) {
            setActiveProductId(id);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -45% 0px',
      threshold: [0.1, 0.3, 0.6],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.product-section');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, [products]);

  const handleSelectProduct = (productId: string) => {
    setActiveProductId(productId);
    isUserScrollingRef.current = true;

    const el = document.getElementById(productId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 800);
  };

  return (
    <section id="catalogue" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Desktop Layout (3-column Architecture) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8">
        {/* Left Sticky Product Navigation */}
        <div className="lg:col-span-3">
          <ProductNav
            products={products}
            activeProductId={activeProductId}
            onSelectProduct={handleSelectProduct}
          />
        </div>

        {/* Center + Right: Product Sections List */}
        <div className="lg:col-span-9">
          {products.map((product) => (
            <ProductSection
              key={product.id}
              product={product}
              onRequestQuote={onRequestQuote}
              isDesktop={true}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout (Sticky Rail + Content) */}
      <div className="lg:hidden flex gap-3 sm:gap-4 items-stretch">
        {/* Mobile Left Sticky Rail Container */}
        <div className="w-14 sm:w-16 shrink-0 relative">
          <MobileProductRail
            products={products}
            activeProductId={activeProductId}
            onSelectProduct={handleSelectProduct}
          />
        </div>

        {/* Mobile Main Content */}
        <div className="flex-1 min-w-0">
          {products.map((product) => (
            <ProductSection
              key={product.id}
              product={product}
              onRequestQuote={onRequestQuote}
              isDesktop={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
