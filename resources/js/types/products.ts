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
  reviewCount: number;
  image: string;
  images: string;
  colors: string;
}

// 'rating,'', 'sizes', 'is_featured', 'in_stock'