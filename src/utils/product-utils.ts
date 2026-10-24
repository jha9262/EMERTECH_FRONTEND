import { HARDWARE_PRODUCTS, ProductFamily } from '../data/products';
import { SOFTWARE_PRODUCTS, SoftwareProduct } from '../data/software';
import { VERIFIED_SERVICES, IndustrialService } from '../data/services';

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  productInterest: string;
  inquiryType: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormValues, string>>;
}

export function getAllHardware(): ProductFamily[] {
  return HARDWARE_PRODUCTS;
}

// Alias for compatibility
export function getAllProducts(): ProductFamily[] {
  return HARDWARE_PRODUCTS;
}

export function getHardwareBySlug(slug: string): ProductFamily | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.replace(/^\/|\/$/g, '').replace(/^(hardware|products)\//, '');
  return HARDWARE_PRODUCTS.find((p) => p.slug === cleanSlug);
}

// Alias for compatibility
export function getProductBySlug(slug: string): ProductFamily | undefined {
  return getHardwareBySlug(slug);
}

export function getPublishedHardware(): ProductFamily[] {
  return HARDWARE_PRODUCTS.filter((p) => p.publicationStatus === 'published');
}

export function getPublishedProducts(): ProductFamily[] {
  return getPublishedHardware();
}

export function getAllSoftwareProducts(): SoftwareProduct[] {
  return SOFTWARE_PRODUCTS;
}

export function getSoftwareProductBySlug(slug: string): SoftwareProduct | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.replace(/^\/|\/$/g, '').replace(/^software\//, '');
  return SOFTWARE_PRODUCTS.find((s) => s.slug === cleanSlug);
}

export function getAllServices(): IndustrialService[] {
  return VERIFIED_SERVICES;
}

export function getServiceById(id: string): IndustrialService | undefined {
  return VERIFIED_SERVICES.find((s) => s.id === id);
}

export function getServicesByCategory(category: string): IndustrialService[] {
  if (category === 'All') return VERIFIED_SERVICES;
  return VERIFIED_SERVICES.filter((s) => s.category === category);
}

export function countPlaceholderSpecs(item: { specifications: { items: { isPlaceholder?: boolean }[] }[] }): number {
  let count = 0;
  for (const section of item.specifications) {
    for (const spec of section.items) {
      if (spec.isPlaceholder) {
        count++;
      }
    }
  }
  return count;
}

export function formatPhoneForHref(phone: string): string {
  return `tel:${phone.replace(/[\s-]/g, '')}`;
}

export function generateMailtoLink(
  recipient: string,
  subject: string,
  fields: { label: string; value: string }[]
): string {
  const bodyText = fields
    .map((f) => `${f.label}: ${f.value}`)
    .join('\n\n');
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
}

export function validateContactForm(values: ContactFormValues): ValidationResult {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.fullName || values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email || !emailRegex.test(values.email.trim())) {
    errors.email = 'Please provide a valid corporate email address.';
  }

  if (values.phone && values.phone.trim().length > 0) {
    const phoneClean = values.phone.replace(/[\s()+-]/g, '');
    if (phoneClean.length < 7 || phoneClean.length > 15) {
      errors.phone = 'Please enter a valid telephone or mobile number.';
    }
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please provide enquiry details (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
