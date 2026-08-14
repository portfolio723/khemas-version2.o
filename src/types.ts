export interface ProductImage {
  id: string;
  title: string;
  caption: string;
  viewType: 'primary' | 'alternate' | 'detail' | 'scale';
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  anchorId: string;
  name: string;
  subheading: string;
  description: string;
  images: ProductImage[];
  specifications: SpecificationItem[];
  materials?: string[];
  accessories?: string[];
  features: string[];
  fasterDelivery: {
    marketStandard: string;
    khemas: string;
  };
  freeWarehouseDelivery: string;
  applications: string;
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  productRequired: string;
  flowRange: string;
  quantityRequired: string;
}

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;
