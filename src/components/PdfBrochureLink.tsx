import React, { useState } from 'react';
import { Product } from '../types';
import { Download, X, FileText, Check, Printer } from 'lucide-react';

interface PdfBrochureProps {
  product: Product;
}

export const PdfBrochureLink: React.FC<PdfBrochureProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handlePrintOrSave = () => {
    setIsDownloading(true);
    setTimeout(() => {
      window.print();
      setIsDownloading(false);
    }, 300);
  };

  return (
    <>
      <div className="flex items-center">
        <button
          id={`brochure-btn-${product.id}`}
          type="button"
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center space-x-2 text-sm font-medium text-neutral-700 hover:text-red-700 transition-colors cursor-pointer py-1 select-none"
          title={`View & Download ${product.name} Brochure`}
        >
          {/* Adobe Style PDF Document Icon */}
          <div className="relative w-6 h-7 shrink-0 transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 32 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-xs"
            >
              {/* Document Paper with folded corner */}
              <path
                d="M2 3C2 1.34315 3.34315 0 5 0H20.5L30 9.5V35C30 36.6569 28.6569 38 27 38H5C3.34315 38 2 36.6569 2 35V3Z"
                fill="#FFFFFF"
                stroke="#D1D5DB"
                strokeWidth="1.5"
              />
              {/* Folded corner triangle */}
              <path
                d="M20 0V8C20 9.10457 20.8954 10 22 10H30L20 0Z"
                fill="#E5E7EB"
                stroke="#D1D5DB"
                strokeWidth="1"
              />
              {/* Acrobat Stylized S-curve / loop flourish */}
              <path
                d="M10 22C11.5 17 14 11 16 11C18 11 17.5 15 15.5 18.5C13.5 22 8 26 8 26C8 26 14.5 25 20.5 23C23.5 22 24.5 25 23 26C20 28 17 25 15.5 23.5"
                stroke="#DC2626"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Red Bottom PDF Badge */}
              <rect x="0" y="24" width="18" height="12" rx="2" fill="#DC2626" />
              <text
                x="9"
                y="33"
                fill="#FFFFFF"
                fontSize="7.5"
                fontWeight="bold"
                fontFamily="system-ui, -apple-system, sans-serif"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                PDF
              </text>
            </svg>
          </div>

          <span className="text-sm font-medium text-neutral-800 group-hover:text-red-700 underline-offset-4 group-hover:underline">
            Product Brochure
          </span>
        </button>
      </div>

      {/* Brochure Modal / Datasheet Viewer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div
            id={`brochure-modal-${product.id}`}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="px-5 py-4 border-b border-neutral-200 bg-neutral-900 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-red-500" />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white leading-tight">
                    Technical Brochure · {product.name}
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Khemas Engineers Industrial Product Datasheet
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handlePrintOrSave}
                  disabled={isDownloading}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-white transition-colors cursor-pointer border border-neutral-700"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close Brochure"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Printable Datasheet Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-800 printable-brochure">
              {/* Branding Header */}
              <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
                <div>
                  <span className="text-xl font-bold tracking-tight text-neutral-900">
                    KHEMAS ENGINEERS
                  </span>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                    Flow-Measuring Rotameters & Process Instrumentation
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    ISO 9001 Certified Manufacturing · Gujarat / Telangana, India
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-neutral-100 text-neutral-800 text-[11px] font-mono font-semibold px-2.5 py-1 rounded border border-neutral-200">
                    DOC-ID: KE-{product.id.toUpperCase()}-2026
                  </span>
                </div>
              </div>

              {/* Product Title & Subtitle */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">{product.name}</h2>
                <p className="text-sm font-medium text-neutral-600 mt-0.5">{product.subheading}</p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mt-2.5">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5 mb-2.5">
                  Technical Specifications
                </h4>
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <table className="w-full text-xs sm:text-sm">
                    <tbody className="divide-y divide-neutral-200">
                      {product.specifications.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/70'}>
                          <td className="py-2 px-3 font-semibold text-neutral-700 w-2/5 border-r border-neutral-200">
                            {spec.label}
                          </td>
                          <td className="py-2 px-3 text-neutral-900 font-normal">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features & Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1 text-xs text-neutral-700">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-1.5 mb-2">
                    Industrial Applications
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {product.applications}
                  </p>
                  <div className="mt-3 p-2.5 bg-neutral-50 border border-neutral-200 rounded text-[11px] text-neutral-600">
                    <span className="font-semibold text-neutral-800">Dispatch Timeline: </span>
                    {product.fasterDelivery.khemas}
                  </div>
                </div>
              </div>

              {/* Footer notes */}
              <div className="border-t border-neutral-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
                <span>For customized scale ranges or OEM inquiries: info@khemasengineers.com</span>
                <span>khemasengineers.com</span>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="px-5 py-3.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs text-neutral-500 hidden sm:inline">
                Complete engineering documentation & dimensional drawings included
              </span>
              <div className="flex items-center space-x-2.5 ml-auto">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handlePrintOrSave}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
