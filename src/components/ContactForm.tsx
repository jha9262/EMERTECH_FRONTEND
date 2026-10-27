import React, { useState } from 'react';
import { Send, CheckCircle2, HelpCircle, Settings, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { validateContactForm, generateMailtoLink, ContactFormValues } from '../utils/product-utils';

interface ContactFormProps {
  initialProduct?: string;
}

export function ContactForm({ initialProduct = 'DCN & Heat Controller' }: ContactFormProps) {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    productInterest: initialProduct,
    inquiryType: 'Technical Demonstration',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);
  const [showConfigGuide, setShowConfigGuide] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formValues);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    if (endpointUrl && endpointUrl.startsWith('http')) {
      fetch(endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formValues),
      })
        .then(() => {
          setSubmittedData(formValues);
        })
        .catch((err) => {
          console.error('Submission failed', err);
          openMailto();
        });
      return;
    }

    openMailto();
    setSubmittedData(formValues);
  };

  const openMailto = () => {
    const mailto = generateMailtoLink(
      COMPANY_INFO.email,
      `[Emertech Enquiry] ${formValues.inquiryType} - ${formValues.productInterest}`,
      [
        { label: 'Sender Name', value: formValues.fullName },
        { label: 'Company', value: formValues.companyName || 'Not specified' },
        { label: 'Email', value: formValues.email },
        { label: 'Phone', value: formValues.phone || 'Not specified' },
        { label: 'Product Interest', value: formValues.productInterest },
        { label: 'Inquiry Type', value: formValues.inquiryType },
        { label: 'Requirements / Message', value: formValues.message },
      ]
    );
    window.location.href = mailto;
  };

  return (
    <div className="bg-[#0B101B] rounded-2xl border border-[#292D36] shadow-xl p-6 sm:p-8">
      <div className="mb-6 pb-4 border-b border-[#292D36] flex items-center justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#F5F5F7]">
            Send an Enquiry
          </h3>
          <p className="text-xs text-[#969DAA] mt-0.5">
            Directly transmitted to Emertech Electronics engineering desk in Vadodara.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowConfigGuide(!showConfigGuide)}
          className="text-xs text-[#969DAA] hover:text-[#00E5E5] flex items-center space-x-1 p-1.5 rounded hover:bg-[#050505] transition-colors cursor-pointer"
          title="Configure webhook CRM endpoint"
        >
          <Settings className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Settings</span>
        </button>
      </div>

      {showConfigGuide && (
        <div className="mb-6 p-4 bg-[#050505] border border-[#292D36] rounded-xl text-xs space-y-2">
          <div className="font-semibold text-[#F5F5F7] flex items-center space-x-1.5">
            <HelpCircle className="w-4 h-4 text-[#00E5E5]" />
            <span>Static Contact Form Endpoint Configuration</span>
          </div>
          <p className="text-[#C2C6D0] leading-relaxed">
            By default, submitting launches your default email client pre-filled with all project details addressed to <code className="font-mono bg-[#0B101B] text-[#00E5E5] px-1 py-0.5 border border-[#292D36] rounded">{COMPANY_INFO.email}</code>. To route inquiries to an automated webhook (e.g. Formspree or HubSpot):
          </p>
          <div className="flex items-center space-x-2 pt-1">
            <input
              type="url"
              placeholder="https://formspree.io/f/your_form_id"
              value={endpointUrl}
              onChange={(e) => setEndpointUrl(e.target.value)}
              className="flex-1 px-3 py-1.5 bg-[#080D18] border border-[#41434A] rounded text-xs font-mono text-[#F5F5F7] focus:ring-1 focus:ring-[#00E5E5] focus:border-[#00E5E5]"
            />
          </div>
        </div>
      )}

      {submittedData ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-12 h-12 bg-[#00E5E5]/10 text-[#00E5E5] border border-[#00E5E5]/30 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-[#F5F5F7]">
              Enquiry Prepared &amp; Email Client Launched
            </h4>
            <p className="text-xs text-[#C2C6D0] mt-1 max-w-md mx-auto">
              Your inquiry has been compiled and transferred to your email application addressed to <strong className="text-[#F5F5F7]">{COMPANY_INFO.email}</strong>.
            </p>
          </div>

          <div className="bg-[#050505] p-4 rounded-xl border border-[#292D36] max-w-md mx-auto text-left text-xs font-mono space-y-1 text-[#C2C6D0]">
            <div><span className="text-[#969DAA]">Name:</span> {submittedData.fullName}</div>
            <div><span className="text-[#969DAA]">Product:</span> {submittedData.productInterest}</div>
            <div><span className="text-[#969DAA]">Email:</span> {submittedData.email}</div>
            <div><span className="text-[#969DAA]">Phone:</span> {submittedData.phone || 'N/A'}</div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSubmittedData(null)}
              className="px-4 py-2 text-xs font-medium text-[#F5F5F7] bg-[#050505] hover:bg-[#080D18] border border-[#41434A] hover:border-[#00E5E5] rounded-lg cursor-pointer transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formValues.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Patel"
                className={`w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] placeholder-[#969DAA]/60 border rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                  errors.fullName ? 'border-red-500 bg-red-950/20' : 'border-[#41434A]'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Corporate Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
                Corporate Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formValues.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] placeholder-[#969DAA]/60 border rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                  errors.email ? 'border-red-500 bg-red-950/20' : 'border-[#41434A]'
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
                Phone Number <span className="text-[#969DAA] font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] placeholder-[#969DAA]/60 border rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                  errors.phone ? 'border-red-500 bg-red-950/20' : 'border-[#41434A]'
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formValues.companyName}
                onChange={handleChange}
                placeholder="e.g. Apex Engineering Ltd"
                className="w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] placeholder-[#969DAA]/60 border border-[#41434A] rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Product Interest Selector */}
            <div>
              <label htmlFor="productInterest" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
                Product Interest
              </label>
              <select
                id="productInterest"
                name="productInterest"
                value={formValues.productInterest}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] border border-[#41434A] rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5]"
              >
                <option value="DCN & Heat Controller">DCN &amp; Heat Controller</option>
                <option value="Fluxora">Fluxora (Blade Heating System)</option>
                <option value="Equipoise">Equipoise (Blade Balancing)</option>
                <option value="Smolder">Smolder (Fire &amp; Siren Control)</option>
                <option value="Postern">Postern (Emergency Door Control)</option>
                <option value="Clime">Clime (Energy Monitoring)</option>
                <option value="Manifest">Manifest (Asset Tracking)</option>
                <option value="Foundry">Foundry (Production ERP)</option>
                <option value="Herald">Herald (Communication Gateway)</option>
                <option value="Census">Census (Video Analytics)</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formValues.inquiryType}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] border border-[#41434A] rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5]"
              >
                <option value="Commercial Quotation">Commercial Quotation (RFQ)</option>
                <option value="Technical Demonstration">Technical Demonstration</option>
                <option value="Model Data Sheet Request">Specification Sheet Request</option>
                <option value="Pilot Plant Retrofit Evaluation">Pilot Plant Retrofit Evaluation</option>
                <option value="General Corporate Inquiry">General Corporate Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#C2C6D0] mb-1">
              Message &amp; Project Requirements <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formValues.message}
              onChange={handleChange}
              placeholder="Describe your site parameters, number of dispensers or meters, heating mould size, or software requirements..."
              className={`w-full px-3.5 py-2 text-sm bg-[#050505] text-[#F5F5F7] placeholder-[#969DAA]/60 border rounded-lg focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                errors.message ? 'border-red-500 bg-red-950/20' : 'border-[#41434A]'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#00E5E5] via-[#087BFF] to-[#A855F7] hover:opacity-95 rounded-lg transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>Submit Project Enquiry</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
