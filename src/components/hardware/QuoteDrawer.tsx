import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, MapPin, AlertCircle, ArrowRight } from 'lucide-react';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialDeviceNotes?: string;
}

export function QuoteDrawer({
  isOpen,
  onClose,
  initialProduct = 'DCN Edge Node (DCN-4R-W-24V)',
  initialDeviceNotes = '',
}: QuoteDrawerProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    product: initialProduct,
    quantity: '1-5 units',
    existingDevices: initialDeviceNotes,
    timeline: '1-3 months',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
    if (initialDeviceNotes) {
      setFormData((prev) => ({ ...prev, existingDevices: initialDeviceNotes }));
    }
  }, [initialProduct, initialDeviceNotes]);

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

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.company.trim()) errs.company = 'Please enter your company or plant name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" aria-labelledby="quote-drawer-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl bg-[#0B101B] text-[#F5F5F7] shadow-2xl h-full flex flex-col z-10 overflow-hidden transform transition-transform duration-300 ease-out border-l border-[#292D36]">
        {/* Header */}
        <div className="px-6 py-5 bg-[#050505] text-[#F5F5F7] flex items-center justify-between border-b border-[#292D36] shrink-0">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5E5] font-semibold block">
              ENGINEERING QUOTATION &amp; CONSULTATION
            </span>
            <h2 id="quote-drawer-title" className="text-xl font-medium tracking-tight text-[#F5F5F7] mt-0.5">
              Request Hardware Quotation
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-[#0B101B] hover:bg-[#151D2E] text-[#969DAA] hover:text-[#F5F5F7] flex items-center justify-center transition-colors border border-[#292D36] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00E5E5]"
            aria-label="Close quote drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#00E5E5]/10 text-[#00E5E5] flex items-center justify-center mx-auto border border-[#00E5E5]/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-light text-[#F5F5F7]">Quotation Request Received</h3>
                <p className="text-sm text-[#C2C6D0] leading-relaxed">
                  Thank you, <strong className="text-[#F5F5F7] font-semibold">{formData.fullName}</strong>. Our engineering team at Vadodara has received your hardware specification details for <strong className="text-[#F5F5F7] font-semibold">{formData.company}</strong>.
                </p>
              </div>

              {/* Response SLA Card */}
              <div className="bg-[#050505] border border-[#292D36] rounded-xl p-5 text-left text-xs space-y-3">
                <div className="flex items-center text-[#F5F5F7] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00E5E5] mr-2 animate-pulse" />
                  Direct Engineer-to-Engineer Response SLA
                </div>
                <p className="text-[#C2C6D0] leading-relaxed">
                  A hardware application engineer will review your controller compatibility and prepare a formal quotation + pinout diagram within <strong className="text-[#00E5E5]">1 business day</strong>.
                </p>
                <div className="pt-2 border-t border-[#292D36] space-y-2">
                  <div className="flex items-center text-[#C2C6D0]">
                    <Phone className="w-3.5 h-3.5 text-[#00E5E5] mr-2 shrink-0" />
                    <span>Call our engineering lab: <strong className="text-[#F5F5F7]">+91 83208 45947</strong></span>
                  </div>
                  <div className="flex items-center text-[#C2C6D0]">
                    <Mail className="w-3.5 h-3.5 text-[#00E5E5] mr-2 shrink-0" />
                    <span>Direct engineering email: <strong className="text-[#F5F5F7]">emertechelectronics@gmail.com</strong></span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#00E5E5] hover:bg-[#00E5E5]/90 text-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="bg-[#050505] border border-[#292D36] rounded-xl p-4 text-xs text-[#C2C6D0] flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-[#00E5E5]/10 border border-[#00E5E5]/30 text-[#00E5E5] flex items-center justify-center shrink-0 mt-0.5 font-bold font-mono text-[10px]">
                  i
                </div>
                <div className="leading-relaxed">
                  Direct factory pricing from our Vadodara design &amp; manufacturing facility. Every hardware unit is pre-configured and tested for your plant protocols before dispatch.
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Full Name <span className="text-[#00E5E5]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#050505] text-[#F5F5F7] placeholder:text-[#969DAA] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[#41434A]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Company / Plant Name <span className="text-[#00E5E5]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. LM Wind Power / Suzlon"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#050505] text-[#F5F5F7] placeholder:text-[#969DAA] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                      errors.company ? 'border-red-500' : 'border-[#41434A]'
                    }`}
                  />
                  {errors.company && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.company}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Work Email <span className="text-[#00E5E5]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#050505] text-[#F5F5F7] placeholder:text-[#969DAA] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-[#41434A]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Phone Number <span className="text-[#00E5E5]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#050505] text-[#F5F5F7] placeholder:text-[#969DAA] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-[#41434A]'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" /> {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Hardware Selection & Quantity */}
              <div className="space-y-4 pt-2 border-t border-[#292D36]">
                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Hardware of Interest
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#41434A] bg-[#050505] text-[#F5F5F7] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5]"
                  >
                    <option value="DCN Edge Node (DCN-4R-W-24V)">DCN Edge Node (RS485 Edge Data Collector)</option>
                    <option value="Multi-Zone Heat Controller (HC-4Z-230V-SOP)">Multi-Zone Heat Controller (4-Zone Blanket Power &amp; Trip)</option>
                    <option value="Complete System: DCN + Heat Controller + Fluxora">Complete System (DCN + Heat Controller + Fluxora Software)</option>
                    <option value="Custom Hardware / OEM Solution">Custom Hardware / OEM Solution</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                      Estimated Quantity
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['1-5 units', '6-20 units', '20+ units', 'Exploring'].map((qty) => (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setFormData({ ...formData, quantity: qty })}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors text-center ${
                            formData.quantity === qty
                              ? 'bg-[#00E5E5]/10 border-[#00E5E5] text-[#00E5E5] font-semibold'
                              : 'bg-[#050505] border-[#292D36] text-[#C2C6D0] hover:border-[#41434A] hover:text-[#F5F5F7]'
                          }`}
                        >
                          {qty}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                      Implementation Timeline
                    </label>
                    <div className="grid grid-cols-1 gap-1.5">
                      {[
                        { id: 'Immediate (<1 mo)', label: 'Immediate (< 1 month)' },
                        { id: '1-3 months', label: '1 to 3 months' },
                        { id: 'Budgetary', label: 'Planning / Budgetary' },
                      ].map((t) => (
                        <label
                          key={t.id}
                          className={`flex items-center px-3 py-1.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                            formData.timeline === t.id
                              ? 'bg-[#00E5E5]/10 border-[#00E5E5] text-[#F5F5F7] font-medium'
                              : 'border-[#292D36] bg-[#050505] text-[#C2C6D0] hover:border-[#41434A]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeline"
                            checked={formData.timeline === t.id}
                            onChange={() => setFormData({ ...formData, timeline: t.id })}
                            className="accent-[#00E5E5] mr-2"
                          />
                          <span>{t.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Existing Controllers / Meters In Plant (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.existingDevices}
                    onChange={(e) => setFormData({ ...formData, existingDevices: e.target.value })}
                    placeholder="e.g. Autonics TK4S, Selec MFM384, Schneider EM6400"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#41434A] bg-[#050505] text-[#F5F5F7] placeholder:text-[#969DAA] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5]"
                  />
                  <span className="text-[11px] text-[#969DAA] mt-1 block">
                    Our engineers will verify pinout compatibility for your exact model numbers.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C2C6D0] uppercase tracking-wide mb-1.5">
                    Technical Requirements / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention number of heating zones, cable distances, or specific panel constraints..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#41434A] bg-[#050505] text-[#F5F5F7] placeholder:text-[#969DAA] focus:outline-none focus:border-[#00E5E5] focus:ring-1 focus:ring-[#00E5E5]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#292D36] flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-medium text-[#C2C6D0] hover:text-[#F5F5F7] border border-[#41434A] rounded-lg hover:bg-[#151D2E] transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center px-6 py-2.5 bg-[#00E5E5] hover:bg-[#00E5E5]/90 disabled:opacity-50 text-black text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5E5]"
                >
                  {submitting ? (
                    <span className="flex items-center">
                      <span className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                      Submitting to Engineering...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Request <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer info strip */}
        <div className="p-4 bg-[#050505] border-t border-[#292D36] text-[11px] text-[#969DAA] flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#00E5E5]" />
            <span>Vadodara, Gujarat, India</span>
          </div>
          <span className="font-mono text-[#969DAA]">Response within 24h</span>
        </div>
      </div>
    </div>
  );
}
