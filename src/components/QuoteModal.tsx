import React, { useState, useEffect, useRef } from 'react';
import { QuoteFormData, QuoteFormErrors } from '../types';
import { PRODUCTS } from '../data/products';
import { X, CheckCircle2, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    productRequired: initialProduct || '',
    flowRange: '',
    quantityRequired: '',
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const initialInputRef = useRef<HTMLInputElement>(null);

  // Update initialProduct if prop changes or when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        productRequired: initialProduct || prev.productRequired || '',
      }));
      setIsSubmitted(false);
      setErrors({});
      // Focus first input
      setTimeout(() => {
        initialInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, initialProduct]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: QuoteFormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.companyName.trim()) errs.companyName = 'Please enter company name';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Please enter phone number';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Please enter a valid email';
    if (!formData.productRequired) errs.productRequired = 'Please select a product';
    if (!formData.flowRange.trim()) errs.flowRange = 'Please enter flow range / application';
    if (!formData.quantityRequired.trim()) errs.quantityRequired = 'Please specify quantity';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div
      id="quote-modal-overlay"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        id="quote-modal-container"
        className="w-full sm:max-w-lg bg-white rounded-t-2xl sm:rounded-xl shadow-xl border border-neutral-200 max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
          <div>
            <h2 id="modal-title" className="text-lg font-medium text-neutral-900">
              Get a Quote
            </h2>
            <p className="text-xs text-neutral-500">
              Khemas Engineers • Industrial Flow-Measuring Rotameters
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              <h3 className="text-lg font-medium text-neutral-900">Quote Request Received</h3>
              <p className="text-sm text-neutral-600 max-w-sm">
                Thank you, <strong>{formData.name}</strong>. Our engineering sales department will review your specifications for <strong>{formData.productRequired}</strong> and send an official quote promptly.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form id="quote-modal-form" onSubmit={handleSubmit} noValidate className="space-y-3.5">
              {/* Name */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-medium text-neutral-700 mb-1">
                  Name *
                </label>
                <input
                  ref={initialInputRef}
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                    errors.name ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                  }`}
                  placeholder="Your Full Name"
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="modal-company" className="block text-xs font-medium text-neutral-700 mb-1">
                  Company Name *
                </label>
                <input
                  id="modal-company"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                    errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                  }`}
                  placeholder="Organization or Plant Name"
                />
                {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.phoneNumber ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-neutral-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Product Required & Quantity Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-product" className="block text-xs font-medium text-neutral-700 mb-1">
                    Product Required *
                  </label>
                  <select
                    id="modal-product"
                    name="productRequired"
                    required
                    value={formData.productRequired}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.productRequired ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                  >
                    <option value="">Select Rotameter...</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  {errors.productRequired && (
                    <p className="text-xs text-red-600 mt-1">{errors.productRequired}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-quantity" className="block text-xs font-medium text-neutral-700 mb-1">
                    Quantity Required *
                  </label>
                  <input
                    id="modal-quantity"
                    name="quantityRequired"
                    type="text"
                    required
                    value={formData.quantityRequired}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.quantityRequired ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                    placeholder="e.g. 10 units"
                  />
                  {errors.quantityRequired && (
                    <p className="text-xs text-red-600 mt-1">{errors.quantityRequired}</p>
                  )}
                </div>
              </div>

              {/* Flow Range / Application */}
              <div>
                <label htmlFor="modal-flowrange" className="block text-xs font-medium text-neutral-700 mb-1">
                  Flow Range / Application *
                </label>
                <textarea
                  id="modal-flowrange"
                  name="flowRange"
                  rows={3}
                  required
                  value={formData.flowRange}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                    errors.flowRange ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                  }`}
                  placeholder="Specify fluid media, flow range, pressure, temperature, or connection details"
                />
                {errors.flowRange && <p className="text-xs text-red-600 mt-1">{errors.flowRange}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="modal-submit-quote-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center space-x-2 focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
                >
                  <span>{isSubmitting ? 'Processing...' : 'Get Quote'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
