import React from 'react';
import { Product } from '../types';
import { ProductVisual } from './ProductVisual';

interface MobileProductRailProps {
  products: Product[];
  activeProductId: string;
  onSelectProduct: (productId: string) => void;
}

export const MobileProductRail: React.FC<MobileProductRailProps> = ({
  products,
  activeProductId,
  onSelectProduct,
}) => {
  return (
    <aside
      aria-label="Mobile Product Selector"
      className="sticky top-20 flex flex-col items-center py-2 space-y-3 z-30"
    >
      <div className="text-[10px] font-semibold uppercase text-neutral-400 tracking-wider">
        Items
      </div>
      {products.map((product, idx) => {
        const isActive = activeProductId === product.id;
        return (
          <button
            key={product.id}
            id={`mobile-rail-${product.id}`}
            type="button"
            onClick={() => onSelectProduct(product.id)}
            aria-label={`Select ${product.name}`}
            className={`relative flex flex-col items-center justify-center p-1 rounded-lg border transition-all cursor-pointer ${
              isActive
                ? 'bg-neutral-900 border-neutral-900 shadow-xs ring-2 ring-neutral-900 ring-offset-1'
                : 'bg-white border-neutral-200 hover:border-neutral-400'
            }`}
          >
            <div
              className={`w-11 h-11 rounded-md overflow-hidden p-0.5 flex items-center justify-center ${
                isActive ? 'bg-neutral-800' : 'bg-neutral-50'
              }`}
            >
              <ProductVisual productId={product.id} viewIndex={0} className="w-full h-full" />
            </div>
            <span
              className={`text-[9px] font-medium mt-1 text-center w-12 truncate leading-tight ${
                isActive ? 'text-white font-semibold' : 'text-neutral-600'
              }`}
            >
              0{idx + 1}
            </span>
          </button>
        );
      })}
    </aside>
  );
};
