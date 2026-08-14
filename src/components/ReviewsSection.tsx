import React, { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

interface ReviewItem {
  id: string;
  initials: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  verified: boolean;
  content: string;
  avatarBg?: string;
  avatarText?: string;
}

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'Plant Manager',
    location: 'Hyderabad, Telangana',
    rating: 5,
    verified: true,
    content:
      'The Glass Tube Rotameter from Khemas Engineers has been performing consistently in our pharmaceutical production line. The build quality and accuracy have met our expectations.',
    avatarBg: 'bg-rose-50 border border-rose-200/60',
    avatarText: 'text-rose-700',
  },
  {
    id: 'rev-2',
    initials: 'AP',
    name: 'Amit Patel',
    role: 'Maintenance Engineer',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    verified: true,
    content:
      'Excellent product quality and prompt delivery. The installation was straightforward, and the technical support team was very helpful throughout the process.',
    avatarBg: 'bg-rose-50 border border-rose-200/60',
    avatarText: 'text-rose-700',
  },
  {
    id: 'rev-3',
    initials: 'SR',
    name: 'Suresh Reddy',
    role: 'Production Head',
    location: 'Visakhapatnam, Andhra Pradesh',
    rating: 5,
    verified: true,
    content:
      "We've been using Khemas Glass Tube Rotameters for our process applications, and the performance has been reliable. A durable product with minimal maintenance.",
    avatarBg: 'bg-amber-50 border border-amber-200/60',
    avatarText: 'text-amber-800',
  },
  {
    id: 'rev-4',
    initials: 'VS',
    name: 'Vivek Sharma',
    role: 'Instrumentation Engineer',
    location: 'Pune, Maharashtra',
    rating: 5,
    verified: true,
    content:
      'The product is well-engineered and provides accurate flow measurement. We are satisfied with both the product quality and after-sales support.',
    avatarBg: 'bg-rose-50 border border-rose-200/60',
    avatarText: 'text-rose-700',
  },
  {
    id: 'rev-5',
    initials: 'MK',
    name: 'Manoj Kulkarni',
    role: 'Senior Project Lead',
    location: 'Navi Mumbai, Maharashtra',
    rating: 5,
    verified: true,
    content:
      'We installed Khemas Metal Tube Rotameters on high-pressure boiler lines. The high-temperature durability and analog magnetic indication are unmatched.',
    avatarBg: 'bg-blue-50 border border-blue-200/60',
    avatarText: 'text-blue-800',
  },
  {
    id: 'rev-6',
    initials: 'SN',
    name: 'Santosh Nair',
    role: 'Operations Director',
    location: 'Kochi, Kerala',
    rating: 5,
    verified: true,
    content:
      'Khemas delivered all customized flanged rotameters ahead of schedule for our chemical plant expansion. Highly recommended for industrial flow precision.',
    avatarBg: 'bg-emerald-50 border border-emerald-200/60',
    avatarText: 'text-emerald-800',
  },
  {
    id: 'rev-7',
    initials: 'DB',
    name: 'Debashis Banerjee',
    role: 'Quality Assurance Manager',
    location: 'Kolkata, West Bengal',
    rating: 5,
    verified: true,
    content:
      'Each rotameter comes with exact calibration documentation and test certificates. Makes our internal ISO audit and validation seamless.',
    avatarBg: 'bg-indigo-50 border border-indigo-200/60',
    avatarText: 'text-indigo-800',
  },
  {
    id: 'rev-8',
    initials: 'PR',
    name: 'Prakash Rao',
    role: 'Chief Engineer',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    verified: true,
    content:
      'We replaced legacy European units with Khemas Bypass Rotameters for our 6-inch main water header. Flawless repeatability and zero downtime.',
    avatarBg: 'bg-purple-50 border border-purple-200/60',
    avatarText: 'text-purple-800',
  },
  {
    id: 'rev-9',
    initials: 'NG',
    name: 'Nitin Gupta',
    role: 'Procurement Specialist',
    location: 'Faridabad, Haryana',
    rating: 5,
    verified: true,
    content:
      'Fast quote turnaround and prompt engineering assistance on special PTFE lining materials. Outstanding vendor support from inquiry to dispatch.',
    avatarBg: 'bg-teal-50 border border-teal-200/60',
    avatarText: 'text-teal-800',
  },
  {
    id: 'rev-10',
    initials: 'AD',
    name: 'Anand Deshmukh',
    role: 'Process Instrumentation Head',
    location: 'Vadodara, Gujarat',
    rating: 5,
    verified: true,
    content:
      'Purge rotameters with built-in needle valves have been running in our analyzer sampling racks for over two years without any seal leaks.',
    avatarBg: 'bg-amber-50 border border-amber-200/60',
    avatarText: 'text-amber-800',
  },
];

const RATING_BREAKDOWN = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 15 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];

export const ReviewsSection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const displayedReviews = INITIAL_REVIEWS.slice(0, visibleCount);
  const remainingCount = Math.max(0, INITIAL_REVIEWS.length - visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, INITIAL_REVIEWS.length));
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  return (
    <section
      id="customer-reviews"
      className="bg-neutral-50/60 border-t border-neutral-200/80 py-12 sm:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Client Feedback & Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mt-1">
            Verified Industry Reviews
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-1 max-w-2xl">
            Trusted by plant managers, maintenance heads, and process engineers across India.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Left Summary Card + Right Review Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Side Stack: Overall Rating Card */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900">
                    4.9
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-red-600 text-red-600"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-2">
                  Based on 286 verified reviews
                </p>

                {/* Rating Distribution Bars */}
                <div className="space-y-2.5 mt-8">
                  {RATING_BREAKDOWN.map((item) => (
                    <div key={item.stars} className="flex items-center text-xs font-medium text-neutral-600">
                      <span className="w-3 text-neutral-700">{item.stars}</span>
                      <Star className="w-3.5 h-3.5 ml-1.5 mr-3 fill-neutral-600 text-neutral-600 shrink-0" strokeWidth={0} />
                      <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-600 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-neutral-600 ml-3 text-[11px]">
                        {item.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Stack: Customer Reviews Cards */}
          <div className="lg:col-span-8 w-full flex flex-col space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {displayedReviews.map((review) => (
                <div
                  key={review.id}
                  id={review.id}
                  className="bg-white rounded-3xl p-6 border border-neutral-200/90 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors"
                >
                  <div>
                    {/* Author Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center space-x-3 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                            review.avatarBg || 'bg-rose-50 border border-rose-200/60'
                          } ${review.avatarText || 'text-rose-700'}`}
                        >
                          {review.initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-neutral-900 leading-snug truncate">
                            {review.name}
                          </h4>
                          <p className="text-[11px] text-neutral-500 leading-tight truncate">
                            {review.role} · {review.location}
                          </p>
                        </div>
                      </div>

                      {review.verified && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-emerald-700 bg-emerald-50/90 px-2 py-0.5 rounded-md shrink-0 border border-emerald-200/50">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center space-x-0.5 my-2.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-red-600 text-red-600"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* Review Paragraph */}
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mt-2">
                      {review.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center pt-2">
              {remainingCount > 0 ? (
                <button
                  id="load-more-reviews-btn"
                  type="button"
                  onClick={handleLoadMore}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-medium text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  Load More Reviews ({remainingCount} remaining)
                </button>
              ) : (
                <button
                  id="show-less-reviews-btn"
                  type="button"
                  onClick={handleShowLess}
                  className="inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-medium text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-all cursor-pointer shadow-xs active:scale-98"
                >
                  Show Less Reviews
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
