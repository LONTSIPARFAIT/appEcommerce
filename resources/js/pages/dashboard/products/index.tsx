import ProductsDataTable from '@/components/dashboard/ProductsDataTable';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { CategoryItem } from '@/types/categories';
import { ProductItem } from '@/types/products';
import { Head } from '@inertiajs/react'
import React from 'react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product',
        href: '/dashboard/products',
    },
];

export default function Products({categories,products}:{categories:CategoryItem[], products:ProductItem[]}) {
  const data = products.map((item)=>{
  const imagePath = `/storage/${item.image}`;
    return  {
      id: item.id,
      name: item.name,
      category: item.category.name,
      salesCount: 0,
      image: imagePath,
      stock: 0,
      price: item.price,
      status: item.stock,
    };
  })
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
        <Head title='Product' />
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
            <ProductsDataTable categories={categories} />
        </div>
    </AppLayout>
  )
}

