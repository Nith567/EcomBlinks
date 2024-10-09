export interface ProductVariant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  inventory_quantity: number;
}

export interface ProductImage {
  id: number;
  src: string;
  alt: string | null;
  width: number;
  height: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  images: Array<{ src: string; name: string }>;
  description: string;
}

export interface ShopifyApiResponse {
  products: Product[];
}
