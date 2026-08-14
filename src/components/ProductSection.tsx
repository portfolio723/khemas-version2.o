import React from 'react';
import { Product } from '../types';
import { ProductGallery } from './ProductGallery';
import { ArrowRight, Clock, Truck } from 'lucide-react';

interface ProductSectionProps {
  product: Product;
  onRequestQuote: (productName: string) => void;
  isDesktop?: boolean;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  product,
  onRequestQuote,
}) => {
  return (
    <article
      id={product.anchorId}
      data-product-id={product.id}
      className="product-section border-b border-neutral-200 py-10 lg:py-16 scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Center Sticky Image Gallery on Desktop / Inline on Mobile */}
        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <ProductGallery
            productId={product.id}
            images={product.images}
            productName={product.name}
          />
        </div>

        {/* Right Technical Information Column */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          {/* Header & Subtitle */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight leading-tight">
              {product.name}
            </h2>
            <p className="text-sm sm:text-base font-medium text-neutral-600 mt-1">
              {product.subheading}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
            {product.description}
          </p>

          {/* Specifications */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Specifications
            </h3>

            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-hidden border border-neutral-200 rounded-lg">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-neutral-200">
                  {product.specifications.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/70'}
                    >
                      <td className="py-2 px-3 font-medium text-neutral-700 w-2/5 border-r border-neutral-200">
                        {spec.label}
                      </td>
                      <td className="py-2 px-3 text-neutral-900 font-normal">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Pairs */}
            <div className="sm:hidden divide-y divide-neutral-200 border border-neutral-200 rounded-lg overflow-hidden bg-white">
              {product.specifications.map((spec, i) => (
                <div key={i} className="p-2.5 flex flex-col">
                  <span className="text-xs font-medium text-neutral-500">
                    {spec.label}
                  </span>
                  <span className="text-sm text-neutral-900 font-normal mt-0.5">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials (if supplied) */}
          {product.materials && product.materials.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Materials
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-800">
                {product.materials.map((mat, i) => (
                  <li key={i} className="leading-snug">
                    {mat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Accessories (if supplied) */}
          {product.accessories && product.accessories.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Accessories & Options
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-800">
                {product.accessories.map((acc, i) => (
                  <li key={i} className="leading-snug">
                    {acc}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Features
            </h3>
            <ul className="space-y-1.5 text-sm text-neutral-800">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-neutral-400 mr-2 select-none">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Faster Delivery & Free Warehouse Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {/* Faster Delivery */}
            <div className="p-3.5 bg-neutral-100/80 border border-neutral-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-1 text-neutral-900 font-medium text-xs uppercase tracking-wide">
                <Clock className="w-3.5 h-3.5 text-neutral-700" />
                <span>Faster Delivery</span>
              </div>
              <div className="text-xs text-neutral-600 space-y-0.5">
                <div>
                  <span className="font-normal">Market Standard: </span>
                  <span className="text-neutral-700">{product.fasterDelivery.marketStandard}</span>
                </div>
                <div className="font-medium text-neutral-900">
                  <span>Khemas Engineers: </span>
                  <span className="text-neutral-950 font-semibold">{product.fasterDelivery.khemas}</span>
                </div>
              </div>
            </div>

            {/* Free Warehouse Delivery */}
            <div className="p-3.5 bg-neutral-100/80 border border-neutral-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-1 text-neutral-900 font-medium text-xs uppercase tracking-wide">
                <Truck className="w-3.5 h-3.5 text-neutral-700" />
                <span>Free Warehouse Delivery</span>
              </div>
              <p className="text-xs text-neutral-700 leading-snug">
                {product.freeWarehouseDelivery}
              </p>
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-1 pt-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Applications
            </h3>
            <p className="text-sm text-neutral-800 leading-relaxed">
              {product.applications}
            </p>
          </div>

          {/* Section CTA */}
          <div className="pt-2">
            <button
              id={`quote-btn-${product.id}`}
              type="button"
              onClick={() => onRequestQuote(product.name)}
              className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
