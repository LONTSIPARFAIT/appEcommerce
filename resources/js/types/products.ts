export interface SimilarProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
}
export interface CreateProductItem {
  name: string;
  slug: string;
  price: number;
  original_price: number;
  description: string;
  features: string;
  image: File|null;
  images: File[]|null;
  colors: string;
  is_featured: string;
}

// 'is_featured', 'in_stock'