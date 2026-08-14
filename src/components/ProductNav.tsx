import React from 'react';
import { Product } from '../types';
import { ProductVisual } from './ProductVisual';

interface ProductNavProps {
  products: Product[];
  activeProductId: string;
  onSelectProduct: (productId: string) => void;
}

export const ProductNav: React.FC<ProductNavProps> = ({
  products,
  activeProductId,
  onSelectProduct,
}) => {
  return (
    <nav
      aria-label="Product Catalogue Navigation"
      className="sticky top-24 self-start flex flex-col space-y-2 z-20 pb-4"
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 px-2 mb-1">
        Products Overview
      </div>

      <div className="space-y-2">
        {products.map((product) => {
          const isActive = activeProductId === product.id;
          return (
            <button
              key={product.id}
              id={`desktop-nav-${product.id}`}
              type="button"
              onClick={() => onSelectProduct(product.id)}
              className={`w-full text-left flex items-center p-3 rounded-xl border transition-all cursor-pointer ${
                isActive
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md ring-1 ring-neutral-900'
                  : 'bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-100/90 hover:border-neutral-300 shadow-xs'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-lg shrink-0 overflow-hidden border mr-3 p-0.5 flex items-center justify-center transition-colors ${
                  isActive
                    ? 'bg-neutral-800 border-neutral-700'
                    : 'bg-neutral-50 border-neutral-200'
                }`}
              >
                <ProductVisual productId={product.id} viewIndex={0} className="w-full h-full" />
              </div>
              <div className="flex flex-col min-w-0 pr-1">
                <span className="text-sm font-medium leading-snug line-clamp-1">
                  {product.name}
                </span>
                <span className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-neutral-300' : 'text-neutral-500'}`}>
                  {product.subheading}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
