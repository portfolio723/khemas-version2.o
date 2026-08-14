import React from 'react';
import { MessageSquare, FileText } from 'lucide-react';

interface MobileStickyCTAsProps {
  onOpenQuote: () => void;
  activeProductName: string;
}

export const MobileStickyCTAs: React.FC<MobileStickyCTAsProps> = ({
  onOpenQuote,
  activeProductName,
}) => {
  // WhatsApp handler (configured for Khemas Engineers)
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Khemas Engineers, I would like technical details and a quote for ${activeProductName || 'Flow-Measuring Rotameters'}.`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="mobile-sticky-ctas"
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <button
          type="button"
          id="mobile-whatsapp-btn"
          onClick={handleWhatsApp}
          className="flex items-center justify-center space-x-2 py-3 px-3 rounded-lg border border-emerald-600 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-medium text-sm transition-colors cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </button>

        {/* Get Quote Button */}
        <button
          type="button"
          id="mobile-get-quote-btn"
          onClick={onOpenQuote}
          className="flex items-center justify-center space-x-2 py-3 px-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 font-medium text-sm transition-colors cursor-pointer shadow-xs"
        >
          <FileText className="w-4 h-4 text-neutral-300 shrink-0" />
          <span className="truncate">Get Quote</span>
        </button>
      </div>
    </div>
  );
};
