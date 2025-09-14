export interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  image: string;
  color: string;
}

export interface CreateCategoryItem {
  name: string;
  slug: string;
  image: File;
  color: string;
}