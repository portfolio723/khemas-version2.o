import React from 'react';
import { ProductVisual } from './ProductVisual';

interface HeroProps {
  onGetDetails: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetDetails, onRequestQuote }) => {
  return (
    <section id="hero-section" className="bg-white border-b border-neutral-200 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-xs font-medium tracking-wider text-neutral-500 uppercase mb-2">
              FLOW-MEASURING ROTAMETERS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-neutral-900 tracking-tight leading-tight sm:leading-[1.1] mb-4">
              Accurate Flow Measurement for Industrial Applications
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-6">
              Reliable rotameters for measuring liquid, gas, steam and vapour across industrial processes.
              Khemas Engineers offers Glass Tube, Metal Tube, Bypass and Purge-Type Rotameters, designed for accurate flow measurement, durable construction and dependable industrial performance.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                id="hero-details-btn"
                type="button"
                onClick={onGetDetails}
                className="px-5 py-2.5 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-neutral-400"
              >
                Get Product Details
              </button>
              <button
                id="hero-quote-btn"
                type="button"
                onClick={onRequestQuote}
                className="px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              >
                Request a Quote
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full max-w-sm aspect-4/3 sm:aspect-square bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden p-4 flex items-center justify-center shadow-xs">
              <div className="w-full h-full max-h-72">
                <ProductVisual productId="glass-tube" viewIndex={0} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
