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
  rating: number;
  reviewCount: number;
  image: string;
}

//  '', 'rating', 'reviewCount', 'description', 'features', 'image', 'images', 'colors', 'sizes', 'is_featured', 'in_stock'