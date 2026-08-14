import React, { useState, useEffect, useRef } from 'react';
import { ProductImage } from '../types';
import { ProductVisual } from './ProductVisual';
import { ChevronLeft, ChevronRight, Hand } from 'lucide-react';

interface ProductGalleryProps {
  productId: string;
  images: ProductImage[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  productId,
  images,
  productName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showGestureHint, setShowGestureHint] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset index when product changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [productId]);

  // Hide gesture hint after 6 seconds or upon user interaction
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setShowGestureHint(false);
    }, 6000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleDismissGesture = () => {
    if (showGestureHint) {
      setShowGestureHint(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  };

  const handlePrev = () => {
    handleDismissGesture();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    handleDismissGesture();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    handleDismissGesture();
    setCurrentIndex(index);
  };

  // Touch swipe handling
  const minSwipeDistance = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="flex flex-col w-full">
      {/* Main Image Container */}
      <div
        className="relative w-full aspect-square bg-white rounded-xl border border-neutral-200 overflow-hidden select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full h-full p-4 flex items-center justify-center">
          <ProductVisual
            productId={productId}
            viewIndex={currentIndex}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label={`Previous image for ${productName}`}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-neutral-800 border border-neutral-300 shadow-xs transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-neutral-800"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label={`Next image for ${productName}`}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-neutral-800 border border-neutral-300 shadow-xs transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-neutral-800"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Mobile Swipe Gesture Hint */}
        {showGestureHint && (
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center pointer-events-none sm:hidden">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-neutral-900/80 text-white rounded-full text-xs backdrop-blur-xs animate-pulse">
              <Hand className="w-3.5 h-3.5" />
              <span>Swipe to explore views</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Thumbnails (Hover / Click to preview main view) */}
      <div
        className="grid grid-cols-4 gap-2 sm:gap-2.5 mt-3 sm:mt-4"
        role="tablist"
        aria-label={`Views for ${productName}`}
      >
        {images.map((img, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={img.id}
              id={`thumb-${productId}-${idx}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`View ${idx + 1} of ${images.length}: ${img.title}`}
              onMouseEnter={() => {
                handleDismissGesture();
                setCurrentIndex(idx);
              }}
              onClick={() => {
                handleDismissGesture();
                setCurrentIndex(idx);
              }}
              onFocus={() => {
                handleDismissGesture();
                setCurrentIndex(idx);
              }}
              className={`relative aspect-square w-full rounded-lg sm:rounded-xl border p-1 sm:p-1.5 flex items-center justify-center transition-all cursor-pointer focus:outline-hidden ${
                isActive
                  ? 'border-neutral-900 ring-2 ring-neutral-900 bg-white shadow-xs'
                  : 'border-neutral-200 bg-neutral-50/80 hover:border-neutral-400 hover:bg-white opacity-70 hover:opacity-100'
              }`}
            >
              <ProductVisual
                productId={productId}
                viewIndex={idx}
                className="w-full h-full object-contain pointer-events-none"
              />
            </button>
          );
        })}
      </div>

      {/* Caption / Technical View Details */}
      <div className="mt-2 text-center px-2">
        <p className="text-xs font-medium text-neutral-800">{currentImage.title}</p>
        <p className="text-[11px] text-neutral-500 line-clamp-1">{currentImage.caption}</p>
      </div>
    </div>
  );
};
