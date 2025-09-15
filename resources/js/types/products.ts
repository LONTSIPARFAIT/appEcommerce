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
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
}

// '', 'slug', 'price', 'original_price', 'rating', 'reviewCount', 'description', 'features', 'image', 'images', 'colors', 'sizes', 'is_featured', 'in_stock'