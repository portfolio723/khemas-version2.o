import React, { useState } from 'react';
import { QuoteFormData, QuoteFormErrors } from '../types';
import { PRODUCTS } from '../data/products';
import { CheckCircle2, Send } from 'lucide-react';

export const QuickEnquiry: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    productRequired: '',
    flowRange: '',
    quantityRequired: '',
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // Simulate brief network submission
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
    <section id="quick-enquiry" className="bg-white border-b border-neutral-200 py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tight">
            Need the Right Rotameter?
          </h2>
          <p className="text-base sm:text-lg font-medium text-neutral-700 mt-1">
            Get Technical Details, Pricing & Fast Delivery
          </p>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            Share your <strong>fluid type, flow range, pressure, temperature and connection requirement</strong>. Our team will help you select the right rotameter for your application.
          </p>
        </div>

        <div className="bg-neutral-50/80 border border-neutral-200 rounded-xl p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              <h3 className="text-lg font-medium text-neutral-900">Enquiry Submitted Successfully</h3>
              <p className="text-sm text-neutral-600 max-w-md">
                Thank you, <strong>{formData.name}</strong>. Our technical engineering team has received your enquiry for <strong>{formData.productRequired}</strong> and will contact you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    companyName: '',
                    phoneNumber: '',
                    email: '',
                    productRequired: '',
                    flowRange: '',
                    quantityRequired: '',
                  });
                }}
                className="mt-2 text-xs font-medium text-neutral-800 hover:text-neutral-950 underline underline-offset-4 cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form id="quick-enquiry-form" onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="enquiry-name" className="block text-xs font-medium text-neutral-700 mb-1">
                    Name *
                  </label>
                  <input
                    id="enquiry-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.name ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="enquiry-company" className="block text-xs font-medium text-neutral-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    id="enquiry-company"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                    placeholder="Company or Organization"
                  />
                  {errors.companyName && <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="enquiry-phone" className="block text-xs font-medium text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="enquiry-phone"
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

                {/* Email */}
                <div>
                  <label htmlFor="enquiry-email" className="block text-xs font-medium text-neutral-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="enquiry-email"
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

                {/* Product Required */}
                <div>
                  <label htmlFor="enquiry-product" className="block text-xs font-medium text-neutral-700 mb-1">
                    Product Required *
                  </label>
                  <select
                    id="enquiry-product"
                    name="productRequired"
                    required
                    value={formData.productRequired}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.productRequired ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                  >
                    <option value="">Select a Rotameter...</option>
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

                {/* Quantity Required */}
                <div>
                  <label htmlFor="enquiry-quantity" className="block text-xs font-medium text-neutral-700 mb-1">
                    Quantity Required *
                  </label>
                  <input
                    id="enquiry-quantity"
                    name="quantityRequired"
                    type="text"
                    required
                    value={formData.quantityRequired}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                      errors.quantityRequired ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                    }`}
                    placeholder="e.g. 5 units, 20 units"
                  />
                  {errors.quantityRequired && (
                    <p className="text-xs text-red-600 mt-1">{errors.quantityRequired}</p>
                  )}
                </div>
              </div>

              {/* Flow Range / Application */}
              <div>
                <label htmlFor="enquiry-flowrange" className="block text-xs font-medium text-neutral-700 mb-1">
                  Flow Range / Application *
                </label>
                <textarea
                  id="enquiry-flowrange"
                  name="flowRange"
                  rows={3}
                  required
                  value={formData.flowRange}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-neutral-900 ${
                    errors.flowRange ? 'border-red-500 bg-red-50/30' : 'border-neutral-300'
                  }`}
                  placeholder="Specify fluid media (water, air, gas, steam), operating flow rate range, pressure, temperature, or connection requirements"
                />
                {errors.flowRange && <p className="text-xs text-red-600 mt-1">{errors.flowRange}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  id="quick-enquiry-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center space-x-2 focus:outline-hidden focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 shadow-xs"
                >
                  <span>{isSubmitting ? 'Processing...' : 'Get Quote'}</span>
                  <Send className="w-4 h-4" />
                </button>

                <a
                  id="quick-enquiry-whatsapp-btn"
                  href="https://wa.me/?text=Hello%20Khemas%20Engineers%2C%20I%20would%20like%20to%20inquire%20about%20flow-measuring%20rotameters."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 rounded-lg transition-colors cursor-pointer inline-flex items-center justify-center space-x-2.5 shadow-xs"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                    alt="WhatsApp"
                    className="w-5 h-5 shrink-0 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
