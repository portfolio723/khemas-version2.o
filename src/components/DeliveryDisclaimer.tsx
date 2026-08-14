import React from 'react';

export const DeliveryDisclaimer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-neutral-100 border-t border-neutral-200 py-8 pb-24 lg:pb-12 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-neutral-500 leading-relaxed max-w-2xl mx-auto">
          *Delivery timelines and free warehouse delivery are subject to product availability, quantity, customization and destination.
        </p>
        <div className="mt-4 pt-4 border-t border-neutral-200 text-xs text-neutral-400">
          © {new Date().getFullYear()} Khemas Engineers. All rights reserved. Industrial Flow-Measuring Rotameters.
        </div>
      </div>
    </footer>
  );
};
